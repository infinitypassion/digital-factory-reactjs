import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { HeaderComponent, FooterComponent } from '../_components';
import { SupportPage } from '../SupportPage';
import { ReferencePage } from '../ReferencePage';

class PrivateLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <HeaderComponent></HeaderComponent>

        <Switch>
          <Route path='/app/support' component={SupportPage} />
          <Route path='/app/references' component={ReferencePage} />
        </Switch>

        <FooterComponent></FooterComponent>
      </div>
    );
  }
}

export { PrivateLayout }; 
