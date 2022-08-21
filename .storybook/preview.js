import '../app/assets/stylesheets/application.tailwind.css';

import { initialize, mswDecorator } from 'msw-storybook-addon';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

initialize();

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
  mswDecorator,
  (Story) => (
    <QueryClientProvider client={client}>
      <Story />
    </QueryClientProvider>
  ),
]