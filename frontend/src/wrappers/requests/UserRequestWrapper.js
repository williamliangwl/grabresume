import BaseRequestWrapper from './BaseRequestWrapper';

class UserRequestWrapper extends BaseRequestWrapper {
  static get userApiUrl() {
    return 'users/';
  }

  static postLogin(query, onsuccess_cb, onerror_cb) {
    var url = this.userApiUrl + 'login/';
    this.postRequest(url, query, onsuccess_cb, onerror_cb);
  }

  static postRegister(query, onsuccess_cb, onerror_cb) {
    var url = this.userApiUrl + 'register/';
    this.postRequest(url, query, onsuccess_cb, onerror_cb);
  }

  static postPingUseSession(onsuccess_cb, onerror_cb) {
    var url = this.userApiUrl + 'pingUserSession/';
    this.postRequest(url, {}, onsuccess_cb, onerror_cb);
  }
}

export default UserRequestWrapper;