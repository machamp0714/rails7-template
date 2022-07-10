import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';

const mountNode = document.getElementById('main') as HTMLElement;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Home />, mountNode);
});
