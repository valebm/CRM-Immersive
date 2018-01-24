/*
    ./client/index.js
    which is the webpack entry file
*/
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.js';


//const App = () => (
//	<h1> Hola </h1>
//)



ReactDOM.render(<App />, document.getElementById('root'));