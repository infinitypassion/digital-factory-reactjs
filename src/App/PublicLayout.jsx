import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { LoginPage } from '../LoginPage';

class PublicLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="LoginWraper">
        <section>
          <div className="visiretail_registration section">
            <div className="row">
              <Switch>
                <Route path='/login' component={LoginPage} />
                {/* <Route path='/register' component={RegisterPage} />
                <Route path='/thanks' component={ThanksPage} /> */}
                <Redirect from="/" to="/login" />
              </Switch>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export { PublicLayout }; 