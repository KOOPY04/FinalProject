import React, { useEffect, useState } from 'react';
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';
import { Menu, Item, contextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';
import { useGlobalState } from '@site/GlobalStateContext';

const { DirectoryTree } = Tree;

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
    <Item onClick={() => onOpenFolder(nodeKey)} disabled={disableMenu}>開啟資料夾</Item>
    <Item onClick={() => console.log(isLocal ? '新增檔案' : '新增遠端檔案')} disabled={disableMenu}>
      {isLocal ? '新增檔案' : '新增遠端檔案'}
    </Item>
    <Item
      onClick={() => console.log('刪除資料夾')}
      disabled={disableMenu ||
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
  const { setSendStatus } = useGlobalState();
  const menuIds = getMenuIds(isLocal);
  useEffect(() => {
    setExpandedKeys(isLocal ? ['localStorage'] : ['remoteStorage']);
  }, [isLocal]);

  const handleFileAction = async (action: string, node: TreeDataNode) => {
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
    const match = file_path.match(/(\/remoteStorage\/.+)/);
    let desiredPath;
    if (match) {
      desiredPath = match[1];
      console.log(desiredPath);
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
        await window.pywebview.api.upload_file(filePath);
      } else if (action === '下載檔案') {
        await window.pywebview.api.download_file(filePath);
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
            : item
        ),
      );
    } catch (error) {
      console.error('File action failed:', error);

      setSendStatus((prev) =>
        prev.map((item) =>
          item.fileName === String(node.title) && item.direction === direction
            ? { ...item, status: '失敗' }
            : item
        ),
      );
    }

    const updatedChildren = isLocal
      ? await fetchLocalChildren(node.key)
      : await fetchRemoteChildren(node.key);
    setTreeData((origin) => updateTreeData(origin, node.key, updatedChildren));
  };

  const FileMenu = ({ isLocal, menuId, disableMenu }: { isLocal: boolean; menuId: string; disableMenu: boolean }) => (
    <Menu id={menuId}>
      <Item onClick={() => console.log('開啟檔案')} disabled={disableMenu}>開啟檔案</Item>
      <Item onClick={() => console.log('刪除檔案')} disabled={disableMenu}>刪除檔案</Item>
      <Item onClick={(e) => handleFileAction(isLocal ? '上傳檔案' : '下載檔案', e.props.node)} disabled={disableMenu}>
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

    // 檢查是否為無檔案的節點
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

  const onSelect = (selectedKeys: React.Key[], info: any) => {
    if (onNodeSelect && selectedKeys.length > 0) {
      const selectedNodeKey = selectedKeys[0];
      const selectedNode = info.node;
      onNodeSelect(selectedNodeKey, selectedNode);
    }
  };

  const handleOpenFolder = (key: React.Key) => {
    setExpandedKeys((prevExpandedKeys) => [...prevExpandedKeys, key]);
  };

  return (
    <>
      <DirectoryTree
        loadData={onLoadData}
        treeData={treeData}
        onSelect={onSelect}
        expandedKeys={expandedKeys}
        onRightClick={({ event, node }) => handleContextMenu(event, node)}
        onExpand={(expandedKeys) => setExpandedKeys(expandedKeys)}
      />
      <FileMenu isLocal={isLocal} menuId={menuIds.fileMenuId} disableMenu={false} />
      {rightClickNodeKey !== null && (
        <FolderMenu
          nodeKey={rightClickNodeKey as string}
          onOpenFolder={handleOpenFolder}
          nodeTitle={selectedNodeTitle}
          isLocal={isLocal}
          menuId={menuIds.folderMenuId} disableMenu={false}        />
      )}
    </>
  );
};

export default FileTree;
