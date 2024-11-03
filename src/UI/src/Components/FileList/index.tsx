import Local from './Local';
import Remote from './Remote';
import type { SetSendStatus } from '@constants';

interface FileListProps {
  setSendStatus: SetSendStatus;
  localOpen: boolean;
  remoteOpen: boolean;
}

const FileList: React.FC<FileListProps> = ({
  setSendStatus,
  localOpen,
  remoteOpen,
}: FileListProps) => {
  return (
    <div className='flex flex-row w-full h-full gap-2'>
      {localOpen && (
        <div className='flex-1'>
          <Local setSendStatus={setSendStatus} />
        </div>
      )}
      {remoteOpen && (
        <div className='flex-1'>
          <Remote setSendStatus={setSendStatus} />
        </div>
      )}
    </div>
  );
};

export default FileList;
