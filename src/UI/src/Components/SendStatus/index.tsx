import { useEffect, useRef } from 'react';
import { useGlobalState } from '@site/GlobalStateContext';

const SendStatus = () => {
  const { sendStatus } = useGlobalState();
  const lastItemRef = useRef<HTMLDivElement | null>(null);
  console.log(sendStatus);
  useEffect(() => {
    // 當 sendStatus 更新時，滾動到最後一個元素
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [sendStatus]);
  return (
    <div className='box-border w-full h-full p-2 pb-4 bg-gray-500 border rounded'>
      {/* 標題欄 */}
      <div className='box-border grid grid-cols-5 gap-1 p-2 text-white bg-gray-600 border rounded'>
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
            ref={index === sendStatus.length - 1 ? lastItemRef : null}
            className={`grid grid-cols-5 gap-1 p-2 ${index % 2 === 0 ? 'bg-gray-400' : 'bg-gray-300'} border rounded box-border`}
          >
            <div className='col-span-1 truncate'>{status.fileName}</div>
            <div className='col-span-1 truncate'>{status.fileSize} </div>
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
