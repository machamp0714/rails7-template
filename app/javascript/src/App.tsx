import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { AppProviders } from './providers';
import { AppRoutes } from './routes';

const App = () => {
  return (
    <AppProviders>
      <ErrorBoundary>
        <React.Suspense fallback={''}>
          <AppRoutes />
        </React.Suspense>
      </ErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </AppProviders>
  );
};

export default App;
