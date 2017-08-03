import React, { Component } from 'react';
import ResumeRequestWrapper from '../wrappers/requests/ResumeRequestWrapper';

class Resumes extends Component {
  
  reloadResume() {
    ResumeRequestWrapper.getResumes(function(response){
      console.log(response);
    }); 
  }

  addResume() {
    var resume = {
      'jobDesc': 'admin',
      'company': 'Quintiq',
      'jobTitle': 'admin'
    };

    ResumeRequestWrapper.addResume(resume);
  }

  render() {
    return (
      <div className="row" >
        <div className="col-md-3">
          <h3>Resumes</h3>
          <button className="btn btn-primary" onClick={this.addResume.bind(this)} >Add</button>
          <button className="btn btn-primary" onClick={this.reloadResume.bind(this)} >Reload</button>
        </div>
      </div>
    )
  }
}

export default Resumes;