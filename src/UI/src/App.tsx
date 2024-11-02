import { ToolBar, Login, ConnectStatus, FileList, SendStatus } from '@components';
import { useState } from 'react';
import { SendStatusType } from '@constants';

const App = () => {
  const [message, setMessage] = useState<string>('');
  const [sendStatus, setSendStatus] = useState<SendStatusType[]>([]);
  const [connectStatusOpen, setConnectStatusOpen] = useState<boolean>(false);
  const [localfileListOpen, setLocalFileListOpen] = useState<boolean>(false);
  const [remoteFileListOpen, setRemoteFileListOpen] = useState<boolean>(false);
  const [sendStatusOpen, setSendStatusOpen] = useState<boolean>(false);
  const toggleConnectStatusOpen = () => setConnectStatusOpen(!connectStatusOpen);
  const toggleLocalFileListOpen = () => setLocalFileListOpen(!localfileListOpen);
  const toggleSendStatusOpen = () => setSendStatusOpen(!sendStatusOpen);
  const toggleRemoteFileListOpen = () => setRemoteFileListOpen(!remoteFileListOpen);
  const gridTemplateRows = [
    'auto',
    connectStatusOpen ? 'auto' : '0',
    localfileListOpen || remoteFileListOpen ? '1fr' : '0',
    sendStatusOpen ? 'auto' : '0',
  ].join(' ');
  return (
    // grid-rows-[auto_auto_2fr_auto]
    <div className='grid h-screen min-w-full gap-1 p-2 bg-gray-700' style={{ gridTemplateRows }}>
      <div>
        <ToolBar
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
      {/* <div className='grid grid-rows-1 gap-1'>
        <div className='grid grid-cols-1 gap-1'>
          <FileList setSendStatus={setSendStatus} />
        </div>
      </div> */}
      {(localfileListOpen || remoteFileListOpen) && (
        <div className='grid grid-cols-1 gap-1'>
          <FileList setSendStatus={setSendStatus} />
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
