import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './users/Login';

class Users extends Component {
  render() {
    var content = this.props.user?
                  <Link to='/resumes'><button className='btn btn-primary' >Go to Resumes</button></Link>:
                  <Login />;

    return (
      <div>
        {content}
      </div>
    )
  }
}

export default connect((store) => {
  return { user: store.user.user }
})(Users);