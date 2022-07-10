import React from 'react';
import ReactDOM from 'react-dom';
import UI from './UI';

const mountNode = document.getElementById('main') as HTMLElement;

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<UI />, mountNode);
});
