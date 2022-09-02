import { ComponentMeta } from '@storybook/react';
import { userEvent, screen } from '@storybook/testing-library';
import { rest } from 'msw';

import { BlogsNew } from '../../../app/javascript/src/pages/blogs/new';

export default {
  component: BlogsNew,
} as ComponentMeta<typeof BlogsNew>;

export const Empty = {
  parameters: {
    msw: {
      handlers: [
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
        }),
      ],
    },
  },
};

export const EmptyError = {
  ...Empty,
  play: () => userEvent.click(screen.getByText('Post')),
};

export const Filled = {
  ...Empty,
  play: () => {
    userEvent.type(screen.getByLabelText('Title'), 'title');
    userEvent.type(screen.getByLabelText('Description'), 'description');
  },
};

export const FilledSuccess = {
  ...Empty,
  play: () => {
    Filled.play();
    EmptyError.play();
  },
};

export const FilledError = {
  ...Empty,
  parameters: {
    msw: {
      handlers: [
        rest.post('/blogs', (_req, res, ctx) => {
          return res(
            ctx.status(422),
            ctx.json({
              message: 'バリデーションに失敗しました',
              errors: ['title has already been taken'],
            })
          );
        }),
      ],
    },
  },
  play: () => {
    Filled.play();
    EmptyError.play();
  },
};
