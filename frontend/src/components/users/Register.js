import React, { Component } from 'react';
import UserRequestWrapper from '../../wrappers/requests/UserRequestWrapper';

class Register extends Component {

  constructor() {
    super();
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

  register() {
    var query = this.state;
    UserRequestWrapper.postRegister(query, function(response){
      
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-3">
          <h3>Register</h3>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Username" name="username" onChange={this.updateState.bind(this)} />
          </div>
          <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" name="password" onChange={this.updateState.bind(this)} />
          </div>
          <button className="btn btn-primary" onClick={this.register.bind(this)} >Register</button>
        </div>
      </div>
    )
  }
}

export default Register;