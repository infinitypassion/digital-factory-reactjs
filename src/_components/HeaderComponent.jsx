import React from 'react';
import { Link } from 'react-router-dom';
import { logoImg, userAvtarImg } from '../_helpers';

class HeaderComponent extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let path = window.location.href;
    path = path.substring(path.indexOf('#'));

    this.menuActive(path);

    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  menuClickHandle = (e) => {
    this.menuActive(e.target.hash)

    let triggerOverlayEl = document.getElementById("trigger-overlay");
    triggerOverlayEl.classList.remove("active");

    let navMainEl = document.getElementById("nav-main");
    navMainEl.classList.remove("active");
  }

  menuActive = (hashStr) => {
    let element = document.getElementById("nav-main-ul");
    if (hashStr && element && element.childNodes && element.childNodes.length) {
      for (let i = 0; i < element.childNodes.length; i++) {
        let menu = document.getElementById(element.childNodes[i].id);

        let menuLinks = menu.getElementsByTagName('a');
        for(let m = 0; m < menuLinks.length; m++) {
          if(menuLinks[m].hash == hashStr) {
            menu.className += ' active';
          } else {
            menu.classList.remove('active');
          }
        }
      }
    }
  }

  myProfile = () => {
    let profileEl = document.getElementById("profile");
    profileEl.classList.toggle("open");
  }

  myToggle = () => {
    let triggerOverlayEl = document.getElementById("trigger-overlay");
    triggerOverlayEl.classList.toggle("active");

    let navMainEl = document.getElementById("nav-main");
    navMainEl.classList.toggle("active");

    let resCampSubMenuEl = document.getElementById("res-camp-sub-menu");
    resCampSubMenuEl.style = "display: none;";
  }

  openSubMenu = (e) => {
    e.preventDefault();
    let resCampSubMenuEl = document.getElementById("res-camp-sub-menu");

    if (resCampSubMenuEl.style && resCampSubMenuEl.style.display === 'block') {
      resCampSubMenuEl.style = 'display: none;';
    } else {
      resCampSubMenuEl.style = 'display: block;';
    }
  }

  handleClickOutside = (event) => {
    if (!this.refs.profile.contains(event.target)) {
      this.refs.profile.className = 'profile';
    }
  }

  // Render
  render() {
    return (
      <header id="header" className="affix-top" data-spy="affix" data-offset-top={5}>
        <div className="header section">
          <div className="header-main">
            <div className="container">
              <div className="branding">
                <img src={logoImg} className="img-responsive" alt="digital factory" />
              </div>
            </div>
            <div className="header-right">
              <div className="res-navigation">
                <a href="javascript:void(0)" onClick={this.myToggle} className="nav-toggle" id="trigger-overlay">
                  <span className="top" />
                  <span className="middle" />
                  <span className="bottom" />
                </a>
              </div>
              <div className="nav-main" id="nav-main">
                <ul id="nav-main-ul">
                  <li id="offres-menu" onClick={this.menuClickHandle}>
                    <Link to="/app/offres">
                      <i>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="16.131px" height="13.25px" viewBox="0 0 16.131 13.25" enableBackground="new 0 0 16.131 13.25" xmlSpace="preserve">
                          <circle strokeWidth="0.25" cx="1.839" cy="6.411" r="1.714" />
                          <circle strokeWidth="0.25" cx="1.839" cy="11.411" r="1.714" />
                          <circle strokeWidth="0.25" cx="1.839" cy="1.84" r="1.714" />
                          <path strokeWidth="0.25" d="M15.845,10.124c0.043,0,0.079,0.015,0.112,0.049
                                                  c0.034,0.033,0.049,0.069,0.049,0.112l0,0v1.714c0,0.043-0.015,0.079-0.049,0.113c-0.033,0.033-0.068,0.048-0.112,0.048H4.988
                                                  c-0.043,0-0.079-0.015-0.113-0.048L4.787,12.2l0.089-0.088c-0.034-0.034-0.049-0.07-0.049-0.113v-1.714
                                                  c0-0.043,0.015-0.079,0.048-0.112l-0.088-0.089l0.088,0.089c0.034-0.034,0.069-0.049,0.113-0.049H15.845z" />
                          <path strokeWidth="0.25" d="M4.875,5.601L4.875,5.601c0.034-0.033,0.069-0.048,0.113-0.048h10.857
                                                  c0.043,0,0.079,0.015,0.112,0.049c0.034,0.033,0.049,0.069,0.049,0.112v1.714c0,0.044-0.015,0.079-0.049,0.112l0,0
                                                  c-0.033,0.035-0.068,0.049-0.112,0.049H4.988c-0.043,0-0.079-0.014-0.113-0.049l0,0C4.841,7.507,4.827,7.471,4.827,7.428V5.714
                                                  C4.827,5.671,4.841,5.636,4.875,5.601z" />
                          <path strokeWidth="0.25" d="M4.875,0.601L4.875,0.601c0.034-0.033,0.069-0.048,0.113-0.048h10.857
                                                  c0.043,0,0.079,0.015,0.112,0.049c0.034,0.033,0.049,0.069,0.049,0.112v1.714c0,0.044-0.015,0.079-0.049,0.112l0,0
                                                  c-0.033,0.035-0.068,0.049-0.112,0.049H4.988c-0.043,0-0.079-0.014-0.113-0.049l0,0C4.841,2.507,4.827,2.471,4.827,2.428V0.714
                                                  C4.827,0.671,4.841,0.636,4.875,0.601z" />
                        </svg>
                      </i>
                      Nos offres
                    </Link>
                  </li>
                  <li id="res-camp-menu" className="has-sub">
                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true" onClick={this.openSubMenu}>
                      <i>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18" enableBackground="new 0 0 18 18" xmlSpace="preserve">
                          <path fillRule="evenodd" clipRule="evenodd" stroke="none" d="M18,5.337c0,0.271-0.181,0.724-0.452,0.995
                                                    c-0.271,0.181-0.724,0.181-0.995,0.452c-1.176,0.905-2.261,2.081-3.256,3.256c-0.09,0.091,0,0.453-0.181,0.724
                                                    c-0.271,0.543-0.633,0.633-1.085,0.633c-1.085,0-1.085-0.633-1.357-1.357c-0.09-0.271-0.362-0.542-0.633-0.724
                                                    C9.588,8.955,9.316,8.502,8.955,8.502S7.417,9.859,7.146,10.04c-0.271,0.271-0.814,0.633-0.904,0.995
                                                    c-0.181,0.271-0.09,0.724-0.362,1.085c-0.181,0.181-0.724,0.452-0.904,0.452c-0.724,0-1.357-0.542-1.357-1.356
                                                    c0-0.453,0.271-0.814,0.633-1.085c0.09-0.181,0.452-0.091,0.724-0.271C5.789,9.045,6.875,8.05,7.598,7.146
                                                    c0.271-0.362,0.181-0.814,0.724-1.085c0.09-0.091,0.452-0.181,0.633-0.181c0.453,0,0.814,0.271,1.085,0.633
                                                    c0.181,0.09,0.091,0.452,0.271,0.724c0.452,0.542,1.085,1.085,1.628,1.628c1.085-0.995,2.352-2.081,3.347-3.347
                                                    c0.181-0.271,0.09-0.633,0.271-0.814c0.181-0.362,0.905-0.633,1.176-0.633C17.548,4.07,18,4.794,18,5.337z M1.719,0.724v15.558
                                                    h15.467c0.271,0,0.362,0,0.542,0.181C17.819,16.553,18,16.915,18,17.096C18,17.548,17.638,18,17.186,18H0.724
                                                    C0.542,17.819,0,17.638,0,17.276V0.724C0.09,0.362,0.362,0,0.814,0S1.719,0.271,1.719,0.724z" />
                        </svg>
                      </i>
                      Résultats de mes campagnes
                      <span className="caret" />
                    </Link>
                    <div id="res-camp-sub-menu" className="sub-nav">
                      <ul>
                        <li>
                          <Link to="/app/details_v2" onClick={this.menuClickHandle}>
                            <i>
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18" enableBackground="new 0 0 18 18" xmlSpace="preserve">
                                <path fillRule="evenodd" clipRule="evenodd" stroke="none" d="M18,5.337c0,0.271-0.181,0.724-0.452,0.995
                                                        c-0.271,0.181-0.724,0.181-0.995,0.452c-1.176,0.905-2.261,2.081-3.256,3.256c-0.09,0.091,0,0.453-0.181,0.724
                                                        c-0.271,0.543-0.633,0.633-1.085,0.633c-1.085,0-1.085-0.633-1.357-1.357c-0.09-0.271-0.362-0.542-0.633-0.724
                                                        C9.588,8.955,9.316,8.502,8.955,8.502S7.417,9.859,7.146,10.04c-0.271,0.271-0.814,0.633-0.904,0.995
                                                        c-0.181,0.271-0.09,0.724-0.362,1.085c-0.181,0.181-0.724,0.452-0.904,0.452c-0.724,0-1.357-0.542-1.357-1.356
                                                        c0-0.453,0.271-0.814,0.633-1.085c0.09-0.181,0.452-0.091,0.724-0.271C5.789,9.045,6.875,8.05,7.598,7.146
                                                        c0.271-0.362,0.181-0.814,0.724-1.085c0.09-0.091,0.452-0.181,0.633-0.181c0.453,0,0.814,0.271,1.085,0.633
                                                        c0.181,0.09,0.091,0.452,0.271,0.724c0.452,0.542,1.085,1.085,1.628,1.628c1.085-0.995,2.352-2.081,3.347-3.347
                                                        c0.181-0.271,0.09-0.633,0.271-0.814c0.181-0.362,0.905-0.633,1.176-0.633C17.548,4.07,18,4.794,18,5.337z M1.719,0.724v15.558
                                                        h15.467c0.271,0,0.362,0,0.542,0.181C17.819,16.553,18,16.915,18,17.096C18,17.548,17.638,18,17.186,18H0.724
                                                        C0.542,17.819,0,17.638,0,17.276V0.724C0.09,0.362,0.362,0,0.814,0S1.719,0.271,1.719,0.724z" />
                              </svg>
                            </i>
                            Mes points de vente
                          </Link>
                        </li>
                        <li>
                          <Link to="/app/details_v2" onClick={this.menuClickHandle}>
                            <i>
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18" enableBackground="new 0 0 18 18" xmlSpace="preserve">
                                <path fillRule="evenodd" clipRule="evenodd" stroke="none" d="M18,5.337c0,0.271-0.181,0.724-0.452,0.995
                                                        c-0.271,0.181-0.724,0.181-0.995,0.452c-1.176,0.905-2.261,2.081-3.256,3.256c-0.09,0.091,0,0.453-0.181,0.724
                                                        c-0.271,0.543-0.633,0.633-1.085,0.633c-1.085,0-1.085-0.633-1.357-1.357c-0.09-0.271-0.362-0.542-0.633-0.724
                                                        C9.588,8.955,9.316,8.502,8.955,8.502S7.417,9.859,7.146,10.04c-0.271,0.271-0.814,0.633-0.904,0.995
                                                        c-0.181,0.271-0.09,0.724-0.362,1.085c-0.181,0.181-0.724,0.452-0.904,0.452c-0.724,0-1.357-0.542-1.357-1.356
                                                        c0-0.453,0.271-0.814,0.633-1.085c0.09-0.181,0.452-0.091,0.724-0.271C5.789,9.045,6.875,8.05,7.598,7.146
                                                        c0.271-0.362,0.181-0.814,0.724-1.085c0.09-0.091,0.452-0.181,0.633-0.181c0.453,0,0.814,0.271,1.085,0.633
                                                        c0.181,0.09,0.091,0.452,0.271,0.724c0.452,0.542,1.085,1.085,1.628,1.628c1.085-0.995,2.352-2.081,3.347-3.347
                                                        c0.181-0.271,0.09-0.633,0.271-0.814c0.181-0.362,0.905-0.633,1.176-0.633C17.548,4.07,18,4.794,18,5.337z M1.719,0.724v15.558
                                                        h15.467c0.271,0,0.362,0,0.542,0.181C17.819,16.553,18,16.915,18,17.096C18,17.548,17.638,18,17.186,18H0.724
                                                        C0.542,17.819,0,17.638,0,17.276V0.724C0.09,0.362,0.362,0,0.814,0S1.719,0.271,1.719,0.724z" />
                              </svg>
                            </i>
                            Mes points de vente1
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li id="references-menu" onClick={this.menuClickHandle}>
                    <Link to="/app/references">
                      <i>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="18.392px" viewBox="0 0 20 18.392" enableBackground="new 0 0 20 18.392" xmlSpace="preserve">
                          <path fillRule="evenodd" clipRule="evenodd" stroke="none" d="M9.95,3.518c0.402,0,1.307-0.804,1.608-0.905
                                                    c0.503-0.301,1.708-0.402,1.91-0.402c2.513,0,4.322,2.01,4.322,4.221c0,0.804-0.201,2.01-1.105,2.915
                                                    c-2.211,2.211-6.432,6.633-6.633,6.633c-0.302,0-5.226-4.824-7.337-7.336C2.01,7.839,2.01,6.935,2.01,6.231
                                                    c0-2.412,1.909-4.221,4.221-4.221C8.643,2.01,8.844,3.518,9.95,3.518z M8.542,0.402c0.503,0.201,1.206,0.904,1.508,0.904
                                                    c0.201,0,0.301-0.402,0.603-0.502C11.558,0.402,12.864,0,13.668,0C17.487,0,20,2.915,20,6.231c0,1.005-0.201,2.412-0.904,3.216
                                                    c-2.513,3.115-5.729,5.929-8.543,8.744c-0.201,0.201-0.301,0.201-0.603,0.201c-0.904,0-6.13-5.527-8.342-7.939
                                                    c-0.502-0.603-1.005-1.307-1.206-1.91C0.101,7.839,0,6.533,0,6.231C0,2.713,2.713,0,6.231,0C6.533,0,7.839,0.1,8.542,0.402z" />
                        </svg>
                      </i>
                      Références
                    </Link>
                  </li>
                  <li id="support-menu" onClick={this.menuClickHandle}>
                    <Link to="/app/support">
                      <i>
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="18px" height="18px" viewBox="0 0 18 18" enableBackground="new 0 0 18 18" xmlSpace="preserve">
                          <path fillRule="evenodd" clipRule="evenodd" stroke="none" d="M10.04,13.296c0,0.724-0.633,1.085-1.085,1.085
                                              c-0.814,0-0.995-0.633-0.995-1.085c0-0.633,0.362-0.995,0.995-0.995C9.769,12.301,10.04,12.844,10.04,13.296z M12.211,6.061
                                              c0,1.809-1.538,2.352-2.352,3.708c-0.181,0.271-0.09,0.814-0.271,1.176c-0.09,0.181-0.362,0.271-0.633,0.271
                                              c-0.904,0-0.724-0.633-0.724-1.085c0-2.442,2.352-2.262,2.352-3.98c0-0.995-0.724-1.628-1.628-1.628
                                              c-0.452,0-1.447,0.271-1.538,1.176c-0.09,0.452-0.181,1.176-0.814,1.176S5.789,6.422,5.789,5.97c0-1.718,1.538-3.075,3.166-3.075
                                              C10.854,2.895,12.211,4.432,12.211,6.061z M16.281,8.955c0,4.161-3.347,7.327-7.327,7.327c-0.181,0-1.176-0.181-1.809-0.271
                                              c-2.623-0.271-5.427-3.98-5.427-6.151V8.141c0.995-4.613,3.98-6.422,7.236-6.422C13.116,1.719,16.281,5.065,16.281,8.955z M18,8.955
                                              C18,14.201,13.749,18,8.955,18C3.708,18,0,13.749,0,8.955C0,3.98,3.98,0,8.955,0C14.201,0,18,4.161,18,8.955z" />
                        </svg>
                      </i>
                      Qui sommes nous
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="profile" id="profile" ref="profile">
                <button onClick={this.myProfile}>
                  <div className="user-avtar">
                    <img src={userAvtarImg} align="digital factory" className="img-responsive" />
                  </div>
                  <div className="prfile-box">
                    <ul>
                      <li className="pers_info"><a href="#">Cécile chadeau</a></li>
                      <li className="logout"><a href="javscript:void(0)">Log Out</a></li>
                    </ul>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export { HeaderComponent }; 