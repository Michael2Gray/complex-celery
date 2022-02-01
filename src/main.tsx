import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import './app/index.css';

import { App } from './app/app';
import { Config } from './app/config';
import { bootstrap } from './bootstrap';

axios
  .get<Config>(import.meta.env.VITE_CONFIG_URL ?? '/config.json')
  .then(({ data }) =>
    bootstrap().then(() =>
      ReactDOM.render(
        <React.StrictMode>
          <App config={data} />
        </React.StrictMode>,
        document.getElementById('root')
      )
    )
  )
  .catch((error) => {
    document.getElementById('root')!.innerHTML =
      // eslint-disable-next-line quotes
      `<p>Cannot load the application configuration</p>`;

    // eslint-disable-next-line no-console
    console.error(
      'Cannot load application configuration from ',
      import.meta.env.VITE_CONFIG_URL,
      error
    );
  });
