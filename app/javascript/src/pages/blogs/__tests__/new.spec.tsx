import React, { ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BlogsNew } from '../new';

export const createQueryWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        staleTime: Infinity,
      },
    },
  });
  const queryWrapper = ({ children }: { children: ReactElement }) => {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
  return { queryClient, queryWrapper };
};

function setup(jsx: any) {
  const { queryWrapper } = createQueryWrapper();
  return {
    user: userEvent.setup(),
    ...render(jsx, { wrapper: queryWrapper }),
  };
}

test('rendering', () => {
  const { user } = setup(<BlogsNew blogs={[]} />);

  expect(screen.getByText('ブログ作成')).toBeInTheDocument();
});
