import 'react-app-polyfill/ie9'; // For IE 9-11 supports
import 'react-app-polyfill/ie11'; // For IE 11 support
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import Poststore from './stores/PostStore';

const store = Poststore.create();

ReactDOM.render(<Provider store={store}><Root/></Provider>, document.getElementById('root'));

serviceWorker.unregister();
