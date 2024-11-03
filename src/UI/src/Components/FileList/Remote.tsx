import React from 'react';
import FileTree from './FileTree';
import { TreeDataNode, Empty } from 'antd';
import type { SetSendStatus } from '@constants';
import { useGlobalState } from '@site/GlobalStateContext';

interface RemoteProps {
  setSendStatus: SetSendStatus;
}

const handleNodeSelect = (key: React.Key, _: TreeDataNode) => {
  console.log('Selected remote node key:', key);
};

const Remote = ({ setSendStatus }: RemoteProps) => {
  const { isLogining } = useGlobalState();
  const initialTreeData = [
    {
      title: '遠端根目錄',
      key: 'remoteStorage',
      children: undefined,
    },
  ];
  return (
    <div className='h-full px-2 py-1 bg-gray-500 border-2 rounded'>
      {!isLogining ? (
        <Empty description='請先登入' />
      ) : (
        <FileTree
          onNodeSelect={handleNodeSelect}
          initialTreeData={initialTreeData}
          isLocal={false}
          setSendStatus={setSendStatus}
        />
      )}
    </div>
  );
};

export default Remote;
