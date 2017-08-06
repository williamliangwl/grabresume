import React, { Component } from 'react';

class ShowResume extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      resumes: this.props.resumes
    };
    
    this.onFilter = this.props.onFilter;
    this.onItemClick = this.props.onItemClick;
    this.applyFilter = this.applyFilter.bind(this);
  }

  applyFilter(e) {
    var query = e.target.value;
    if (this.onFilter) {
      this.onFilter(query);
    }
  }

  parseResumeObjects(resumes) {
    var resumeList = [];
    
    if (resumes) {
      resumeList = resumes.map( resume => {
        return <tr key={resume.id} >
                <td>{resume.id}</td>
                <td>{resume.jobDesc}</td>
                <td>{resume.jobTitle}</td>
                <td>{resume.company}</td>
                <td>{this.onItemClick? <button className='btn btn-primary' onClick={() => this.onItemClick(resume)} >Details</button> :'' }</td>
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
          <input type="text" className="form-control" placeholder="Filter" onChange={this.applyFilter} />
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