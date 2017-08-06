import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ResumeRequestWrapper from '../wrappers/requests/ResumeRequestWrapper';

class ResumeDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: -1,
      jobTitle: '',
      jobDesc: '',
      company: ''
    };

    this.requestResumeDetail(this.props.match.params.resumeId);
  }

  requestResumeDetail(resumeId) {
    ResumeRequestWrapper.getResume(resumeId, (response) => {
      if (response.data) {
        var resume = response.data;
        this.setState({
          id: resume.id,
          jobTitle: resume.jobTitle,
          jobDesc: resume.jobDesc,
          company: resume.company
        });
      }
    });
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
                  {this.state.id}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Job Title</b>
                </td>
                <td>
                  {this.state.jobTitle}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Company</b>
                </td>
                <td>
                  {this.state.company}
                </td>
              </tr>
              <tr>
                <td>
                  <b>Job Description</b>
                </td>
                <td>
                  {this.state.jobDesc}
                </td>
              </tr>
            </tbody>
          </table>
        </div>        
      </div>
    );
  }
}

export default ResumeDetail;