import { ComponentMeta, ComponentStoryObj } from '@storybook/react';

import { Home } from '../../../app/javascript/src/pages/home';

export default {
  title: 'Pages/Home',
  component: Home,
} as ComponentMeta<typeof Home>;

type Story = ComponentStoryObj<typeof Home>;

export const Default: Story = {};
