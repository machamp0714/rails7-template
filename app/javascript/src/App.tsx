import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Home';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

document.addEventListener('DOMContentLoaded', () => {
  root.render(<Home />);
});
