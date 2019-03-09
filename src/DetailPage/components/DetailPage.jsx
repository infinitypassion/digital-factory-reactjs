import React from 'react';
import { PanelGroup, Panel } from 'react-bootstrap';

import { campaignDetailsFakeData } from '../../_helpers/fake-data';
import { detailsImg, icUserImg, icUserExclamationImg, icUserCheckImg } from '../../_helpers/load-images';
import { Pack } from './Pack';

class DetailPage extends React.Component {
  constructor() {
    super();

    this.campaignDetailsFakeData = campaignDetailsFakeData;

    this.state = {
      activePanelKey: ''
    };
  }

  handlePanelSelect = (activePanelKey) => {
    this.setState({ activePanelKey });
  }

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
                    <PanelGroup accordion id="accordion" activeKey={this.state.activePanelKey} onSelect={this.handlePanelSelect}>
                      {
                        this.campaignDetailsFakeData.offers.map((offer, oKey) => {
                          return (
                            <Panel eventKey={offer.key} key={oKey}>
                              <Panel.Heading>
                                <Panel.Title toggle>
                                  {offer.title}
                                </Panel.Title>
                              </Panel.Heading>
                              <Panel.Body collapsible>
                                {
                                  offer.info.map((info, iKey) => {
                                    return (
                                      <p key={iKey}>
                                        {info}
                                      </p>
                                    );
                                  })
                                }
                              </Panel.Body>
                            </Panel>
                          );
                        })
                      }
                    </PanelGroup>

                    <Pack packs={this.campaignDetailsFakeData.packs}></Pack>
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