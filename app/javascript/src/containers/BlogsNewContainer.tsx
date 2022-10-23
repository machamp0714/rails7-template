import React from 'react';

import { useGetBlogs } from '../api/blogs/hooks/getBlogs';
import { BlogsNew } from '../pages/blogs/new';

export const BlogsNewContainer: React.FC = () => {
  const { data, isSuccess } = useGetBlogs();

  if (!isSuccess) {
    return null;
  }

  return <BlogsNew blogs={data} />;
};
