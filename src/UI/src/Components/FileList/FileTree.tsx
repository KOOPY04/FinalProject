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

const FileMenu = ({ isLocal }: { isLocal: boolean }) => (
  <Menu id={fileMenuId}>
    <Item onClick={() => console.log('開啟檔案')}>開啟檔案</Item>
    <Item onClick={() => console.log('刪除檔案')}>刪除檔案</Item>
    <Item onClick={() => console.log(isLocal ? '上傳檔案' : '下載檔案')}>
      {isLocal ? '上傳檔案' : '下載檔案'}
    </Item>
  </Menu>
);

const FolderMenu = ({
  nodeKey,
  onOpenFolder,
  nodeTitle,
}: {
  nodeKey: React.Key;
  onOpenFolder: (key: React.Key) => void;
  nodeTitle: string;
}) => (
  <Menu id={folderMenuId}>
    <Item onClick={() => onOpenFolder(nodeKey)}>開啟資料夾</Item>
    <Item onClick={() => console.log('刪除資料夾')} disabled={nodeTitle === '根目錄'}>
      刪除資料夾
    </Item>
    <Item onClick={() => console.log('新增檔案')}>新增檔案</Item>
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
    setExpandedKeys(isLocal ? ['localStorage'] : ['uploads']);
  }, []);

  const fetchChildren = async (key: React.Key): Promise<TreeDataNode[]> => {
    try {
      const children = await window.pywebview.api.get_children(key);
      const ret = JSON.parse(children);
      console.log(ret);

      if ('error' in ret) {
        console.error('Error:', ret.error);
        return [];
      }

      return ret;
    } catch (error) {
      console.error('Failed to fetch children:', error);
      return [];
    }
  };

  const onLoadData = async ({ key, children }: TreeDataNode): Promise<void> => {
    if (children) {
      return Promise.resolve();
    }
    return fetchChildren(key).then((newChildren) => {
      setTreeData((origin) =>
        origin.map((node) => {
          if (node.key === key) {
            return { ...node, children: newChildren };
          }
          return node;
        }),
      );
    });
  };

  // 處理右鍵菜單
  const handleContextMenu = (event: React.MouseEvent, node: TreeDataNode) => {
    event.preventDefault();

    // 將 node.title 轉換為字串
    const nodeTitle = typeof node.title === 'string' ? node.title : String(node.title);
    setSelectedNodeTitle(nodeTitle);
    setRightClickNodeKey(node.key);

    // 顯示不同的菜單
    if (node.isLeaf) {
      contextMenu.show({
        id: fileMenuId,
        event: event,
        props: {
          node,
        },
      });
    } else {
      contextMenu.show({
        id: folderMenuId,
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
        height={491}
      />
      <FileMenu isLocal={isLocal} />
      {rightClickNodeKey !== null && (
        <FolderMenu
          nodeKey={rightClickNodeKey as string}
          onOpenFolder={handleOpenFolder}
          nodeTitle={selectedNodeTitle}
        />
      )}
    </>
  );
};

export default FileTree;