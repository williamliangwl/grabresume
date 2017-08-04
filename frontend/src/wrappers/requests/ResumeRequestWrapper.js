import BaseRequestWrapper from './BaseRequestWrapper';

class ResumeRequestWrapper extends BaseRequestWrapper {
  static get resumeApiUrl() {
    return 'resumes/';
  }

  static getResumes(onsuccess_cb, onerror_cb) {
    var url = this.resumeApiUrl ;
    this.getRequest(url, onsuccess_cb, onerror_cb);
  }

  static addResume(query, onsuccess_cb, onerror_cb) {
    var url = this.resumeApiUrl + 'uploadResumeDetails';
    this.postRequest(url, query, onsuccess_cb, onerror_cb);
  }
}

export default ResumeRequestWrapper;