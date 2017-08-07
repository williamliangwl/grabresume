import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import AddResume from './resumes/AddResume';
import ShowResumes from './resumes/ShowResumes';

import history from '../History';

import ResumeActions from '../actions/ResumeActions';

class Resumes extends Component {

  constructor(props) {
    super(props);

    this.filterResume = this.filterResume.bind(this);
    this.showResumeDetail = this.showResumeDetail.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(ResumeActions.reloadResume());
  }

  filterResume(query) {
    this.props.dispatch(ResumeActions.filterResume(query));
  }

  showResumeDetail(resume) {
    history.push('/resumes/' + resume.id);
  }

  render() {
    var content = !this.props.user?
                  (<h4>Please <Link to="/">login</Link> first</h4>):
                  (<div>
                    <AddResume />
                    <br/>
                    <ShowResumes resumes={this.props.resumes} onFilter={this.filterResume} onItemClick={this.showResumeDetail} />
                  </div>);

    return content;
  }
}

export default connect(
  (store) => {
    var filteredResumes = store.resumes.resumes.filter((resume) => {
      var query = store.resumes.filterQuery;
      var isAdmin = store.user.user? store.user.user.isAdmin: false;

      var isValidAdminSearch = isAdmin
                                && ( resume.jobDesc.indexOf(query) !== -1
                                      || resume.company.indexOf(query) !== -1
                                      || resume.jobTitle.indexOf(query) !== -1
                                );

      return !query 
        || resume.id === parseInt(query, 10)
        || isValidAdminSearch;
    });

    return {
      user: store.user.user,
      resumes: filteredResumes
    }
  }
)(Resumes);