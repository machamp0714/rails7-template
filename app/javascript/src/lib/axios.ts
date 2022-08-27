import Axios, { AxiosError } from 'axios';

import { ServerError } from '../types';

export const axios = Axios.create({});

axios.interceptors.response.use(
  (response) => response.data,
  (error: Error | AxiosError<ServerError>) => {
    if (Axios.isAxiosError(error) && error.response) {
      return Promise.reject(error.response.data);
    }

    throw error;
  }
);
