import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Home from './pages/home';
import { BlogsNewContainer } from './containers/BlogsNewContainer';

const App = () => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
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
