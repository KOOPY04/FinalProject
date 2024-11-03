type SetSendStatus = React.Dispatch<React.SetStateAction<SendStatusType[]>>;

type SendStatusType = {
  fileName: string;
  fileSize: string;
  direction: string;
  remotePath: string;
  status: string;
};
function CheckEnv(fn?: (...args: any[]) => Promise<void> | void, ...args: any[]) {
  const ret = window.pywebview ? true : false;
  if (ret && fn) {
    fn(...args);
  } else {
    if (!ret) console.error('Please use pywebview environment');
    if (fn) console.error('Function is not provided');
  }
}
export type { SendStatusType, SetSendStatus };
export { CheckEnv };
