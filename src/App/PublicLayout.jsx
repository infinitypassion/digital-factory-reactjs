import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { LoginPage } from '../LoginPage';

class PublicLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="login-wrap">
        <section>
          <Switch>
            <Route path='/login' component={LoginPage} />
            <Redirect from="/" to="/login" />
          </Switch>
        </section>
      </div>
    );
  }
}

export { PublicLayout }; 