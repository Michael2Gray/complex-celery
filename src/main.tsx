import React from 'react';
import ReactDOM from 'react-dom';

import './app/index.css';

import { App } from './app/app';
import { bootstrap } from './bootstrap';

bootstrap().then(() =>
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  )
);
