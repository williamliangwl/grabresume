import React, { Component } from 'react';

class FilterResumes extends Component {
  
  parseResumeObjects(resumes) {
    var resumeList = [];
    
    if(resumes) {
      resumeList = resumes.map( resume => {
        return <tr key={resume.id} >
                <td>{resume.id}</td>
                <td>{resume.jobDesc}</td>
                <td>{resume.jobTitle}</td>
                <td>{resume.company}</td>
              </tr>;
      });
    }

    return resumeList;
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <input type="text" className="form-control" placeholder="Filter" />
        </div>
      </div>
    )
  }
}

export default FilterResumes;