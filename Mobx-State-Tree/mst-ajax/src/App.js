import React, { Component } from 'react';
import { observer } from "mobx-react";

@observer
class App extends Component {
  componentWillMount() {
    this.props.store.getData();
  }

  render() {
    return (
      <>
        <p>test</p>
      </>
    );
  }
}

export default App;
