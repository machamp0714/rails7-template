import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';
import { rest } from 'msw';

import { BlogsNew } from '../../../app/javascript/src/pages/blogs/new';

type Story = ComponentStoryObj<typeof BlogsNew>;

export default {
  component: BlogsNew,
} as ComponentMeta<typeof BlogsNew>;

export const Empty: Story = {
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

export const EmptyError: Story = {
  ...Empty,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.click(canvas.getByText('Post'));
  },
};

export const Filled: Story = {
  ...Empty,
  play: ({ canvasElement }) => {
    const canvas = within(canvasElement);

    userEvent.type(canvas.getByLabelText('Title'), 'title');
    userEvent.type(canvas.getByLabelText('Description'), 'description');
  },
};

export const FilledSuccess: Story = {
  ...Empty,
  play: ({ canvasElement }) => {
    // @ts-expect-error
    void Filled.play({ canvasElement });
    // @ts-expect-error
    void EmptyError.play({ canvasElement });
  },
};

export const FilledError: Story = {
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
  play: ({ canvasElement }) => {
    // @ts-expect-error
    void Filled.play({ canvasElement });
    // @ts-expect-error
    void EmptyError.play({ canvasElement });
  },
};
