import React, { Component } from 'react';

import UserActions from '../actions/UserActions';
import UserStore from '../stores/UserStore';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  componentWillMount() {
    UserStore.on('change', () => {
      this.setState({
        user: UserStore.getUser()
      });
    });

    UserActions.pingUser();
  }

  logout() {
    UserActions.logout();
  }

  render() {
    var greetings = '';
    if (this.state.user) {
      greetings = ( 
        <div>
          <label>
            Hi, {this.state.user.username} 
            <button type="button" className="btn btn-link" onClick={this.logout.bind(this)} >Sign Out</button>
          </label>
        </div>
      );
    }

    return (
      <div>
        <h1>Grab Resume</h1>
        {greetings}
      </div>
    )
  }
}

export default Header;