import React, { Component } from 'react';
import { Route, Router } from 'react-router-dom';

import history from '../History';

import Header from './Header';
import Users from './Users';
import Resumes from './Resumes';
import ResumeDetail from './ResumeDetail';

class App extends Component {
  render() {
    return (
      <Router history={history} >
        <div>
          <Header />
          <Route exact path="/" component={Users}  />
          <Route exact path="/resumes" component={Resumes} />
          <Route path="/resumes/:resumeId" component={ResumeDetail} />
        </div>
      </Router>
    );
  }
}

export default App;
