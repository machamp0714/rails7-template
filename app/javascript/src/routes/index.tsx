import React from 'react';
import { useRoutes } from 'react-router-dom';

import { Home } from '../pages/home';
import { BlogsNewContainer } from '../containers/BlogsNewContainer';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/blogs/new',
      element: <BlogsNewContainer />,
    },
  ]);

  return routes;
};
