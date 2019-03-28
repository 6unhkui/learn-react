import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import { Provider } from 'mobx-react';
import store from './stores/PostStore';

ReactDOM.render(<App store={store}/>, document.getElementById('root'));

serviceWorker.unregister();
