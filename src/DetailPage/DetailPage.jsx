import React from 'react';
import { Link } from 'react-router-dom';
import { TabContainer, Nav, NavItem, TabContent, TabPane } from 'react-bootstrap';

import { campaignsFakeData } from '../_helpers/fake-data';
import { reseauxBannerImg, independantBannerImg, detailsImg, icUserImg, icUserExclamationImg, icUserCheckImg } from '../_helpers/load-images';

class DetailPage extends React.Component {
  constructor() {
    super();
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <div className="main-wraper section">
          <div className="main-raw section">
            <div className="container">
              <div className="row details-wrap section">
                <div className="col-sm-3 col-xs-12 details-left">
                  <div className="img-wrap">
                    <img src={detailsImg} alt="Campagne Facebook" className="img-responsive" />
                  </div>
                  <div className="details-rating">
                    <ul>
                      <li>
                        <h5>Visibilité</h5>
                        <div className="range start">
                          <input type="radio" id="visibilite5" name="visibilite" defaultValue={5} /><label htmlFor="visibilite5" />
                          <input type="radio" id="visibilite4" name="visibilite" defaultValue={4} /><label htmlFor="visibilite4" />
                          <input type="radio" id="visibilite3" name="visibilite" defaultValue={3} /><label htmlFor="visibilite3" />
                          <input type="radio" id="visibilite2" name="visibilite" defaultValue={2} /><label htmlFor="visibilite2" />
                          <input type="radio" id="visibilite1" name="visibilite" defaultValue={1} /><label htmlFor="visibilite1" />
                        </div>
                      </li>
                      <li>
                        <h5>Valorisation</h5>
                        <div className="range">
                          <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" />
                          <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" />
                          <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" />
                          <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" />
                          <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" />
                        </div>
                      </li>
                      <li>
                        <h5>Complexité</h5>
                        <div className="range start">
                          <input type="radio" id="complexite5" name="complexite" defaultValue={5} /><label htmlFor="complexite5" />
                          <input type="radio" id="complexite4" name="complexite" defaultValue={4} /><label htmlFor="complexite4" />
                          <input type="radio" id="complexite3" name="complexite" defaultValue={3} /><label htmlFor="complexite3" />
                          <input type="radio" id="complexite2" name="complexite" defaultValue={2} /><label htmlFor="complexite2" />
                          <input type="radio" id="complexite1" name="complexite" defaultValue={1} /><label htmlFor="complexite1" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-sm-9 col-xs-12 details-right">
                  <div className="detials-head">
                    <div className="detials-title">
                      <h1>Campagne Facebook Local</h1>
                      <p>J’attire des nouveaux clients grâce à la publicité locale sur Facebook.</p>
                      <span className="time">15 jours ou 30 jours</span>
                    </div>
                    <div className="attract-list">
                      <ul>
                        <li>
                          <h5>Reach unique</h5>
                          <div className="attract-btn">
                            <i><img src={icUserImg} className="img-responsive" alt="#" /></i>
                            10 000 personnes
                          </div>
                        </li>
                        <li>
                          <h5>Nombre de contact</h5>
                          <div className="attract-btn">
                            <i><img src={icUserExclamationImg} className="img-responsive" alt="#" /></i>
                            5 000
                          </div>
                        </li>
                        <li>
                          <h5>Nombre de clics générés</h5>
                          <div className="attract-btn">
                            <i><img src={icUserCheckImg} className="img-responsive" alt="#" /></i>
                            1000
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="derails-raw">
                    <h4>Détails de l’offre</h4>
                    <div className="panel-group" id="accordion">
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <a data-toggle="collapse" className="collapsed" data-parent="#accordion" href="#collapse1" aria-expanded="false">Pourquoi cette offre ?</a>
                          </div>
                        </div>
                        <div id="collapse1" className="panel-collapse collapse" aria-expanded="false">
                          <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="false">Descriptif de la campagne
                            </a>
                          </div>
                        </div>
                        <div id="collapse2" className="panel-collapse collapse" aria-expanded="false">
                          <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="false" className="collapsed">Pré-requis</a>
                          </div>
                        </div>
                        <div id="collapse3" className="panel-collapse collapse" aria-expanded="false">
                          <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="panel panel-default">
                        <div className="panel-heading">
                          <div className="panel-title">
                            <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="false">Aperçu de ma campagne
                            </a>
                          </div>
                        </div>
                        <div id="collapse4" className="panel-collapse collapse" aria-expanded="false">
                          <div className="panel-body">
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                              proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="derails-raw">
                      <h4>Choisir un pack</h4>
                      <div className="pack-box">
                        <div className="pack-head">
                          <div className="detials-title">
                            <h2>Starter</h2>
                            <p>J’attire des nouveaux clients grâce à la publicité locale sur Facebook.</p>
                            <span className="time">15 jours</span>
                          </div>
                        </div>
                        <div className="attract-list">
                          <ul>
                            <li>
                              <h5>Reach unique</h5>
                              <div className="attract-btn">
                                <i><img src={icUserImg} className="img-responsive" alt="#" /></i>
                                10 000 personnes
                              </div>
                            </li>
                            <li>
                              <h5>Nombre de contact</h5>
                              <div className="attract-btn">
                                <i><img src={icUserExclamationImg} className="img-responsive" alt="#" /></i>
                                5 000
                              </div>
                            </li>
                            <li>
                              <h5>Nombre de clics générés</h5>
                              <div className="attract-btn">
                                <i><img src={icUserCheckImg} className="img-responsive" alt="#" /></i>
                                1000
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="start-btn">
                          <Link to="#" className="btn-main">Lancer cette campagne</Link>
                        </div>
                      </div>
                      <div className="pack-box">
                        <div className="pack-head">
                          <div className="detials-title">
                            <h2>Booster</h2>
                            <p>J’attire des nouveaux clients grâce à la publicité locale sur Facebook.</p>
                            <span className="time">15 jours</span>
                          </div>
                        </div>
                        <div className="attract-list">
                          <ul>
                            <li>
                              <h5>Reach unique</h5>
                              <div className="attract-btn">
                                <i><img src={icUserImg} className="img-responsive" alt="#" /></i>
                                10 000 personnes
                              </div>
                            </li>
                            <li>
                              <h5>Nombre de contact</h5>
                              <div className="attract-btn">
                                <i><img src={icUserExclamationImg} className="img-responsive" alt="#" /></i>
                                5 000
                              </div>
                            </li>
                            <li>
                              <h5>Nombre de clics générés</h5>
                              <div className="attract-btn">
                                <i><img src={icUserCheckImg} className="img-responsive" alt="#" /></i>
                                1000
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div className="start-btn">
                          <Link to="#" className="btn-main">Lancer cette campagne</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { DetailPage }; 