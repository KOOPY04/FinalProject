type SetSendStatus = React.Dispatch<React.SetStateAction<SendStatusType[]>>;

type SendStatusType = {
  fileName: string;
  fileSize: string;
  direction: string;
  remotePath: string;
  status: string;
};
// async function CheckEnv(
//   fn?: (...args: any[]) => Promise<void> | void,
//   ...args: any[]
// ): Promise<void> {
//   const isPyWebviewEnv = Boolean(window.pywebview);

//   if (isPyWebviewEnv) {
//     if (typeof fn === 'function') {
//       try {
//         await fn(...args);
//       } catch (error) {
//         console.error('Error executing the provided function:', error);
//       }
//     } else {
//       console.error('Provided function is not valid.');
//     }
//   } else {
//     console.error('Please use pywebview environment');
//   }
// }
// const safeExecute = async <T>(fn: () => Promise<T>): Promise<T | null> => {
//   try {
//     return await fn();
//   } catch (error) {
//     console.error('Error in safeExecute:', error);
//     return null;
//   }
// };
async function checkAndExecute<T>(
  fn?: (...args: any[]) => Promise<T> | T,
  ...args: any[]
): Promise<T | null> {
  const isPyWebviewEnv = Boolean(window.pywebview);

  if (!isPyWebviewEnv) {
    console.error('Please use pywebview environment');
    return null;
  }

  if (typeof fn !== 'function') {
    console.error('Provided function is not valid.');
    return null;
  }

  try {
    const result = await fn(...args);
    return result as T;
  } catch (error) {
    console.error('Error executing the provided function:', error);
    return null;
  }
}

export type { SendStatusType, SetSendStatus };
// export { CheckEnv };
export { checkAndExecute };
