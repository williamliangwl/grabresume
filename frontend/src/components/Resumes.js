import React, { Component } from 'react';

import AddResume from './resumes/AddResume';
import ShowResumes from './resumes/ShowResumes';

import history from '../History';
import { IfAuthenticated } from './middlewares/Authentication';

import ResumeActions from '../actions/ResumeActions';
import UserActions from '../actions/UserActions';

import ResumeStore from '../stores/ResumeStore';
import UserStore from '../stores/UserStore';

class Resumes extends Component {

  constructor() {
    super();
    this.state = {
      resumes: []
    };

    this.updateResumes = this.updateResumes.bind(this);
    this.filterResume = this.filterResume.bind(this);
    this.showResumeDetail = this.showResumeDetail.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this);
  }

  componentWillMount() {
    UserStore.on('change', this.checkAuthentication);
    UserActions.pingUser();
  }

  componentWillUnmount() {
    ResumeStore.removeListener('change', this.updateResumes);
    UserStore.removeListener('change', this.checkAuthentication);
  }

  checkAuthentication() {
    IfAuthenticated(() => {
      ResumeStore.on('change', this.updateResumes);
      ResumeActions.reloadResume();
    });
  }

  updateResumes() {
    var resumes = ResumeStore.getAllResumes();

    this.setState({ 
      resumes
    });
  }

  filterResume(query) {
    var user = UserStore.getUser();
    var isAdmin = user? user.isAdmin: false;

    ResumeActions.filterResume(query, isAdmin);
  }

  showResumeDetail(resume) {
    history.push('/resumes/' + resume.id);
  }

  render() {
    return (
      <div>
        <AddResume />
        <ShowResumes resumes={this.state.resumes} onFilter={this.filterResume} onItemClick={this.showResumeDetail} />
      </div>
    )
  }
}

export default Resumes;