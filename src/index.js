import React from 'react';
import ReactDOM from 'react-dom';
import './Hello.css';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; //extra library ,like bootstrap// need to install by staying npm install tachyons

ReactDOM.render(<Hello greetings={"Hello, React Ninja"}/>, document.getElementById('root'));//adding the props(property greetings)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
