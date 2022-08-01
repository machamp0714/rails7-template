import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { BlogsNew } from '../../../app/javascript/src/pages/blogs/new';

export default {
  title: 'Pages/Blogs/New',
  component: BlogsNew,
} as ComponentMeta<typeof BlogsNew>;

export const Default: ComponentStory<typeof BlogsNew> = (props) => {
  return <BlogsNew {...props} />;
};
