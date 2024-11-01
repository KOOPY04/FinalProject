interface Window {
  pywebview: {
    api: {
      [x: string]: any;
      get_file_size(filePath: React.Key): unknown;
      get_local_children(path: React.Key): Promise<string>;
      get_server_children(path: React.Key): Promise<string>;
      login(host: string, port: string, username: string, password: string): Promise<string>;
    };
  };
}
