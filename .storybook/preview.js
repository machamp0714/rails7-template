import '../app/assets/stylesheets/application.tailwind.css';

import { initialize, mswDecorator } from 'msw-storybook-addon';
import { BaseDecorator } from './decorators';

initialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [mswDecorator, BaseDecorator];
