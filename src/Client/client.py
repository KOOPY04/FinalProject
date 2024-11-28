
from os.path import dirname, join, splitext, basename, exists, isdir
from os import listdir, makedirs
import grpc
import sys
from proto import hello_pb2, hello_pb2_grpc
from google.protobuf import empty_pb2
from Utils.File import open_file, create_newFile


class Client:
    def __init__(self, server_address: str):
        """
        初始化客戶端類，設定 gRPC 服務端位址並建立連線。
        """
        self.server_address = server_address
        self.channel = None
        self.client = None
        self.isLogin = False
        self.src_dir: str = dirname(dirname(__file__))
        self.data_dir: str = join(self.src_dir, "Data")
        # self.remote_dir: str = join(self.data_dir, "remoteStorage")
        self.local_dir: str = join(self.data_dir, "localStorage")
        self.downloads_dir: str = join(self.local_dir, "downloads")
        # self.uploads_dir: str = join(self.remote_dir, "uploads")

        makedirs(self.downloads_dir, exist_ok=True)

    def connect(self, timeout=5) -> bool:
        """
        建立與 gRPC 伺服器的連接，等待通道準備好後返回。
        """
        try:
            self.channel = grpc.insecure_channel(self.server_address)
            grpc.channel_ready_future(self.channel).result(timeout=timeout)
            self.client = hello_pb2_grpc.GreeterStub(self.channel)
            print(f"Connected to gRPC server at {self.server_address}")
            return True
        except grpc.FutureTimeoutError:
            print(f"Failed to connect to gRPC server at {
                  self.server_address} (timeout after {timeout} seconds)")
            return False
        except grpc.RpcError as e:
            print(f"Failed to connect to gRPC server: {e.details()}")
            return False

    @staticmethod
    def get_filepath(filename: str, extension: str) -> str:
        return f'{filename}{extension}'

    @staticmethod
    def read_to_iter(file_path: str, chunk_size: int = 1024, destination_folder: str = None):
        """
        讀取文件並生成上傳流。
        :parm file_path: 文件路徑
        :parm chunk_size: 塊大小
        """
        file_name, extension = splitext(basename(file_path))
        if destination_folder:
            metadata = hello_pb2.MetaData(
                filename=file_name, extension=extension, destination_folder=destination_folder)
        else:
            metadata = hello_pb2.MetaData(
                filename=file_name, extension=extension)
        yield hello_pb2.UploadFileRequest(metadata=metadata)
        with open(file_path, 'rb') as f:
            while True:
                chunk = f.read(chunk_size)
                if chunk:
                    entry_request = hello_pb2.UploadFileRequest(
                        chunk_data=chunk)
                    yield entry_request
                else:
                    break

    def upload_file(self, file_path: str, destination_folder: str, chunk_size: int = 1024) -> str:
        """
        上傳文件。

        :param file_path: 文件路徑
        :param chunk_size: 塊大小
        :param destination_folder: 選擇的遠端目標資料夾
        :return: 上傳結果
        :rtype: hello_pb2.StringResponse
        """
        if not self.isLogin:
            return "Please login first."
        try:
            ret = self.client.UploadFile(self.read_to_iter(
                file_path, chunk_size, destination_folder))
            return ret.message
        except grpc.RpcError as e:
            return f"Failed to upload file: {e.details()}"

    def list_files(self) -> list[str] | str:
        """
        列出文件。
        """
        if not self.isLogin:
            return "Please login first."
        response = self.client.ListFiles(empty_pb2.Empty())
        return response.files

    def list_remote_folders(self) -> list[str] | str:
        """
        列出遠端文件夾。
        """
        if not self.isLogin:
            return "Please login first."
        response = self.client.ListRemoteFolders(empty_pb2.Empty())
        return response.files

    def list_local_folders(self) -> list[str]:
        """
        列出本地文件夾。
        """
        folders = ["localStorage"]
        for file in listdir(self.local_dir):
            folder_path = join(self.local_dir, file)
            if exists(folder_path) and isdir(folder_path):
                folders.append(file)
        return folders

    def download_file(self, filename: str, extension: str, destination_folder: str = None) -> bool:
        """
        下載文件。
        :param filename: 文件名
        :param extension: 文件擴展名
        :param chunk_size: 塊大小
        :param destination_folder: 目標資料夾（選填）
        """
        if not self.isLogin:
            return False
        response = self.client.DownloadFile(
            hello_pb2.MetaData(filename=filename, extension=extension, destination_folder=destination_folder))
        try:
            filename = self.get_filepath(filename, extension)
            if destination_folder == "localStorage":
                target_dir = self.local_dir
            else:
                target_dir = join(self.local_dir, destination_folder)
            for data in response:
                with open(join(target_dir, filename), mode="ab") as f:
                    f.write(data.chunk_data)
            return True
        except Exception as e:
            return False

    def delete_file(self, filename: str, extension: str) -> str:
        """
        刪除文件。
        :param filename: 文件名
        :param extension: 文件擴展名
        """
        if not self.isLogin:
            return "Please login first."
        response = self.client.DeleteFile(
            hello_pb2.MetaData(filename=filename, extension=extension))
        return response.message

    def login(self, username: str, password: str) -> bool:
        """
        登錄。
        :param username: 用戶名
        :param password: 密碼
        """
        response = self.client.Login(
            hello_pb2.LoginRequest(username=username, password=password))
        if response.message == "Login successful":
            self.isLogin = True
            return True
        return False

    @staticmethod
    def openFile(file_path: str) -> str:
        return open_file(file_path)

    @staticmethod
    def createNewFile(client, directory: str, isLocal: bool) -> str:
        if isLocal and client is None:
            filename: str = create_newFile(directory)
            if filename.startswith("Error"):
                return f'Error: {filename}'
            return f'已創建: {filename}'
        else:
            return client.client.CreateFile(hello_pb2.MetaData(destination_folder=directory))

    def close(self):
        """
        關閉連接。
        """
        if self.channel:
            self.channel.close()
            print("Connection closed.")


def client(args: list[str]):
    if args[0] == "test":
        from .client_test import client_test
        args = args[1:]
        client_test(args)
    else:
        from .client_ui import client_ui
        client_ui(args)
