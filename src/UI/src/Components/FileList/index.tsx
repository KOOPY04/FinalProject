import Local from './Local';
import Remote from './Remote';

interface FileListProps {
  localOpen: boolean;
  remoteOpen: boolean;
}

const FileList: React.FC<FileListProps> = ({
  localOpen,
  remoteOpen,
}: FileListProps) => {
  return (
    <div className='flex flex-row w-full h-full gap-2'>
      {localOpen && (
        <div className='flex-1'>
          <Local  />
        </div>
      )}
      {remoteOpen && (
        <div className='flex-1'>
          <Remote  />
        </div>
      )}
    </div>
  );
};

export default FileList;
