import React from 'react';
import FileTree from './FileTree';
import { TreeDataNode } from 'antd';
import type { SetSendStatus } from '@constants';

interface RemoteProps {
  setSendStatus: SetSendStatus;
};

const handleNodeSelect = (key: React.Key, _: TreeDataNode) => {
  console.log('Selected remote node key:', key);
};

const Remote = ({ setSendStatus }: RemoteProps) => {
  const initialTreeData = [
    {
      title: '遠端根目錄',
      key: 'remoteStorage',
      children: undefined,
    },
  ];

  return (
    <div className='h-full px-2 py-1 bg-gray-500 border-2 rounded'>
      <FileTree onNodeSelect={handleNodeSelect} initialTreeData={initialTreeData} isLocal={false} setSendStatus={setSendStatus} />
    </div>
  );
};

export default Remote;

