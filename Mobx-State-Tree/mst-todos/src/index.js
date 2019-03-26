import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'mobx-react';
import TodoStore from './stores/TodoStore';

ReactDOM.render(<Provider store={TodoStore}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
