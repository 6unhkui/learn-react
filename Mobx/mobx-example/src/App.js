import React, { Component } from 'react';
import Counter from './components/Counter';
import SuperMarket from './components/SuperMarket';
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <>
        <Counter/>
        <hr />
        <SuperMarket/>
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </>
    );
  }
}

export default App;
