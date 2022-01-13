import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { Provider } from "react-redux";
import store from "./store/index";

import axios from "axios";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


