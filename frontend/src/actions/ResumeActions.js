import ResumeRequestWrapper from '../wrappers/requests/ResumeRequestWrapper';

class ResumeActions {

  addResume(resume) {
    return (dispatch) => {
      ResumeRequestWrapper.addResume(resume, response => {
        var data = response.data;
        if (data && data.resumeId) {
          dispatch(this.reloadResume());
        }
        else {
          dispatch({
            type: 'RESUME_FAILED_ADD',
            payload: data.message
          })
        }
      });
    }
  }

  getResume(resumeId) {
    return (dispatch) => {
      ResumeRequestWrapper.getResume(resumeId, (response) => {
        if (response.data) {
          var resume = response.data;
          dispatch({
            type: 'RESUME_DETAIL_SET',
            payload: resume
          });
        }
      });
    }
  }

  filterResume(query) {
    return (dispatch) => {
      dispatch({
        type: 'RESUME_FILTER',
        payload: query
      });
    }
  }

  reloadResume() {
    return (dispatch) => {
      ResumeRequestWrapper.getResumes((response) => {
        if (response.data) {
          var resumes = response.data;
          if (resumes) {
            dispatch({
              type: 'RESUME_RELOAD',
              payload: resumes
            })
          }
        }      
      }); 
    }
  }
}

export default new ResumeActions(); 