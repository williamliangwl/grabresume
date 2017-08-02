import axios from 'axios';

class BaseRequestWrapper {
  static get apiUrl() {
    return 'http://localhost:3001/api/';
  }

  static postRequest(url, query, onsuccess_cb, onerror_cb) {
    url = this.apiUrl + url;

    axios.post(url, query, {withCredentials: true})
      .then(onsuccess_cb)
      .catch(onerror_cb);
  }

  static getRequest(url, onsuccess_cb, onerror_cb) {
    url = this.apiUrl + url;

    axios.get(url, { withCredentials: true })
      .then(onsuccess_cb)
      .catch(onerror_cb);
  }
}

export default BaseRequestWrapper;