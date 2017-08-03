import React, { Component } from 'react';

class ShowResume extends Component {
  
  parseResumeObjects(resumes) {
    resumes = resumes.map( resume => {
      return <tr key={resume.id} >
              <td>{resume.id}</td>
              <td>{resume.jobDesc}</td>
              <td>{resume.jobTitle}</td>
              <td>{resume.company}</td>
            </tr>;
    });

    return resumes;
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <h3>Resume Lists</h3>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Job Desc</th>
                <th>Job Title</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              {this.parseResumeObjects(this.props.resumes)}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default ShowResume;