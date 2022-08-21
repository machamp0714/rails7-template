import '../app/assets/stylesheets/application.tailwind.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client = new QueryClient();

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <QueryClientProvider client={client}>
      <Story />
    </QueryClientProvider>
  ),
]