import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../../app/javascript/src/components/Button';

export default {
  title: 'Components/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => {
  return <Button type={args.type} label={args.label} />
}

export const PrimaryButton = Template.bind({});
PrimaryButton.args = { type: 'submit', label: 'Login' }
