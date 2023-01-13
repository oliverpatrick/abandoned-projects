import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { getStore } from './store/AppStore';

import { Layout } from './layout/Layout';

import './App.global.scss';

const store = getStore();

const Application = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </Provider>
  );
};

export default Application;
