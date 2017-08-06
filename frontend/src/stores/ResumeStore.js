import { EventEmitter } from 'events';

import Dispatcher from '../Dispatcher';

class ResumeStore extends EventEmitter {

  constructor() {
    super();
    this.resumes = [];
    this.filteredResumes = [];
    this.isFiltering = false;
  }

  setResumes(resumes) {
    this.resumes = resumes;
    this.emit('change');
  }

  filterResumes(query, isAdmin) {
    this.isFiltering = query.length > 0;

    if (this.isFiltering) {
      var filteredResumes = this.resumes.filter((resume) =>{
        var isValidAdminSearch = isAdmin
                                  && ( resume.jobDesc.indexOf(query) !== -1
                                        || resume.company.indexOf(query) !== -1
                                        || resume.jobTitle.indexOf(query) !== -1
                                  );

        return !query 
          || resume.id === parseInt(query, 10)
          || isValidAdminSearch;
      });
      this.filteredResumes = filteredResumes;
    }
    
    this.emit('change');
  }

  getAllResumes() {
    return this.isFiltering?
            this.filteredResumes:
            this.resumes;
  }

  handleActions(action) {
    switch(action.type) {
      case 'RESUME_RELOAD' : {
        this.setResumes(action.resumes);
        break;
      }
      case 'RESUME_FILTER': {
        this.filterResumes(action.query, action.isAdmin);
        break;
      }
      default: {}
    }
  }

}

const resumeStore = new ResumeStore();

Dispatcher.register(resumeStore.handleActions.bind(resumeStore));

export default resumeStore;