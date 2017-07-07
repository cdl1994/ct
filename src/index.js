import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import HomePage from './homepage.js'


ReactDOM.render(<HomePage/>, document.getElementById('root'));


registerServiceWorker();
