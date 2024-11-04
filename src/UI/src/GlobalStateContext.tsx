import React, { createContext, useContext, useState, ReactNode } from 'react';
import { SendStatusType, SetSendStatus } from '@constants';

interface GlobalStateContextProps {
  isLogining: boolean;
  setIsLogining: (isLogining: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
  sendStatus: SendStatusType[];
  setSendStatus: SetSendStatus;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogining, setIsLogining] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [sendStatus, setSendStatus] = useState<SendStatusType[]>([]);

  return (
    <GlobalStateContext.Provider
      value={{ isLogining, setIsLogining, message, setMessage, sendStatus, setSendStatus }}
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
