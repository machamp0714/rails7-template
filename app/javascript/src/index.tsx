import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const mountNode = document.getElementById('main') as HTMLElement;
const root = createRoot(mountNode);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<App />);
});
