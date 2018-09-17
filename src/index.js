import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LoginRegister from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<LoginRegister />, document.getElementById('root'));
registerServiceWorker();
