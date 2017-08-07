import React, { Component } from 'react';
import { connect } from 'react-redux'; 

import ResumeActions from '../../actions/ResumeActions';

class AddResume extends Component {

  constructor() {
    super();
    this.state = {
      jobDesc: '',
      jobTitle: '',
      company: ''
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

  addResume(e) {
    e.preventDefault();
    var resumeData = this.state;
    this.props.dispatch(ResumeActions.addResume(resumeData));
  }

  render() {

    var formGroupStyle = {
      marginRight: '10px'
    };

    return (
      <div className="row"> 
        <div className="col-md-12">
          <h3>Add Resume</h3>
          <form className="form-inline" onSubmit={this.addResume.bind(this)}>
            <div className="form-group" style={formGroupStyle} >
              <input type="text" className="form-control" placeholder="Job Title" name="jobTitle" onChange={this.updateState.bind(this)} />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input type="text" className="form-control" placeholder="Company" name="company" onChange={this.updateState.bind(this)} />
            </div>
            <div className="form-group" style={formGroupStyle}>
              <input type="text" className="form-control" placeholder="Job Description" name="jobDesc" onChange={this.updateState.bind(this)} />
            </div>
            <button className="btn btn-primary" type="submit" >Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default connect()(AddResume);