import React from 'react';
import FileTree from './FileTree';
import { TreeDataNode } from 'antd';


const handleNodeSelect = (key: React.Key, _: TreeDataNode) => {
  console.log('Selected node key:', key);
};

const Local = () => {
  const initialTreeData = [
    {
      title: '根目錄',
      key: 'localStorage',
      children: undefined,
    },
  ];

  return (
    <div className='h-full px-2 py-1 bg-gray-500 border-2 rounded'>
      <FileTree onNodeSelect={handleNodeSelect} initialTreeData={initialTreeData} isLocal={true}  />
    </div>
  );
};

export default Local;

