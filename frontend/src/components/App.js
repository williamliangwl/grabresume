import React, { Component } from 'react';
import Header from './Header';
import Login from './users/Login';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Login />
      </div>
    );
  }
}

export default App;
