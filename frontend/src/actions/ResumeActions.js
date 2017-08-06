import Dispatcher from '../Dispatcher';

import ResumeRequestWrapper from '../wrappers/requests/ResumeRequestWrapper';

class ResumeActions {

  addResume(resume) {
    ResumeRequestWrapper.addResume(resume, response => {
      if (response.data) {
        this.reloadResume();
      }
    });
  }

  filterResume(query, isAdmin) {
    Dispatcher.dispatch({
      type: 'RESUME_FILTER',
      query,
      isAdmin
    });
  }

  reloadResume() {
    ResumeRequestWrapper.getResumes((response) => {
      if (response.data) {
        var resumes = response.data;
        Dispatcher.dispatch({
          type: 'RESUME_RELOAD',
          resumes
        })
      }      
    }); 
  }
}

export default new ResumeActions(); 