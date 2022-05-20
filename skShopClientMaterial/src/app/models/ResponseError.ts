
export class ResponseError {
  message!: string;
  friendlyMessage!: string;
  statusCode!: number;
  error!: string;
  url!: string | null;
  statusText!: string;
}
