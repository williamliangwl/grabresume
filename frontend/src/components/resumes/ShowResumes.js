import React, { Component } from 'react';

class ShowResume extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      resumes: this.props.resumes
    };
    
    this.filterResumes = this.filterResumes.bind(this);
  }

  filterResumes(e) {
    var query = e.target.value;
    var filteredResumes = this.props.resumes.filter((resume) =>{
      return resume.id === query
    });
  }

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
          <h3>Resume Lists</h3>
          <input type="text" className="form-control" placeholder="Filter" onChange={this.filterResumes} />
          <br/>
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