import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './app.js';
import getRouter from './router';

ReactDom.render(
  <Router>
    <App />
    {getRouter()}
  </Router>,
  document.getElementById('app'),
);
