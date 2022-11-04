import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from './lib/react-query';
import Home from './pages/home';
import { BlogsNewContainer } from './containers/BlogsNewContainer';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs/new" element={<BlogsNewContainer />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
