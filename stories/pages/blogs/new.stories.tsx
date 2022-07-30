import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BlogsNew } from '../../../app/javascript/src/pages/blogs/new';

export default {
  title: 'Pages/Blogs/New',
  component: BlogsNew,
} as ComponentMeta<typeof BlogsNew>;

export const Template: ComponentStory<typeof BlogsNew> = (_args) => {
  return <BlogsNew />;
};
