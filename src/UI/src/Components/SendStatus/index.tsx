import React from 'react';

interface SendStatusProps {
  sendStatus: {
    fileName: string;
    fileSize: string;
    direction: string;
    remotePath: string;
    status: string;
  }[];
}

const SendStatus: React.FC<SendStatusProps> = ({ sendStatus }) => {
  console.log(sendStatus);
  return (
    <div className='w-full h-full p-2 pb-4 bg-gray-500 border rounded box-border'>
      {/* 標題欄 */}
      <div className='grid grid-cols-5 gap-1 bg-gray-600 text-white p-2 border rounded box-border'>
        <div className='col-span-1 truncate'>檔案名稱</div>
        <div className='col-span-1 truncate'>檔案大小/本地檔案</div>
        <div className='col-span-1 truncate'>方向</div>
        <div className='col-span-1 truncate'>遠端檔案</div>
        <div className='col-span-1 truncate'>狀態</div>
      </div>

      {/* 滾動容器 */}
      <div className='overflow-y-auto' style={{ maxHeight: '3.5rem' }}>
        {sendStatus.map((status, index) => (
          <div
            key={index}
            className={`grid grid-cols-5 gap-1 p-2 ${index % 2 === 0 ? 'bg-gray-400' : 'bg-gray-300'} border rounded box-border`}
          >
            <div className='col-span-1 truncate'>{status.fileName}</div>
            <div className='col-span-1 truncate'>{status.fileSize} KB</div>
            <div className='col-span-1 truncate'>{status.direction}</div>
            <div className='col-span-1 truncate'>{status.remotePath}</div>
            <div className='col-span-1 truncate'>{status.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SendStatus;
