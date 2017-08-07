const initialState = {
  user: {
    id: 0,
    username: '',
    isAdmin: false
  },
  message: ''
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'USER_SET': {
      const newState = {
        ...state,
        user: action.payload
      };

      if (action.callback) {
        action.callback(newState);
      }
      
      return newState;
    }
    case 'USER_SET_FAILED': {
      return {
        ...state,
        message: action.payload
      };
    }
    case 'USER_CLEAR': {
      return {
        ...state,
        user: null,
        message: ''
      }
    }
    default: {
      return state;
    }
  }
}