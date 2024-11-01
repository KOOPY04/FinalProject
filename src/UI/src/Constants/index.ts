type SetSendStatus = React.Dispatch<React.SetStateAction<SendStatusType[]>>;

type SendStatusType = {
  fileName: string;
  fileSize: string;
  direction: string;
  remotePath: string;
  status: string;
}
export type { SendStatusType, SetSendStatus};