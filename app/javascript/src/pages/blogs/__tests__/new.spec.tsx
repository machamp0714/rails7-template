/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */

import React from 'react';
import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../../../../../../stories/pages/blogs/new.stories';

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

describe('/pages/blogs/new', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  const { FilledSuccess } = composeStories(stories);

  describe('リクエストが成功した時', () => {
    it('アラートが表示されること', () => {
      render(<FilledSuccess />);
      // @ts-expect-error
      FilledSuccess.play();
      expect(screen.findByText('Blog Created!')).toBeInTheDocument();
    });
  });
});
