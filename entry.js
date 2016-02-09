import 'babel-polyfill'

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './configureStore'

import App from './containers/App'
import Prospect from './containers/Prospect'

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Prospect />
  </Provider>,
  document.getElementById('app')
);
