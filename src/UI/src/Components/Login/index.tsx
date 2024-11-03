import React, { useState } from 'react';
import { CheckEnv } from '@constants';
interface LoginProps {
  setMessage: (message: string) => void;
}

const Login: React.FC<LoginProps> = ({ setMessage }) => {
  const [Host, setHost] = useState<string>('127.0.0.1');
  const [Username, setUsername] = useState<string>('');
  const [Password, setPassword] = useState<string>('');
  const [Port, setPort] = useState<string>('50051');
  const Connect = () => {
    CheckEnv(async () => {
      if (Host === '' || Port === '' || Username === '' || Password === '') {
        setMessage('請輸入完整資訊');
        return;
      }
      const ret = await window.pywebview.api.login(Host, Port, Username, Password);
      const data = JSON.parse(ret);
      if ('error' in data) {
        setMessage(data.error);
      } else setMessage(data.message);
    });
  };
  return (
    <div className='flex flex-wrap items-center justify-start p-2 bg-gray-500 border border-white gap-7'>
      <div className='flex items-center'>
        <label htmlFor='host' className='mr-1 text-sm text-white whitespace-nowrap'>
          主機(H):
        </label>
        <input
          type='text'
          id='host'
          className='px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500'
          value={Host}
          onChange={(e) => setHost(e.target.value)}
        />
      </div>
      <div className='flex items-center'>
        <label htmlFor='username' className='mr-1 text-sm text-white whitespace-nowrap'>
          使用者名稱(U):
        </label>
        <input
          type='text'
          id='username'
          className='px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500'
          value={Username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='flex items-center'>
        <label htmlFor='password' className='mr-1 text-sm text-white whitespace-nowrap'>
          密碼(W):
        </label>
        <input
          type='password'
          id='password'
          className='px-2 py-1 text-sm border border-gray-300 rounded w-28 focus:outline-none focus:ring-1 focus:ring-cyan-500'
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className='flex items-center'>
        <label htmlFor='port' className='mr-1 text-sm text-white whitespace-nowrap'>
          連接埠(P):
        </label>
        <input
          type='number'
          id='port'
          className='w-20 px-2 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-cyan-500'
          value={Port}
          onChange={(e) => setPort(e.target.value)}
        />
      </div>
      <button
        className='px-3 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
        onClick={Connect}
      >
        快速連線(Q)
      </button>
    </div>
  );
};

export default Login;
