import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';

import { LoginForm } from '../../app/javascript/src/components/LoginForm';

export default {
  title: 'Components/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (_args) => {
  return <LoginForm />;
};

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.type(canvas.getByLabelText('email'), 'machamp0714@gmail.com');
  await userEvent.type(canvas.getByLabelText('password'), 'machamp');

  await userEvent.click(canvas.getByRole('button'));
};
