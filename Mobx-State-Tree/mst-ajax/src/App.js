import React, { Component } from 'react';
import { Header } from './components';
import { PostPage } from './pages';
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <PostPage/>
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </>
    );
  }
}

export default App;
