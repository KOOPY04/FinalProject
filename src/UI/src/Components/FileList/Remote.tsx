import React from 'react';
import FileTree from './FileTree';

type RemoteProps = {
  setSendStatus: React.Dispatch<React.SetStateAction<any[]>>;
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
      <FileTree initialTreeData={initialTreeData} isLocal={false} setSendStatus={setSendStatus} />
    </div>
  );
};

export default Remote;
