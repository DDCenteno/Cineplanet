import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import store from './store';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
