import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route } from 'react-router-dom';

import history from './History';

import Header from './Header';
import Users from './Users';
import Resumes from './Resumes';

class App extends Component {
  render() {
    return (
      <Router history={history} >
        <div>
          <Header />
          <Route exact path="/" component={Users} ></Route>
          <Route path="/resumes" component={Resumes} ></Route>
        </div>
      </Router>
    );
  }
}

export default App;
