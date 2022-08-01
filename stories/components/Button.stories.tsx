import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../app/javascript/src/components/Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Button type={args.type} variant={args.variant}>
      Login
    </Button>
  );
};

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { type: 'button', variant: 'primary', children: 'Login' };

export const SecondaryButton = Template.bind({});
SecondaryButton.args = {
  type: 'button',
  variant: 'secondary',
  children: 'Login',
};
