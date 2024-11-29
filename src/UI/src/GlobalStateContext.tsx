import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { SendStatusType, SetSendStatus } from '@constants';
import type { TreeDataNode } from 'antd';

interface GlobalStateContextProps {
  isLogining: boolean;
  setIsLogining: (isLogining: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
  sendStatus: SendStatusType[];
  setSendStatus: SetSendStatus;
  localTreeData: TreeDataNode[];
  setLocalTreeData: Dispatch<SetStateAction<TreeDataNode[]>>;
  remoteTreeData: TreeDataNode[];
  setRemoteTreeData: Dispatch<SetStateAction<TreeDataNode[]>>;
  fileTreeKey: number;
  setFileTreeKey: Dispatch<SetStateAction<number>>;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogining, setIsLogining] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [sendStatus, setSendStatus] = useState<SendStatusType[]>([]);
  const [fileTreeKey, setFileTreeKey] = useState(0);
  const [localTreeData, setLocalTreeData] = useState<TreeDataNode[]>([
    {
      title: '根目錄',
      key: 'localStorage',
      children: undefined,
    },
  ]);
  const [remoteTreeData, setRemoteTreeData] = useState<TreeDataNode[]>([
    {
      title: '遠端根目錄',
      key: 'remoteStorage',
      children: undefined,
    },
  ]);

  return (
    <GlobalStateContext.Provider
      value={{
        isLogining,
        setIsLogining,
        message,
        setMessage,
        sendStatus,
        setSendStatus,
        localTreeData,
        setLocalTreeData,
        remoteTreeData,
        setRemoteTreeData,
        fileTreeKey,
        setFileTreeKey,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateContextProps => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};
