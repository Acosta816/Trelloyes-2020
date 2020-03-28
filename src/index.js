import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'
// import STORE from './store';                                                     //no longer passing in the STORE as a prop. will have it as State in App instead

// ReactDOM.render(<App store={STORE} />, document.getElementById('root'));        //no longer passing in the STORE as a prop. will have it as State in App instead

ReactDOM.render(<App />, document.getElementById('root'));