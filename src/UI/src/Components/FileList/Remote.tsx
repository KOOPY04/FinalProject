import React from 'react';
import FileTree from './FileTree';
import { TreeDataNode, Empty } from 'antd';
import { useGlobalState } from '@site/GlobalStateContext';

const handleNodeSelect = (key: React.Key, _: TreeDataNode) => {
  console.log('Selected remote node key:', key);
};

const Remote = () => {
  const { isLogining, remoteTreeData } = useGlobalState();

  return (
    <div className='h-full px-2 py-1 bg-gray-500 border-2 rounded'>
      {!isLogining ? (
        <Empty description='請先登入' />
      ) : (
        <FileTree
          onNodeSelect={handleNodeSelect}
          initialTreeData={remoteTreeData}
          isLocal={false}
        />
      )}
    </div>
  );
};

export default Remote;
