import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/App';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
