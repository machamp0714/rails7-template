import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/home';
import { BlogsNew } from '../pages/blogs/new';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/blogs/new',
      element: <BlogsNew />,
    },
  ]);

  return routes;
};
