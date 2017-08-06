import Dispatcher from '../Dispatcher';

import history from '../History';

import UserRequestWrapper from '../wrappers/requests/UserRequestWrapper';

class UserActions {

  login(username, password) {
    var query = {
      username,
      password
    };

    UserRequestWrapper.postLogin(query, response => {
      var user = response.data;
      if(user) {
        Dispatcher.dispatch({
          type: 'USER_RELOAD',
          user
        });
        
        history.push('/resumes');
      }
    });
  }

  logout() {
    UserRequestWrapper.postLogout((response) => {
      var user = response.data;
      if(user) {
        Dispatcher.dispatch({
          type: 'USER_RELOAD',
          user: false
        });

        history.push('/');
      }
    });
  }

  pingUser() {
    UserRequestWrapper.postPingUserSession((response) => {
      var user = response.data;
      Dispatcher.dispatch({
        type: 'USER_RELOAD',
        user
      });
    });
  }
  
}

export default new UserActions(); 