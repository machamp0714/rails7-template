import React from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';

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
    </AppProviders>
  );
};

export default App;
