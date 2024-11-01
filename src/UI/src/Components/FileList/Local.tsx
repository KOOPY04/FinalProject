import React from 'react';
import FileTree from './FileTree';
import { TreeDataNode } from 'antd';
import type { SetSendStatus } from '@constants';

interface LocalProps {
  setSendStatus: SetSendStatus;
};

const handleNodeSelect = (key: React.Key, _: TreeDataNode) => {
  console.log('Selected node key:', key);
};

const Local = ({ setSendStatus }: LocalProps) => {
  const initialTreeData = [
    {
      title: '根目錄',
      key: 'localStorage',
      children: undefined,
    },
  ];

  return (
    <div className='h-full px-2 py-1 bg-gray-500 border-2 rounded'>
      <FileTree onNodeSelect={handleNodeSelect} initialTreeData={initialTreeData} isLocal={true} setSendStatus={setSendStatus} />
    </div>
  );
};

export default Local;

