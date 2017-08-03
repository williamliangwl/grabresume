import React, { Component } from 'react';

import AddResume from './resumes/AddResume';
import ShowResumes from './resumes/ShowResumes';

import ResumeRequestWrapper from '../wrappers/requests/ResumeRequestWrapper';

class Resumes extends Component {

  constructor() {
    super();
    this.state = {
      resumes : []
    };

    this.reloadResume = this.reloadResume.bind(this);
    this.reloadResume();
  }

  reloadResume() {
    ResumeRequestWrapper.getResumes((response) => {
      this.setState({ resumes: response.data });
    }); 
  }

  render() {
    return (
      <div>
        <AddResume onSuccessAdd={this.reloadResume} />
        <ShowResumes resumes={this.state.resumes} />
      </div>
    )
  }
}

export default Resumes;