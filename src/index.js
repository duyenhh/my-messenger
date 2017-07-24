import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Root from './root';
import configureStore from './configureStore';
import '@shopify/polaris/styles.css';

const store = configureStore();
ReactDOM.render(<Root store={store}/>, document.getElementById('root'));
registerServiceWorker();
