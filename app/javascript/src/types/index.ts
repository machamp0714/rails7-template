import { AxiosError } from 'axios';

export type HTTPError = AxiosError<ServerErrorResponse> | Error;

export interface ServerErrorResponse {
  message: string;
  errors: Array<string>;
}
