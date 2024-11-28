from concurrent import futures
import grpc
from proto import hello_pb2, hello_pb2_grpc
from Utils.parser import Parser
from Utils.File import create_newFile

from os.path import dirname, join, exists, getsize, isdir, isfile
from os import remove, listdir, makedirs, rmdir


def get_filepath(filename: str, extension: str) -> str:
    return f"{filename}{extension}"


class Greeter(hello_pb2_grpc.GreeterServicer):
    def __init__(self):
        self.src_dir: str = dirname(dirname(__file__))
        self.data_dir: str = join(self.src_dir, "Data")
        self.remote_dir: str = join(self.data_dir, "remoteStorage")
        self.uploads_dir: str = join(self.remote_dir, "uploads")
        self.chunk_size: int = 1024

    def GetFileSize(self, request, context):
        filepath = get_filepath(request.filename, request.extension)

        if exists(join(self.remote_dir, filepath)):
            file_size = getsize(join(self.remote_dir, filepath))
            unit = ["B", "KB", "MB", "GB", "TB"]
            count = 0
            while file_size >= 1024:
                file_size /= 1024
                count += 1

            if count == 0:
                return hello_pb2.StringResponse(message=f"{file_size} {unit[count]}")
            return hello_pb2.StringResponse(message=f"{file_size:.2f} {unit[count]}")

        return hello_pb2.StringResponse(message="0")

    def ListRemoteFolders(self, request, context):
        # 獲取所有資料夾名稱及路徑
        folders = ['remoteStorage']
        for file in listdir(self.remote_dir):
            folder_path = join(self.remote_dir, file)
            if exists(folder_path) and not file in folders:
                if isdir(folder_path):
                    folders.append(file)

        return hello_pb2.FileList(files=folders)

    def UploadFile(self, request_iterator, context):
        data: bytearray = bytearray()
        destination_folder = ""
        filepath = ""
        for request in request_iterator:
            if request.metadata.filename and request.metadata.extension:
                filepath = get_filepath(
                    request.metadata.filename, request.metadata.extension)
                destination_folder = request.metadata.destination_folder
                continue
            data.extend(request.chunk_data)

        if destination_folder == "remoteStorage":
            target_dir = self.remote_dir
        else:
            target_dir = join(self.remote_dir, destination_folder)

        makedirs(target_dir, exist_ok=True)

        with open(join(target_dir, filepath), 'wb') as file:
            file.write(data)
        return hello_pb2.StringResponse(message=f'File {filepath} uploaded to {destination_folder}.')

    def DownloadFile(self, request, context):

        filepath = get_filepath(request.filename, request.extension)
        if exists(join(self.remote_dir, filepath)):
            with open(join(self.remote_dir, filepath), 'rb') as file:
                while True:
                    chunk = file.read(self.chunk_size)
                    if chunk:
                        yield hello_pb2.FileResponse(chunk_data=chunk)
                    else:
                        return

    def ListFiles(self, request, context):
        files = listdir(self.remote_dir)
        return hello_pb2.FileList(files=files)

    def DeleteFile(self, request, context):
        filepath = get_filepath(request.filename, request.extension)
        if exists(join(self.uploads_dir, filepath)):
            if isfile(join(self.uploads_dir, filepath)):
                remove(join(self.uploads_dir, filepath))
            else:
                rmdir(join(self.uploads_dir, filepath))
            return hello_pb2.StringResponse(message=f'File {filepath} deleted.')
        return hello_pb2.StringResponse(message=f'File {filepath} not found.')

    def Login(self, request, context):
        if request.username == "admin" and request.password == "admin":
            return hello_pb2.StringResponse(message="Login successful")
        return hello_pb2.StringResponse(message="Login failed. Incorrect username or password")

    def CreateFile(self, request, context):
        filename: str = create_newFile(request.destination_folder)
        if filename.startswith("Error"):
            return hello_pb2.StringResponse(message=f'Error: {filename}')
        return hello_pb2.StringResponse(message=f'File {filename} created.')


def server(args: list[str]):
    connect_address = Parser(args).connect_address()
    server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
    hello_pb2_grpc.add_GreeterServicer_to_server(Greeter(), server)
    print(f"Server start at {connect_address}")
    server.add_insecure_port(connect_address)
    server.start()
    server.wait_for_termination()
