import React from 'react';
import {Route} from 'react-router-dom';
import { Home, About,Posts } from './pages';
import Menu from './components/Menu';

const App = () => {
  return (
    <>
      <Menu/>
      <Route exact path="/" component={Home}/>
      {/*<Route exact path="/about" component={About}/>*/}
      <Route path="/about/:name?" component={About}/>
      <Route path="/posts" component={Posts}/>
    </>
  );
};

export default App;
