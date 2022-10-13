import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-toastify/dist/ReactToastify.css';
import './assets/styles/main.scss';

import AppRoutes from './components/Application/AppRoutes';
import route from './routes';
import history from './utils/history';
import { store } from './store/configure';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <ToastContainer />
      <AppRoutes routes={route} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
);
