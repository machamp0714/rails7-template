import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export const BaseDecorator = (Story) => (
  (Story) => (
    <QueryClientProvider client={client}>
      <Story />
    </QueryClientProvider>
  )
);
