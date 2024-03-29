import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export const BaseDecorator = (Story) => (
  <QueryClientProvider client={client}>
    <Story />
  </QueryClientProvider>
);
