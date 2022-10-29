import React from 'react';
import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { setup } from '../../../test/test-utils';
import { BlogsNew } from '../new';

describe('BlogsNew', () => {
  describe('タイトルが空白の時', () => {
    it('バリデーションメッセージが表示される', async () => {
      const { user } = setup(<BlogsNew blogs={[]} />);

      user.click(screen.getByRole('button', { name: 'Post' }));

      expect(await screen.findByText('Title is required')).toBeInTheDocument();
    });
  });
});
