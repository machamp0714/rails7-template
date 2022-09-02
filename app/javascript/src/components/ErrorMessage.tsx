import React from 'react';

import { HTTPError } from '../types';
import { AxiosError } from 'axios';

interface ErrorMessageProps {
  error: HTTPError;
}

export const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!(error instanceof AxiosError)) {
    throw error;
  }

  if (!error.response) {
    throw error;
  }

  return (
    <ul>
      {error.response.data.errors.map((message: string) => {
        return <li key={message}>{message}</li>;
      })}
    </ul>
  );
};
