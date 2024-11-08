from typing import NoReturn
import webview
import os
import json


class Api:
    def __init__(self, args: list[str], base_dir=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))):
        from .client import Client
        self.client_obj = Client
        self.base_dir = base_dir
        self.local_storage_dir = os.path.join(base_dir, "Data\\localStorage")
        self.remote_storage_dir = os.path.join(base_dir, "Data\\remoteStorage")
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
            elif "remoteStorage" in file_path:
                if os.path.exists(os.path.join(self.remote_storage_dir, file_name + extension)):
                    response = self.client.GetFileSize(
                        file_name=file_name, extension=extension)
                    return json.dumps(float(response.message))
            else:
                return json.dumps({"error": "Invalid path"})
        return json.dumps({"error": "File not found"})

    def upload_file(self, file_path: str) -> str:
        if not self.isLogin:
            return False
        response = self.client.upload_file(file_path)
        if not response:
            return json.dumps({"error": "Upload failed"})
        return json.dumps({"message": "Upload successful"})

    def download_file(self, file_path: str) -> str:
        if not self.isLogin:
            return False
        file_name, extension = os.path.splitext(os.path.basename(file_path))
        response = self.client.download_file(file_name, extension)
        if not response:
            return json.dumps({"error": "Download failed"})
        return json.dumps({"message": "Download successful"})

    def delete_file(self, file_path: str) -> str:
        pass

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
