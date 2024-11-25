import React, { useEffect, useState } from 'react';
import { Tree, Modal, Select } from 'antd';
import type { TreeDataNode } from 'antd';
import { Menu, Item, contextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';
import { useGlobalState } from '@site/GlobalStateContext';

const { DirectoryTree } = Tree;
const { Option } = Select;

interface FileTreeProps {
  initialTreeData?: TreeDataNode[];
  isLocal: boolean;
  onNodeSelect?: (key: React.Key, node: TreeDataNode) => void;
}

const getMenuIds = (isLocal: boolean) => ({
  fileMenuId: `file_menu_${isLocal ? 'local' : 'remote'}`,
  folderMenuId: `folder_menu_${isLocal ? 'local' : 'remote'}`,
});

// 資料夾右鍵選單
const FolderMenu = ({
  nodeKey,
  onOpenFolder,
  nodeTitle,
  isLocal,
  menuId,
  disableMenu,
}: {
  nodeKey: React.Key;
  onOpenFolder: (key: React.Key) => void;
  nodeTitle: string;
  isLocal: boolean;
  menuId: string;
  disableMenu: boolean;
}) => (
  <Menu id={menuId}>
    <Item onClick={() => onOpenFolder(nodeKey)} disabled={disableMenu}>
      開啟資料夾
    </Item>
    <Item onClick={() => console.log(isLocal ? '新增檔案' : '新增遠端檔案')} disabled={disableMenu}>
      {isLocal ? '新增檔案' : '新增遠端檔案'}
    </Item>
    <Item
      onClick={() => console.log('刪除資料夾')}
      disabled={
        disableMenu ||
        nodeTitle === '根目錄' ||
        nodeTitle === '遠端根目錄' ||
        nodeTitle === 'downloads' ||
        nodeTitle === 'uploads'
      }
    >
      刪除資料夾
    </Item>
  </Menu>
);

const FileTree: React.FC<FileTreeProps> = ({
  initialTreeData = [
    {
      title: '根目錄',
      key: 'root',
      children: undefined,
    },
  ],
  isLocal,
  onNodeSelect,
}: FileTreeProps) => {
  const [treeData, setTreeData] = useState<TreeDataNode[]>(initialTreeData);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [selectedNodeTitle, setSelectedNodeTitle] = useState<string>('');
  const [rightClickNodeKey, setRightClickNodeKey] = useState<React.Key | null>(null);

  const [remoteFolders, setRemoteFolders] = useState<string[]>([]);
  const [localFolders, setLocalFolders] = useState<string[]>([]);
  const [RemoteFolderModalVisible, setRemoteFolderModalVisible] = useState(false);
  const [LocalFolderModalVisible, setLocalFolderModalVisible] = useState(false);
  const [selectedFolder, setSelectedFolder] = useState<string>('');

  const { setSendStatus } = useGlobalState();
  const menuIds = getMenuIds(isLocal);
  useEffect(() => {
    setExpandedKeys(isLocal ? ['localStorage'] : ['remoteStorage']);
  }, [isLocal]);

  const handleFileAction = async (
    action: string,
    node: TreeDataNode,
    remoteFolderPath?: string,
    localFolderPath?: string,
  ) => {
    const filePath = node.key;
    const fileSize = await window.pywebview.api.get_file_size(filePath);
    const size = JSON.parse(fileSize);

    if (size.error) {
      console.error(size.error);
      return;
    }

    const fileSizeKB = `${size.size}`;
    const direction = action === '上傳檔案' ? '上傳' : '下載';
    console.log(node.key);
    const file_path = node.key as string;
    const match = file_path.match(/[/\\]remoteStorage[/\\].+/);
    let desiredPath;
    if (match) {
      desiredPath = match[0];
    }
    const remotePath = isLocal ? '' : `${desiredPath}`;
    setSendStatus((prev) => [
      ...prev,
      {
        fileName: String(node.title),
        fileSize: fileSizeKB,
        direction,
        remotePath,
        status: '傳送中',
      },
    ]);

    try {
      if (action === '上傳檔案') {
        await window.pywebview.api.upload_file_to_remote(filePath, remoteFolderPath || '');
      } else if (action === '下載檔案') {
        await window.pywebview.api.download_file_to_local(filePath, localFolderPath || '');
      }
      const checkFileSize = await window.pywebview.api.get_file_size(filePath);
      const checkSize = JSON.parse(checkFileSize);

      if (checkSize.error) {
        throw new Error(checkSize.error);
      }

      setSendStatus((prev) =>
        prev.map((item) =>
          item.fileName === String(node.title) && item.direction === direction
            ? { ...item, status: '完成' }
            : item,
        ),
      );
    } catch (error) {
      console.error('File action failed:', error);

      setSendStatus((prev) =>
        prev.map((item) =>
          item.fileName === String(node.title) && item.direction === direction
            ? { ...item, status: '失敗' }
            : item,
        ),
      );
    }
  };

  const FileMenu = ({
    isLocal,
    menuId,
    disableMenu,
  }: {
    isLocal: boolean;
    menuId: string;
    disableMenu: boolean;
  }) => (
    <Menu id={menuId}>
      <Item onClick={() => console.log('開啟檔案')} disabled={disableMenu}>
        開啟檔案
      </Item>
      <Item onClick={() => console.log('刪除檔案')} disabled={disableMenu}>
        刪除檔案
      </Item>
      <Item
        onClick={() => {
          console.log(isLocal ? '上傳' : '下載');
          if (isLocal) {
            handleUploadToRemoteFolder();
          } else {
            handleDownloadToLocalFolder();
          }
        }}
        disabled={disableMenu}
      >
        {isLocal ? '上傳檔案' : '下載檔案'}
      </Item>
    </Menu>
  );

  const updateTreeData = (
    treeData: TreeDataNode[],
    key: React.Key,
    children: TreeDataNode[],
  ): TreeDataNode[] => {
    return treeData.map((node) => {
      if (node.key === key) {
        return {
          ...node,
          children,
        };
      } else if (node.children) {
        return {
          ...node,
          children: updateTreeData(node.children, key, children),
        };
      }
      return node;
    });
  };

  const fetchRemoteFolders = async (): Promise<string[]> => {
    try {
      const response = await window.pywebview.api.get_remote_folders();
      const data = response ? JSON.parse(response) : [];

      if (data.error) {
        console.error('Error:', data.error);
        return [];
      }
      console.log('data', data.folders);
      return data.folders || [];
    } catch (error) {
      console.error('Failed to fetch remote folders:', error);
      return [];
    }
  };

  const handleUploadToRemoteFolder = async () => {
    const folders = await fetchRemoteFolders();
    setRemoteFolders(folders);
    setRemoteFolderModalVisible(true);
  };

  const fetchLocalFolders = async (): Promise<string[]> => {
    try {
      const response = await window.pywebview.api.get_local_folders();
      const data = response ? JSON.parse(response) : [];

      if (data.error) {
        console.error('Error:', data.error);
        return [];
      }
      console.log('data', data.folders);
      return data.folders || [];
    } catch (error) {
      console.error('Failed to fetch local folders:', error);
      return [];
    }
  };

  const handleDownloadToLocalFolder = async () => {
    const folders = await fetchLocalFolders();
    setLocalFolders(folders);
    setLocalFolderModalVisible(true);
  };

  const fetchLocalChildren = async (key: React.Key): Promise<TreeDataNode[]> => {
    try {
      const children = await window.pywebview.api.get_local_children(key);

      const ret = JSON.parse(children);

      if (ret.error) {
        console.error('Error:', ret.error);
        return [];
      }

      if (!Array.isArray(ret) || ret.length === 0) {
        return [{ title: '無檔案', key: `${key}-empty`, isLeaf: true }];
      }

      return ret.map((item) => ({
        title: item.title,
        key: item.key,
        isLeaf: item.isLeaf,
        children: item.children || undefined,
      }));
    } catch (error) {
      console.error('Failed to fetch local children:', error);
      return [];
    }
  };

  const fetchRemoteChildren = async (key: React.Key): Promise<TreeDataNode[]> => {
    try {
      const children = await window.pywebview.api.get_server_children(key);

      const ret = JSON.parse(children);

      if (ret.error) {
        console.error('Error:', ret.error);
        return [];
      }

      if (!Array.isArray(ret) || ret.length === 0) {
        return [{ title: '無檔案', key: `${key}-empty`, isLeaf: true }];
      }

      return ret.map((item) => ({
        title: item.title,
        key: item.key,
        isLeaf: item.isLeaf,
        children: item.children || undefined,
      }));
    } catch (error) {
      console.error('Failed to fetch remote children:', error);
      return [];
    }
  };

  const onLoadData = async ({ key, children }: TreeDataNode): Promise<void> => {
    if (children) {
      return Promise.resolve();
    }
    const newChildren = isLocal ? await fetchLocalChildren(key) : await fetchRemoteChildren(key);
    setTreeData((origin) => updateTreeData(origin, key, newChildren));
  };

  const handleContextMenu = (event: React.MouseEvent, node: TreeDataNode) => {
    event.preventDefault();

    if (String(node.key).includes('-empty') || (node.children && node.children.length === 0)) {
      return; // 如果是無檔案節點則不顯示右鍵選單
    }

    const nodeTitle = typeof node.title === 'string' ? node.title : String(node.title);
    setSelectedNodeTitle(nodeTitle);
    setRightClickNodeKey(node.key);

    const isEmptyNode = node.children && node.children.length === 0;

    if (node.isLeaf) {
      contextMenu.show({
        id: menuIds.fileMenuId,
        event: event,
        props: {
          node,
          disableMenu: isEmptyNode,
        },
      });
    } else {
      contextMenu.show({
        id: menuIds.folderMenuId,
        event: event,
        props: {
          node,
          disableMenu: isEmptyNode,
        },
      });
    }
  };

  const handleOpenFolder = (key: React.Key) => {
    setExpandedKeys((prevExpandedKeys) => [...prevExpandedKeys, key]);
  };

  const findNodeByKey = (nodes: TreeDataNode[], key: React.Key): TreeDataNode | null => {
    for (const node of nodes) {
      if (node.key === key) return node;
      if (node.children) {
        const foundNode = findNodeByKey(node.children, key);
        if (foundNode) return foundNode;
      }
    }
    return null;
  };

  const handleFolderSelection = async () => {
    if (selectedFolder && rightClickNodeKey) {
      const node = findNodeByKey(treeData, rightClickNodeKey); // 檢查右鍵選取的節點是否正確
      console.log('選擇的資料夾:', selectedFolder);
      console.log('選擇的檔案節點:', node);

      if (node) {
        if (isLocal) {
          await handleFileAction('上傳檔案', node, selectedFolder, undefined); // 執行下載動作
        } else await handleFileAction('下載檔案', node, '', selectedFolder); // 執行上傳動作
      } else {
        console.warn('無法找到對應的檔案節點');
      }
    } else {
      console.warn('未選取資料夾或檔案節點');
    }

    if (isLocal) {
      setLocalFolderModalVisible(false);
    } else {
      setRemoteFolderModalVisible(false);
    }
  };

  return (
    <>
      <DirectoryTree
        loadData={onLoadData}
        treeData={treeData}
        onSelect={(selectedKeys, { node }) => onNodeSelect && onNodeSelect(selectedKeys[0], node)}
        expandedKeys={expandedKeys}
        onRightClick={({ event, node }) => handleContextMenu(event, node)}
        onExpand={(expandedKeys) => setExpandedKeys(expandedKeys)}
      />
      <Modal
        title='選擇目標資料夾'
        visible={isLocal ? RemoteFolderModalVisible : LocalFolderModalVisible}
        onOk={() => {
          if (selectedFolder) {
            handleFolderSelection();
          }
          setRemoteFolderModalVisible(false);
          setLocalFolderModalVisible(false);
        }}
        onCancel={() => {
          setRemoteFolderModalVisible(false);
          setLocalFolderModalVisible(false);
        }}
      >
        <Select
          style={{ width: '100%' }}
          placeholder='選擇資料夾'
          onChange={(value) => setSelectedFolder(value)}
          value={selectedFolder}
        >
          {(isLocal ? remoteFolders : localFolders).map((folder) => (
            <Option key={folder} value={folder}>
              {folder}
            </Option>
          ))}
        </Select>
      </Modal>
      <FileMenu isLocal={isLocal} menuId={menuIds.fileMenuId} disableMenu={false} />
      {rightClickNodeKey !== null && (
        <FolderMenu
          nodeKey={rightClickNodeKey as string}
          onOpenFolder={handleOpenFolder}
          nodeTitle={selectedNodeTitle}
          isLocal={isLocal}
          menuId={menuIds.folderMenuId}
          disableMenu={false}
        />
      )}
    </>
  );
};

export default FileTree;
