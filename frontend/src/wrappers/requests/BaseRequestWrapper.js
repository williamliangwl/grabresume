import axios from 'axios';

class BaseRequestWrapper {
  static get requester() {
    return axios.create({
      baseURL: 'http://localhost:3001/api/',
      withCredentials: true
    });
  }

  static postRequest(url, query, onsuccess_cb, onerror_cb) {
    this.requester.post(url, query)
      .then(onsuccess_cb)
      .catch(onerror_cb);
  }

  static getRequest(url, onsuccess_cb, onerror_cb) {
    this.requester.get(url)
      .then(onsuccess_cb)
      .catch(onerror_cb);
  }
}

export default BaseRequestWrapper;