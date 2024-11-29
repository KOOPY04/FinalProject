import os
from os.path import join
import subprocess
import platform
from datetime import datetime


def open_file(file_path, fallback_editor=None) -> str:
    """
    開啟文件的通用方法
    :param file_path: 文件路徑
    :param fallback_editor: 指定的備用編輯器路徑（若預設應用程式失敗）
    :return: str
    """
    if not os.path.exists(file_path):
        print(f"文件不存在: {file_path}")
        return "文件不存在"

    try:
        if platform.system() == "Windows":
            os.startfile(file_path)
        elif platform.system() == "Darwin":
            subprocess.run(["open", file_path], check=True)
        elif platform.system() == "Linux":
            subprocess.run(["xdg-open", file_path], check=True)
        else:
            raise OSError(f"未支援的平台: {platform.system()}")
    except Exception as e:
        print(f"無法使用預設應用程式開啟文件: {e}")
        if fallback_editor:
            try:
                subprocess.run([fallback_editor, file_path], check=True)
                print(f"已使用備用編輯器打開文件: {file_path}")
            except Exception as e:
                print(f"備用編輯器也無法打開文件: {e}")
        return "無法使用預設應用程式開啟文件"


def create_newFile(directory: str, extension=".txt") -> str:
    """
    創建新文件。
    :param file_path: 文件路徑
    """
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    file_name = f"{timestamp}{extension}"
    file_path = join(directory, file_name)
    try:
        with open(file_path, 'w') as f:
            f.write("")
    except Exception as e:
        return f"Error: {e}"
    return file_name
