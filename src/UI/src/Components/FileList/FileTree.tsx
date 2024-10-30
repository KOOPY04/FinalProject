import React, { useEffect, useState } from 'react';
import { Tree } from 'antd';
import type { TreeDataNode } from 'antd';
import { Menu, Item, contextMenu } from 'react-contexify';
import 'react-contexify/dist/ReactContexify.css';

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

const handleFileAction = async (action: string, node: TreeDataNode) => {
  const filePath = node.key; // 假設 key 是完整的檔案路徑
  console.log(`Action: ${action}, File path: ${filePath}`);
  const fileSize = await window.pywebview.api.get_file_size(filePath);
  console.log('FileSize:', fileSize);

  if (fileSize.error) {
    console.error(fileSize.error);
    return;
  }

  console.log(`File size: ${fileSize} KB`);

  // 根據 action 執行相應操作
  if (action === '上傳檔案') {
    console.log('開始上傳檔案...');
    await window.pywebview.api.upload_file(filePath);
  } else if (action === '下載檔案') {
    console.log('開始下載檔案...');
    await window.pywebview.api.download_file(filePath);
  }
};

// 檔案右鍵選單
const FileMenu = ({ isLocal, menuId }: { isLocal: boolean; menuId: string }) => (
  <Menu id={menuId}>
    <Item onClick={() => console.log('開啟檔案')}>開啟檔案</Item>
    <Item onClick={() => console.log('刪除檔案')}>刪除檔案</Item>
    <Item onClick={(e) => handleFileAction(isLocal ? '上傳檔案' : '下載檔案', e.props.node)}>
    {isLocal ? '上傳檔案' : '下載檔案'}
    </Item>
  </Menu>
);

// 資料夾右鍵選單
const FolderMenu = ({
  nodeKey,
  onOpenFolder,
  nodeTitle,
  isLocal,
  menuId,
}: {
  nodeKey: React.Key;
  onOpenFolder: (key: React.Key) => void;
  nodeTitle: string;
  isLocal: boolean;
  menuId: string;
}) => (
  <Menu id={menuId}>
    <Item onClick={() => onOpenFolder(nodeKey)}>開啟資料夾</Item>
    <Item onClick={() => console.log(isLocal ? '新增檔案' : '新增遠端檔案')}>
      {isLocal ? '新增檔案' : '新增遠端檔案'}
    </Item>
    <Item
      onClick={() => console.log('刪除資料夾')}
      disabled={
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
}) => {
  const [treeData, setTreeData] = useState<TreeDataNode[]>(initialTreeData);
  const [expandedKeys, setExpandedKeys] = useState<React.Key[]>([]);
  const [selectedNodeTitle, setSelectedNodeTitle] = useState<string>('');
  const [rightClickNodeKey, setRightClickNodeKey] = useState<React.Key | null>(null);
  const menuIds = getMenuIds(isLocal);
  useEffect(() => {
    setExpandedKeys(isLocal ? ['localStorage'] : ['remoteStorage']);
  }, [isLocal]);

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
    const nodeTitle = typeof node.title === 'string' ? node.title : String(node.title);
    setSelectedNodeTitle(nodeTitle);
    setRightClickNodeKey(node.key);
    if (node.isLeaf) {
      contextMenu.show({
        id: menuIds.fileMenuId,
        event: event,
        props: {
          node,
        },
      });
    } else {
      contextMenu.show({
        id: menuIds.folderMenuId,
        event: event,
        props: {
          node,
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
      <FileMenu isLocal={isLocal} menuId={menuIds.fileMenuId} />
      {rightClickNodeKey !== null && (
        <FolderMenu
          nodeKey={rightClickNodeKey as string}
          onOpenFolder={handleOpenFolder}
          nodeTitle={selectedNodeTitle}
          isLocal={isLocal}
          menuId={menuIds.folderMenuId}
        />
      )}
    </>
  );
};

export default FileTree;
