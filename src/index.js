import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

function ppp() {
  return (
    <h1>
      Oli React
    </h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

