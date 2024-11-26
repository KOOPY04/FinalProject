import React from 'react';
import FileTree from './FileTree';
import { TreeDataNode } from 'antd';
import { useGlobalState } from '@site/GlobalStateContext';

const handleNodeSelect = (key: React.Key, _: TreeDataNode) => {
  console.log('Selected node key:', key);
};

const Local = () => {
  const { localTreeData} = useGlobalState();

  return (
    <div className='h-full px-2 py-1 bg-gray-500 border-2 rounded'>
      <FileTree onNodeSelect={handleNodeSelect} initialTreeData={localTreeData} isLocal={true} />
    </div>
  );
};

export default Local;
