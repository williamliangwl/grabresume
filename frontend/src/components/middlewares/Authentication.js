
import history from '../../History';

import UserStore from '../../stores/UserStore';

export function IfAuthenticated(next) {
  var user = UserStore.getUser();
  if (user) {
    next();
  }
  else {
    history.replace('/');
  }
};