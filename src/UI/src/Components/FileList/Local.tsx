import React from 'react';
import FileTree from './FileTree';

type LocalProps = {
  setSendStatus: React.Dispatch<React.SetStateAction<any[]>>;
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
      <FileTree initialTreeData={initialTreeData} isLocal={true} setSendStatus={setSendStatus} />
    </div>
  );
};

export default Local;
