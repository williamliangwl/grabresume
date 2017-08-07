import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import history from '../History';

import store from '../ReduxStore';

import Header from './Header';
import Users from './Users';
import Register from './users/Register';
import Resumes from './Resumes';
import ResumeDetail from './ResumeDetail';

class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router history={history} >
          <div>
            <Header />
            <Route exact path="/" component={Users}  />
            <Route path="/register" component={Register}  />
            <Route exact path="/resumes" component={Resumes} />
            <Route path="/resumes/:resumeId" component={ResumeDetail} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
