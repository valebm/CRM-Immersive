/*
    ./client/index.js
    which is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import store from './components/store'
import App from './components/App.js';


//const App = () => (
//	<h1> Hola </h1>
//)



ReactDOM.render( <Provider store={store}><App /></Provider>, document.getElementById('root'));