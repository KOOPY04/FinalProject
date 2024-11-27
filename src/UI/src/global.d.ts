interface Window {
  pywebview: {
    api: {
      get_file_size(path: React.Key): Promise<string>;
      get_local_children(path: React.Key): Promise<string>;
      get_server_children(path: React.Key): Promise<string>;
      get_remote_folders(): Promise<string>;
      get_local_folders(): Promise<string>;
      login(host: string, port: string, username: string, password: string): Promise<string>;
      hasLogin(): Promise<boolean>;
      close(): Promise<string>;
      read_host(): Promise<Array>;
      save_host(data: Array): Promise<string>;
      upload_file(path: React.Key, remotePath: string): Promise<string>;
      upload_file_to_remote(path: React.Key, remotePath: string): Promise<string>;
      download_file_to_local(path: React.Key, localPath: string): Promise<string>;
      download_file(path: React.Key): Promise<string>;
      list_remote_files(remotePath: string): Promise<string>;
      list_local_files(localpath: string): Promise<string>;
      delete_file(file_path: string, isLocal: bool): Promise<string>;
    };
  };
}
