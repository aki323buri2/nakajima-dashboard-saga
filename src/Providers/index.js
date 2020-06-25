import React from 'react';
import MuiProvider from './MuiProvider';
import ReduxProvider from './ReduxProvider';
import RouterProvider from './RouterProvider';

const providers = [
  MuiProvider, 
  ReduxProvider, 
  RouterProvider, 
];

const Providers = ({
  children, 
}) => {
  return providers.reduce((children, Provider) => (
    <Provider>
      {children}
    </Provider>
  ), children);
}

export default Providers
