from typing import NoReturn
import webview
import os
import json


class Api:
    def __init__(self, args: list[str], base_dir=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))):
        from .client import Client
        self.client_obj = Client
        self.base_dir = base_dir
        self.data_dir: str = os.path.join(self.base_dir, "Data")
        self.local_storage_dir = os.path.join(self.data_dir, "localStorage")
        self.remote_storage_dir = os.path.join(self.data_dir, "remoteStorage")
        self.client_download_dir = os.path.join(
            self.local_storage_dir, "downloads")
        self.client_upload_dir = os.path.join(
            self.remote_storage_dir, "uploads")
        self.save_dir = os.path.join(base_dir, "Data")
        self.hostfile = os.path.join(self.save_dir, "host.json")

        self.path_mapping = {
            "downloads": self.client_download_dir,
            "uploads": self.client_upload_dir,
            "localStorage": self.local_storage_dir,
            "remoteStorage": self.remote_storage_dir
        }
        self.isLogin = False
        self.client = None
        if not os.path.exists(self.hostfile):
            with open(self.hostfile, 'w') as f:
                json.dump([], f)

    def read_host(self):
        with open(self.hostfile, 'r') as f:
            return json.load(f)

    def save_host(self, data):
        print(data)
        print(type(data))
        try:
            with open(self.hostfile, 'w') as f:
                json.dump(data, f, indent=4)
            return {'status': 'success'}
        except Exception as e:
            return {'status': 'error', 'message': str(e)}

    def hasLogin(self):
        return self.isLogin

    def login(self, host: str, port: str, username: str, password: str) -> str:
        self.client = self.client_obj(f"{host}:{port}")
        if self.isLogin:
            return json.dumps({"message": "Already logged in"})

        self.isConnected = self.client.connect()
        if not self.isConnected:
            return json.dumps({"error": "Connection failed"})

        self.isLogin = self.client.login(username, password)
        if not self.isLogin:
            return json.dumps({"error": "Login failed"})

        # 在成功登錄後抓取 remoteStorage
        remote_children = self.get_server_children("remoteStorage")
        return json.dumps({"message": "Login successful", "remoteChildren": remote_children})

    def get_file_size(self, file_path: str) -> str:
        if os.path.exists(file_path):
            file_size = os.path.getsize(file_path)
            unit = ["B", "KB", "MB", "GB", "TB"]
            count = 0
            while file_size >= 1024:
                file_size /= 1024
                count += 1
            if count == 0:
                return json.dumps({"size": f"{file_size} {unit[count]}"})
            return json.dumps({"size": f"{file_size:.2f} {unit[count]}"})
        else:
            file_name, extension = os.path.splitext(
                os.path.basename(file_path))
            if "remoteStorage\\uploads" in file_path:
                if os.path.exists(os.path.join(self.client_upload_dir, file_name + extension)):
                    response = self.client.GetFileSize(
                        file_name=file_name, extension=extension)
                    return json.dumps({"size": float(response.message)})
                # /remoteStorage/uploads/A.txt
            elif "remoteStorage" in file_path:
                if os.path.exists(os.path.join(self.remote_storage_dir, file_name + extension)):
                    response = self.client.GetFileSize(
                        file_name=file_name, extension=extension)
                    return json.dumps(float(response.message))
            else:
                return json.dumps({"error": "Invalid path"})
        return json.dumps({"error": "File not found"})

    # def upload_file(self, file_path: str) -> str:
    #     if not self.isLogin:
    #         return False
    #     response = self.client.upload_file(file_path)
    #     print("Upload response:", response)  # 添加日誌檢查伺服器回應

    #     if not response:
    #         return json.dumps({"error": "Upload failed"})
    #     return json.dumps({"message": "Upload successful"})

    # def download_file(self, file_path: str) -> str:
    #     if not self.isLogin:
    #         return False
    #     file_name, extension = os.path.splitext(os.path.basename(file_path))
    #     # print("Downloading file:", file_name, extension)
    #     response = self.client.download_file(file_name, extension)
    #     print("Download response:", response)  # 添加日誌檢查伺服器回應
    #     if not response:
    #         return json.dumps({"error": "Download failed"})
    #     return json.dumps({"message": "Download successful"})

    def delete_file(self, file_path: str, isLocal: bool) -> str:
        if isLocal:
            if os.path.exists(file_path):
                if os.path.isdir(file_path):
                    os.rmdir(file_path)
                else:
                    os.remove(file_path)
                return json.dumps({"message": "File deleted successfully"})
            return json.dumps({"error": "File not found"})
        else:
            file_name, extension = os.path.splitext(file_path)
            response = self.client.delete_file(file_name, extension)
            if "not" in response:
                return json.dumps({"error": "File not found"})
            return json.dumps({"message": response})

    def open_File(self, file_path: str, isLocal: bool) -> str:
        if not isLocal:
            self.download_file_to_local(file_path, "localStorage")
        ret: str = self.client_obj.openFile(file_path)
        if ret:
            return json.dumps({"error": ret})

    def create_newFile(self, file_path: str, isLocal: bool) -> str:
        response = self.client_obj.createNewFile(self.client,
                                                 self.path_mapping.get(file_path, file_path), isLocal)
        return json.dumps({"message": response.message})

    def get_remote_folders(self) -> str:
        if not self.isLogin:
            return json.dumps({"error": "尚未登入"})
        try:
            response = self.client.list_remote_folders()  # 從伺服器獲取檔案/資料夾列表
            folders = list(response)
            if not response:  # 如果沒有檔案或資料夾
                return json.dumps({"error": "沒有找到遠端資料夾"})

            if "error" in response:
                return json.dumps({"error": "無法取得遠端資料夾: " + response["error"]})

            return json.dumps({"folders": folders})
        except Exception as e:
            print(e)
            return json.dumps({"error": str(e)})

    def upload_file_to_remote(self, file_path: str, remote_folder: str) -> str:
        if not self.isLogin:
            return json.dumps({"error": "Please log in first"})
        # print("Uploading file to:", remote_folder)
        response = self.client.upload_file(
            file_path, destination_folder=remote_folder)

        if "Upload successful" in response:
            return json.dumps({"message": "File uploaded successfully"})
        else:
            return json.dumps({"error": "Upload failed"})

    def get_local_folders(self) -> str:
        if not self.isLogin:
            return json.dumps({"error": "Please log in first"})
        try:
            response = self.client.list_local_folders()
            folders = list(response)
            # print(folders)
            if not response:  # 如果沒有檔案或資料夾
                return json.dumps({"error": "沒有找到本地資料夾"})

            if "error" in response:
                return json.dumps({"error": "無法取得本地資料夾: " + response["error"]})

            return json.dumps({"folders": folders})
        except Exception as e:
            print(e)
            return json.dumps({"error": str(e)})

    def download_file_to_local(self, file_path: str, local_folder: str) -> str:
        if not self.isLogin:
            return json.dumps({"error": "Please log in first"})
        print("Downloading file:", file_path + " to " + local_folder)
        file_name, extension = os.path.splitext(os.path.basename(file_path))
        print("Downloading file:", file_name, extension)
        response = self.client.download_file(
            file_name, extension, destination_folder=local_folder)
        if not response:
            return json.dumps({"error": "Download failed"})
        return json.dumps({"message": "Download successful"})

    def close(self) -> str:
        if self.isLogin:
            self.client.close()
            self.isLogin = False
        return json.dumps({"message": "Connection closed"})

    def get_local_children(self, path: str) -> str:
        if path in self.path_mapping:
            full_path = self.path_mapping[path]
        else:
            found = False
            for _, root_path in self.path_mapping.items():
                if path.startswith(root_path):
                    full_path = path
                    found = True
                    break
            if not found:
                return json.dumps({"error": "Invalid path or path not under allowed directories"})
        try:
            children = []
            if os.path.isdir(full_path):
                for entry in os.listdir(full_path):
                    entry_path = os.path.join(full_path, entry)
                    is_leaf = not os.path.isdir(entry_path)
                    children.append({
                        "title": entry,
                        "key": entry_path,
                        "isLeaf": is_leaf
                    })
            elif os.path.isfile(full_path):
                children.append({
                    "title": os.path.basename(full_path),
                    "key": full_path,
                    "isLeaf": True
                })
            else:
                return json.dumps({"error": f"Path {full_path} is not a valid file or directory"})

            return json.dumps(children)
        except Exception as e:
            return json.dumps({"error": str(e)})

    def get_server_children(self, path: str) -> str:

        if path != "remoteStorage" and not path.startswith(os.path.join(self.remote_storage_dir)):
            return json.dumps({"error": f"Invalid path: {path}. Use 'remoteStorage'."})
        if path in self.path_mapping:
            full_path = self.path_mapping[path]
        else:
            found = False
            for _, root_path in self.path_mapping.items():
                if path.startswith(root_path):
                    full_path = path
                    found = True
                    break
            if not found:
                return json.dumps({"error": "Invalid path or path not under allowed directories"})

        try:
            children = []
            if os.path.isdir(full_path):
                for entry in os.listdir(full_path):
                    entry_path = os.path.join(full_path, entry)
                    is_leaf = not os.path.isdir(entry_path)
                    children.append({
                        "title": entry,
                        "key": entry_path,
                        "isLeaf": is_leaf
                    })
            elif os.path.isfile(full_path):
                children.append({
                    "title": os.path.basename(full_path),
                    "key": full_path,
                    "isLeaf": True
                })
            else:
                return json.dumps({"error": f"Path {full_path} is not a valid file or directory"})

            return json.dumps(children)
        except Exception as e:
            return json.dumps({"error": str(e)})


def client_test(args: list[str]) -> NoReturn:
    api = Api(args)
    current_dir = os.path.dirname(os.path.abspath(__file__))
    index_path = os.path.join(current_dir, 'dist/index.html')
    webview.create_window(
        'File Uploader', index_path, js_api=api, resizable=True, width=1000, height=885)
    webview.start(debug=True)
