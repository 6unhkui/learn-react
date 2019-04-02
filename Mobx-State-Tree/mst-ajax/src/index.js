import 'react-app-polyfill/ie9'; // For IE 9-11 supports
import 'react-app-polyfill/ie11'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import Poststore from './stores/PostStore';

/*
import 'babel-polyfill';
//IE Promise Support
import Promise from 'promise-polyfill';
if (!window.Promise) {
  window.Promise = Promise;
}
*/

const store = Poststore.create();

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
