import axios from 'axios';

class RequestWrapper {
  static get apiUrl() {
    return 'http://localhost:3001/api/';
  }

  static postRequest(url, query, onsuccess_cb, onerror_cb) {
    url = this.apiUrl + url;

    axios.post(url, query)
      .then(onsuccess_cb)
      .catch(onerror_cb);
  }
}

export default RequestWrapper;