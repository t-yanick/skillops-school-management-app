import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Dashboard from '../components/Dashboard';

const AppRouter = () => (
  <BrowserRouter>
    <div className="whole-container">
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;