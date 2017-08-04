
import history from '../History';

import UserRequestWrapper from '../../wrappers/requests/UserRequestWrapper';

export function IfAuthenticated(next) {
  UserRequestWrapper.postPingUseSession((response) => {
    var isalive = response.data;
    if (isalive) {
      next();
    }
    else {
      history.replace('/');
    }
  });
};