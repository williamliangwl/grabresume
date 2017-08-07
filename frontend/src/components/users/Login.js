import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import UserActions from '../../actions/UserActions';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  componentWillMount() {
    this.props.dispatch(UserActions.clearUser());
  }

  updateState(e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    });
  }

  login(e) {
    e.preventDefault();
    this.props.dispatch(UserActions.login(this.state.username, this.state.password));
  }

  render() {
    var message = this.props.message?
                  <div><label className="text-danger">{this.props.message}</label></div>: 
                  '';

    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Login</h3>
          <form className="form" onSubmit={this.login.bind(this)} >
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Username" name="username" onChange={this.updateState.bind(this)} />
            </div>
            <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.updateState.bind(this)} />
            </div>
            {message}
            <button className="btn btn-primary" type="submit" >Login</button> or <Link to='/register'><button className='btn btn-default' >Register</button></Link>
          </form>
        </div>
      </div>
    )
  }
}

export default connect(
  (store) => {
    return {
      user: store.user.user,
      message: store.user.message
    }
  }
)(Login);