import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Providers from './Providers';

ReactDOM.render(
  <React.Fragment>
    <Providers>
      <App />
    </Providers>
  </React.Fragment>,
  document.getElementById('root')
);

