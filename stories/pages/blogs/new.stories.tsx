import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, screen, within } from '@storybook/testing-library';
import { rest } from 'msw';
import { expect } from '@storybook/jest';

import { BlogsNew } from '../../../app/javascript/src/pages/blogs/new';

const blogs = [
  {
    id: 1,
    title: 'title',
    description: 'description',
    created_at: '2021-01-01T00:00:00.000Z',
    updated_at: '2021-01-01T00:00:00.000Z',
  },
  {
    id: 2,
    title: 'title2',
    description: 'description2',
    created_at: '2021-01-01T00:00:00.000Z',
    updated_at: '2021-01-01T00:00:00.000Z',
  },
];

type Story = ComponentStoryObj<typeof BlogsNew>;

export default {
  component: BlogsNew,
} as ComponentMeta<typeof BlogsNew>;

export const Empty: Story = {
  args: { blogs: blogs },
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

export const FilledSuccess: Story = {
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
  play: async ({ canvasElement }: { canvasElement: HTMLElement }) => {
    const canvas = within(canvasElement);

    Filled.play();
    EmptyError.play();

    expect(
      await canvas.findByText('title has already been taken')
    ).toBeInTheDocument();
  },
};
