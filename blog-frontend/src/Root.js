import React from 'react';
import {HashRouter} from 'react-router-dom';
import {Provider} from 'mobx-react';
import App from './App';

const Root = () => {
    return (
        <Provider>
          <HashRouter>
            <App/>
          </HashRouter>
        </Provider>
    )
}

export default Root;