import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Alert } from '../../app/javascript/src/components/Alert';

export default {
  title: 'Components/Alert',
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (props) => {
  return <Alert {...props} />;
};

export const Success = Template.bind({});
Success.args = { message: 'Success alert!', type: 'success' };

export const Danger = Template.bind({});
Danger.args = { message: 'Danger alert!', type: 'danger' };
