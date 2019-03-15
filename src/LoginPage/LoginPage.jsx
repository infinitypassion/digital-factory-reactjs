import React from 'react';
import { Link } from 'react-router-dom';

import { logoImg, loginBannerImg } from '../_helpers';

class LoginPage extends React.Component {
  constructor() {
    super();
  }

  // Render
  render() {
    return (
      <div className="section">
        <div className="row">
          <div className="col-sm-5 col-xs-12 login-main">
            <div className="login-con">
              <div className="branding">
                <img src={logoImg} className="img-responsive" alt="digital factory" />
              </div>
              <div className="form-main">
                <form action="#/app/offres">
                  <div className="form-raw">
                    <label>Username</label>
                    <input type="text" className="form-control" placeholder="ex : eva@ccep.com" required />
                  </div>
                  <div className="form-raw">
                    <label> Mot de passe</label>
                    <input type="password" className="form-control" required />
                  </div>
                  <button className="btn-main">connexion</button>
                  <Link to="#" className="fogot">Mot de passe oublié ?</Link>
                </form>
              </div>
            </div>
          </div>
          <div className="col-sm-7 col-xs-12 login-right">
            <div className="img-wrap">
              <img className="img-responsive" src={loginBannerImg} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export { LoginPage }; 