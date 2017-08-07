import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserActions from '../actions/UserActions';

class Header extends Component {

  componentWillMount() {
    this.props.dispatch(UserActions.pingUser());
  }

  logout() {
    this.props.dispatch(UserActions.logout());
  }

  render() {
    var greetings = '';
    if (this.props.user) {
      greetings = ( 
        <div>
          <label>
            Hi, {this.props.user.username} 
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

export default connect(
  (store) => {
    return {
      user: store.user.user
    };
  }
)(Header);