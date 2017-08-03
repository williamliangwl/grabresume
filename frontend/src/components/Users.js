import React, { Component } from 'react';
import Login from './users/Login';
import Register from './users/Register';

class Users extends Component {
  
  reloadResume() {
  }

  render() {
    return (
      <div className="row" >
        <Login />
        <Register />
      </div>
    )
  }
}

export default Users;