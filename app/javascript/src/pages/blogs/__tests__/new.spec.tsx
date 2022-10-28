import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { setup } from '../../../test/test-utils';
import { BlogsNew } from '../new';

test('rendering', () => {
  setup(<BlogsNew blogs={[]} />);

  expect(screen.getByText('ブログ作成')).toBeInTheDocument();
});
