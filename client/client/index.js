/*
    ./client/index.js
    which is the webpack entry file
*/
import 'bootstrap';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './components/store'
import App from './components/App.js';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render( <Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'));