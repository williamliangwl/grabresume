
import history from '../../History';

export function IfAuthenticated(user, next) {
  if (user) {
    next();
  }
  else {
    history.replace('/');
  }
};