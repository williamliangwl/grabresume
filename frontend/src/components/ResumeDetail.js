import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import ResumeActions from '../actions/ResumeActions';

class ResumeDetail extends Component {

  constructor(props) {
    super(props);

    this.requestResumeDetail(this.props.match.params.resumeId);
  }

  requestResumeDetail(resumeId) {
    this.props.dispatch(ResumeActions.getResume(resumeId));
  }

  render() {
    return (
      <div className="row" >
        <div className="col-md-6">        
          <h3>Resume Details</h3>
          <Link to='/resumes'><button className='btn btn-primary' >Back to Resumes</button></Link>
          <br/>
          <br/>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <b>ID</b>
                </td>
                <td>
                  {this.props.resumeDetail.id}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Job Title</b>
                </td>
                <td>
                  {this.props.resumeDetail.jobTitle}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Company</b>
                </td>
                <td>
                  {this.props.resumeDetail.company}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Job Description</b>
                </td>
                <td>
                  {this.props.resumeDetail.jobDesc}
                </td>
              </tr>
            </tbody>
          </table>
        </div>        
      </div>
    );
  }
}

export default connect(
  (store) => {
    return {
      resumeDetail: store.resumes.resumeDetail
    };
  }
)(ResumeDetail);