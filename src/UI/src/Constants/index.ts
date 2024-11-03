type SetSendStatus = React.Dispatch<React.SetStateAction<SendStatusType[]>>;

type SendStatusType = {
  fileName: string;
  fileSize: string;
  direction: string;
  remotePath: string;
  status: string;
};
async function CheckEnv(
  fn?: (...args: any[]) => Promise<void> | void,
  ...args: any[]
): Promise<void> {
  const isPyWebviewEnv = Boolean(window.pywebview);

  if (isPyWebviewEnv) {
    if (typeof fn === 'function') {
      try {
        await fn(...args); // 如果 fn 是異步函數，這裡會等待其完成
      } catch (error) {
        console.error('Error executing the provided function:', error);
      }
    } else {
      console.error('Provided function is not valid.');
    }
  } else {
    console.error('Please use pywebview environment');
  }
}
export type { SendStatusType, SetSendStatus };
export { CheckEnv };
