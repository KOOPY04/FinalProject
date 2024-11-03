import React, { createContext, useContext, useState, ReactNode } from 'react';

interface GlobalStateContextProps {
  isLogining: boolean;
  setIsLogining: (isLogining: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
}

const GlobalStateContext = createContext<GlobalStateContextProps | undefined>(undefined);

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLogining, setIsLogining] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');

  return (
    <GlobalStateContext.Provider value={{ isLogining, setIsLogining, message, setMessage }}>
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
