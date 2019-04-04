import React, { Component } from 'react';
import { Header } from './components';
import { PostPage, UserPage } from './pages';
import { Route } from 'react-router-dom';
import DevTools from 'mobx-react-devtools';

class App extends Component {
  render() {
    return (
      <>
        <Header/>
        <PostPage/>
        <Route exact path="/" Component={PostPage}/>
        <Route exact path="/user" Component={UserPage}/>
        {process.env.NODE_ENV === 'development' && <DevTools />}
      </>
    );
  }
}

export default App;
