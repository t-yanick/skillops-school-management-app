import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import Alert from '../components/Alert';
import Dashboard from '../components/Dashboard';

const AppRouter = () => {
  const [title, updateTitle] = useState(null);
  const [errorMessage, updateErrorMessage] = useState(null);
  return (
    <BrowserRouter>
      <div className="whole-container">
        <Header title={title} />
        <div className="container d-flex align-items-center flex-column">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/register">
              <SignUp showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            <Route exact path="/login">
              <Login showError={updateErrorMessage} updateTitle={updateTitle} />
            </Route>
            {/* <Route exact path="/" component={Home} /> */}
            {/* <Route exact path="/login" component={Login} /> */}
            {/* <Route exact path="/register" component={SignUp} /> */}
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
          <Alert errorMessage={errorMessage} hideError={updateErrorMessage} />
        </div>
      </div>
    </BrowserRouter>
  )
};

export default AppRouter;