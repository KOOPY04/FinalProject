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

const fileMenuId = 'file_menu';
const folderMenuId = 'folder_menu';

// 檔案右鍵選單
const FileMenu = ({ isLocal }: { isLocal: boolean }) => (
  <Menu id={fileMenuId}>
    <Item onClick={() => console.log('開啟檔案')}>開啟檔案</Item>
    <Item onClick={() => console.log('刪除檔案')}>刪除檔案</Item>
    <Item onClick={() => console.log(isLocal ? '上傳檔案' : '下載檔案')}>
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
}: {
  nodeKey: React.Key;
  onOpenFolder: (key: React.Key) => void;
  nodeTitle: string;
  isLocal: boolean;
}) => (
  <Menu id={folderMenuId}>
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
        id: fileMenuId,
        event: event,
        props: {
          isLocal,
          node,
        },
      });
    } else {
      contextMenu.show({
        id: folderMenuId,
        event: event,
        props: {
          isLocal,
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
      <FileMenu isLocal={isLocal} />
      {rightClickNodeKey !== null && (
        <FolderMenu
          nodeKey={rightClickNodeKey as string}
          onOpenFolder={handleOpenFolder}
          nodeTitle={selectedNodeTitle}
          isLocal={isLocal}
        />
      )}
    </>
  );
};

export default FileTree;
