import history from '../History';

import UserRequestWrapper from '../wrappers/requests/UserRequestWrapper';

class UserActions {

  login(username, password) {
    return (dispatch) => {
      var query = {
        username,
        password
      };

      UserRequestWrapper.postLogin(query, response => {
        var data = response.data;
        if (data) {
          if (data.user) {
            dispatch({
              type: 'USER_SET',
              payload: data.user
            });
            
            history.push('/resumes');
          }
          else {
            dispatch({
              type: 'USER_SET_FAILED',
              payload: data.message
            });
          }
        }
      });
    }
  }

  register(user) {
    return (dispatch) => {
      UserRequestWrapper.postRegister(user, function(response){
        var data = response.data;
        if (data) {

          if (data.user) {
            dispatch({
              type: 'USER_SET',
              payload: data.user
            });

            history.push('/resumes');
          }
          else {
            dispatch({
              type: 'USER_SET_FAILED',
              payload: data.message
            });
          }
            
        }
      });
    };
  }

  logout() {
    return (dispatch) => {
      UserRequestWrapper.postLogout((response) => {
        var data = response.data;
        if (data) {
          dispatch({
            type: 'USER_SET',
            payload: data.user
          });

          history.push('/');
        }
      });
    }
  }

  pingUser(callback) {
    return (dispatch) => {
      UserRequestWrapper.postPingUserSession((response) => {
        var data = response.data;
        dispatch({
          type: 'USER_SET',
          payload: data.user,
          callback
        });
      });
    }
  }

  clearUser() {
    return (dispatch) => {
      dispatch({
        type: 'USER_CLEAR'
      });
    }
  }
  
}

export default new UserActions(); 