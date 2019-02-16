import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import { HeaderComponent, FooterComponent } from '../_components';

class PrivateLayout extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* <HeaderComponent></HeaderComponent>

        <Switch>
          <Route path='/app/home' component={HomePage} />
        </Switch>

        <FooterComponent></FooterComponent> */}
      </div>
    );
  }
}

export { PrivateLayout }; 
