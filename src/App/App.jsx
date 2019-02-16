import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from '../_helpers';

import { PublicLayout } from './PublicLayout';
import { PrivateLayout } from './PrivateLayout';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <Switch>
            <Route path='/app' component={PrivateLayout} />
            <Route path='/' component={PublicLayout} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export { App }; 