import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const AppRouter = () => (
  <BrowserRouter>
    <div className="whole-container">
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </div>
  </BrowserRouter>
);

export default AppRouter;