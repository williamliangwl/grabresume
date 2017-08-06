import React, { Component } from 'react';

import UserActions from '../../actions/UserActions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  updateState(e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    });
  }

  login() {
    UserActions.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Login</h3>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" name="username" onChange={this.updateState.bind(this)} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.updateState.bind(this)} />
          </div>
          <button className="btn btn-primary" onClick={this.login.bind(this)} >Login</button>
        </div>
      </div>
    )
  }
}

export default Login;