import { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/testing-library';

import { BlogsNew } from '../../../app/javascript/src/pages/blogs/new';
import { handlers } from '../../../app/javascript/src/test/handlers/blogs';

type Story = ComponentStoryObj<typeof BlogsNew>;

const { index, create } = handlers;

export default {
  component: BlogsNew,
} as ComponentMeta<typeof BlogsNew>;

export const Empty: Story = {
  parameters: {
    msw: { handlers: [index, create] },
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
  play: ({ canvasElement }) => {
    // @ts-expect-error
    void Filled.play({ canvasElement });
    // @ts-expect-error
    void EmptyError.play({ canvasElement });
  },
};
