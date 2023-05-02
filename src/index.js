import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Clock from './App';
import Timer from './components/first'
import Counter from './components/second';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Clock />
    <Timer />
    <Counter />
  </React.StrictMode>
);
