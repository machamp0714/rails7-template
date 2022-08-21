import { ComponentMeta } from '@storybook/react';
import { userEvent, screen } from '@storybook/testing-library';

import { BlogsNew } from '../../../app/javascript/src/pages/blogs/new';

export default {
  component: BlogsNew,
} as ComponentMeta<typeof BlogsNew>;

export const Empty = {};

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
