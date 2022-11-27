import React from 'react';
import { screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';

import { setup } from '../../../test/test-utils';
import { BlogsNew } from '../new';

const server = setupServer(
  rest.post('/blogs', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: 1,
        title: 'title',
        description: 'description',
        created_at: '2020-01-01',
        updated_at: '2020-01-01',
      })
    );
  })
);

describe('BlogsNew', () => {
  beforeAll(() => server.listen());

  describe('タイトルが空白の時', () => {
    it('バリデーションメッセージが表示される', async () => {
      const { user } = setup(<BlogsNew blogs={[]} />);

      user.click(screen.getByRole('button', { name: 'Post' }));

      expect(await screen.findByText('Title is required')).toBeInTheDocument();
    });
  });

  describe('タイトルを入力して、サブミットした時', () => {
    it('ブログが作成されること', async () => {
      const { user } = setup(<BlogsNew blogs={[]} />);

      await user.type(screen.getByLabelText('Title'), 'title');
      await user.type(screen.getByLabelText('Description'), 'description');
      await user.click(screen.getByRole('button', { name: 'Post' }));

      expect(await screen.findByText('Blog Created!')).toBeInTheDocument();
    });
  });

  afterAll(() => server.close());
});
