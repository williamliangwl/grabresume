import React, { Component } from 'react';

import AddResume from './resumes/AddResume';
import ShowResumes from './resumes/ShowResumes';

import { IfAuthenticated } from './middlewares/Authentication';

import ResumeRequestWrapper from '../wrappers/requests/ResumeRequestWrapper';

class Resumes extends Component {

  constructor() {
    super();
    this.state = {
      resumes : []
    };

    this.reloadResume = this.reloadResume.bind(this);
  }

  componentWillMount() {
    IfAuthenticated(this.reloadResume);
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