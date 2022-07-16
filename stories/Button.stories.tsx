import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
        { name: 'blue', value: '#00f' },
      ]
    }
  }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = { label: 'Button', primary: true };

export const Secondary = Template.bind({});
Secondary.args = { ...Primary.args, primary: false }
