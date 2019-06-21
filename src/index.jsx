const greeter = require('./hello.js');
document.querySelector("#app1").innerHTML = greeter().textContent;

//CSS
import './main.css';

//BABEL
const double = [1, 2, 3].map((num) => num * 2);
console.log(double); // [2,4,6]

//React
import React from 'react';
import { render } from 'react-dom';
import App from './App'
render(<App />, document.getElementById('root'));


if (module.hot) {
    module.hot.accept()
}
