interface Window {
  pywebview: {
    api: {
      get_file_size(path: React.Key): Promise<string>;
      get_local_children(path: React.Key): Promise<string>;
      get_server_children(path: React.Key): Promise<string>;
      login(host: string, port: string, username: string, password: string): Promise<string>;
      hasLogin(): Promise<boolean>;
      close(): Promise<string>;
      read_host(): Promise<Array>;
      save_host(data: Array): Promise<string>;
      upload_file(path: React.Key): Promise<string>;
      download_file(path: React.Key): Promise<string>;
    };
  };
}
