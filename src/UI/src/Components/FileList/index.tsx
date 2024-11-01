import Local from './Local';
import Remote from './Remote';
import { SendStatusType } from './FileTree';

interface FileListProps {
  setSendStatus: React.Dispatch<React.SetStateAction<SendStatusType[]>>;
}

const FileList: React.FC<FileListProps> = ({ setSendStatus }: FileListProps) => {
  return (
    <div className='flex flex-row w-full h-full gap-2'>
      <div className='flex-1'>
        <Local setSendStatus={setSendStatus} />
      </div>
      <div className='flex-1'>
        <Remote setSendStatus={setSendStatus} />
      </div>
    </div>
  );
};

export default FileList;
