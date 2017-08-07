import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import resumeReducer from './ResumeReducer';
import userReducer from './UserReducer';

export default combineReducers({
  resumes: resumeReducer,
  user: userReducer,
  router: routerReducer
});