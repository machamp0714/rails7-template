import { ReactElement } from 'react';
import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';

import { createQueryWrapper } from './query-wrapper';

export const setup = (jsx: ReactElement) => {
  const { queryWrapper } = createQueryWrapper();

  return {
    user: userEvent.setup(),
    ...render(jsx, { wrapper: queryWrapper }),
  };
};
