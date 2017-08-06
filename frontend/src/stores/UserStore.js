import { EventEmitter } from 'events';

import Dispatcher from '../Dispatcher';

class UserStore extends EventEmitter {

  constructor() {
    super();
    this.user = false;
  }

  setUser(user) {
    this.user = user;
    this.emit('change');
  }

  getUser() {
    return this.user;
  }

  handleActions(action) {
    switch(action.type) {
      case 'USER_RELOAD' : {
        this.setUser(action.user);
        break;
      }
      default: {}
    }
  }

}

const userStore = new UserStore();

Dispatcher.register(userStore.handleActions.bind(userStore));

export default userStore;