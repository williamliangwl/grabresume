import React, { Component } from 'react';
import Header from './Header';
import Login from './users/Login';
import Register from './users/Register';
import Resumes from './resumes/Resumes';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="row">
          <Login />
          <Register />
        </div>
        <Resumes />
      </div>
    );
  }
}

export default App;
