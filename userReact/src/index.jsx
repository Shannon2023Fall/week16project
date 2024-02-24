//This .jsx file is the entry point of our React application. It renders the App component into the root HTML element of our web page.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
