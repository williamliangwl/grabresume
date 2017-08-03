import React, { Component } from 'react';
import ResumeRequestWrapper from '../../wrappers/requests/ResumeRequestWrapper';

class AddResume extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobDesc: '',
      jobTitle: '',
      company: ''
    };

    this.onSuccessAdd = this.props.onSuccessAdd;
  }

  updateState(e) {
    var target = e.target;
    var name = target.name;
    var value = target.value;

    this.setState({
      [name]: value
    });
  }

  addResume() {
    var resumeData = this.state;

    ResumeRequestWrapper.addResume(resumeData, response => {
      this.onSuccessAdd();
    });
  }

  render() {
    return (
      <div className="row"> 
        <div className="col-md-3">
          <h3>Add Resume</h3>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Job Title" name="jobTitle" onChange={this.updateState.bind(this)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Company" name="company" onChange={this.updateState.bind(this)} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" placeholder="Job Description" name="jobDesc" onChange={this.updateState.bind(this)} />
          </div>
          <button className="btn btn-primary" onClick={this.addResume.bind(this)} >Add</button>
        </div>
      </div>
    )
  }
}

export default AddResume;