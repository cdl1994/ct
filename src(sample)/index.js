import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './test.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HelloWorld author="cdl"/>, document.getElementById('root'));
registerServiceWorker();
