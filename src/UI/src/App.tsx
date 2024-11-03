import { ToolBar, Login, ConnectStatus, FileList, SendStatus } from '@components';
import { useState } from 'react';
import { SendStatusType } from '@constants';

const App = () => {
  const [message, setMessage] = useState<string>('');
  const [sendStatus, setSendStatus] = useState<SendStatusType[]>([]);
  const [connectStatusOpen, setConnectStatusOpen] = useState<boolean>(true);
  const [localfileListOpen, setLocalFileListOpen] = useState<boolean>(true);
  const [remoteFileListOpen, setRemoteFileListOpen] = useState<boolean>(true);
  const [sendStatusOpen, setSendStatusOpen] = useState<boolean>(true);
  const [fileTreeKey, setFileTreeKey] = useState(0);

  const handleReload = () => {
    console.log('Reloading...');
    setFileTreeKey((prevKey) => prevKey + 1);
  };
  const toggleConnectStatusOpen = () => setConnectStatusOpen(!connectStatusOpen);
  const toggleLocalFileListOpen = () => setLocalFileListOpen(!localfileListOpen);
  const toggleSendStatusOpen = () => setSendStatusOpen(!sendStatusOpen);
  const toggleRemoteFileListOpen = () => setRemoteFileListOpen(!remoteFileListOpen);
  console.log(localfileListOpen, remoteFileListOpen);
  return (
    <div className='grid grid-rows-[auto_auto_2fr_auto] h-screen min-w-full gap-1 p-2 bg-gray-700'>
      <div>
        <ToolBar
          handleReload={handleReload}
          toggleConnectStatusOpen={toggleConnectStatusOpen}
          toggleLocalFileListOpen={toggleLocalFileListOpen}
          toggleRemoteFileListOpen={toggleRemoteFileListOpen}
          toggleSendStatusOpen={toggleSendStatusOpen}
        />
        <Login setMessage={setMessage} />
      </div>
      {connectStatusOpen && (
        <div className='h-28'>
          <ConnectStatus message={message} />
        </div>
      )}
      {(localfileListOpen || remoteFileListOpen) && (
        <div className='grid grid-cols-1 gap-1'>
          <FileList
            key={fileTreeKey}
            setSendStatus={setSendStatus}
            localOpen={localfileListOpen}
            remoteOpen={remoteFileListOpen}
          />
        </div>
      )}
      {sendStatusOpen && (
        <div className='h-28'>
          <SendStatus sendStatus={sendStatus} />
        </div>
      )}
    </div>
  );
};

export default App;
