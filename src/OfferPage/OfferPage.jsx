import React from 'react';
import { Link } from 'react-router-dom';
import { TabContainer, Nav, NavItem, TabContent, TabPane } from 'react-bootstrap';

import { campaignsFakeData } from '../_helpers/fake-data';
import { reseauxBannerImg, independantBannerImg } from '../_helpers/load-images';

class OfferPage extends React.Component {
  constructor() {
    super();

    this.campaignsFakeData = campaignsFakeData;

    this.toggleCampaignTab = this.toggleCampaignTab.bind(this);
    this.handleTabContSelect = this.handleTabContSelect.bind(this);

    this.state = { campaginState: 'home' };
  }

  // Start -- React lifecycle methods
  // End -- React lifecycle methods

  // Start -- Custom methods
  toggleCampaignTab(e) {
    e.stopPropagation();
    if (this.state.campaginState == 'home') {
      this.setState({ campaginState: 'menu1' });
    } else {
      this.setState({ campaginState: 'home' });
    }
  }

  handleTabContSelect(campaginState) {
    this.setState({ campaginState });
  }
  // End -- Custom methods

  // Render
  render() {
    return (
      <section>
        <div className="main-wraper section">
          <div className="campaigns-wraper section">
            <TabContainer id="campaign-tab-container" defaultActiveKey="home" activeKey={this.state.campaginState} onSelect={this.handleTabContSelect}>
              <div className="campaign-body section">
                <div className="campaign-action">
                  <div className="container">
                    <div className="campaign-tab">
                      <Nav className="nav">
                        <NavItem eventKey="home">indépendant</NavItem>
                        <NavItem eventKey="menu1">Réseaux</NavItem>
                      </Nav>
                      <label className="switch">
                        <input type="checkbox" onClick={this.toggleCampaignTab} />
                        <span className="slider" />
                      </label>
                    </div>
                    <div className="need-selector">
                      <dl id="needs" className="dropdown">
                        <dt>
                          <a href="#">
                            <i>
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21px" height="14.667px" viewBox="0.002 0.972 21 14.667" enableBackground="new 0.002 0.972 21 14.667" xmlSpace="preserve">
                                <path fill="#273138" d="M8.169,15.639h4.667v-2.445H8.169V15.639z M0.002,0.972v2.444h21V0.972H0.002z M3.502,9.527h14V7.083h-14
                                        V9.527z" />
                              </svg>
                            </i>
                            <span>De quoi avez-vous besoin ?...</span>
                          </a>
                        </dt>
                        <dd>
                          <ul>
                            <li>
                              <a href="#">
                                <label>Je développe ma notoriété et j’attire de nouveaux clients
                                <input type="radio" name="radio" />
                                  <span className="checkmark" />
                                </label>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <label>Améliorer ma visibilité et ma réputation sur internet
                                <input type="radio" name="radio" />
                                  <span className="checkmark" />
                                </label>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <label>Je développe mon business avec de nouveaux services
                                <input type="radio" name="radio" />
                                  <span className="checkmark" />
                                  <label>
                                  </label>
                                </label>
                              </a>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <button className="refres-btn">Réinitialiser</button>
                    </div>
                  </div>
                </div>
                <div className="campaign-result section">
                  <TabContent>
                    <TabPane eventKey="home">
                      <div className="need-wrap section" style={{ background: 'url(' + independantBannerImg + ')' }} />
                      <div className="campaign-main section">
                        <div className="container">
                          <div className="campaigns-head">
                            <div className="campaign-title">
                              <h2>15 campagnes disponibles</h2>
                            </div>
                            <div className="value-filter">
                              <select className="form-control">
                                <option value selected disabled>Trier...</option>
                                <option value={0}>Les plus valorisés</option>
                                <option value={1}>Les moins valorisés</option>
                              </select>
                            </div>
                          </div>
                          <div className="campaigns-list">
                            <ul>
                              {
                                this.campaignsFakeData.campaigns.map((campaign, cKey) => {
                                  return (
                                    <li key={cKey}>
                                      <Link to="details.html" className="campaigns-box">
                                        <div className="img-wrap">
                                          <img src={campaign.img} alt={campaign.name} className="img-responsive" />
                                        </div>
                                        <div className="text-wrap">
                                          <i className="campaigns-ico">
                                            <img src={campaign.imgIco} alt="#" className="img-responsive img-circle" />
                                          </i>
                                          <h4>{campaign.name}</h4>
                                          <div className="range">
                                            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" />
                                            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" />
                                            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" />
                                            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" />
                                            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" />
                                          </div>
                                        </div>
                                      </Link>
                                    </li>
                                  );
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                    <TabPane eventKey="menu1">
                      <div className="need-wrap section" style={{ background: 'url(' + reseauxBannerImg + ')' }} />
                      <div className="campaign-main section">
                        <div className="container">
                          <div className="campaigns-head">
                            <div className="campaign-title">
                              <h2>12 campagnes disponibles</h2>
                            </div>
                            <div className="value-filter">
                              <select className="form-control">
                                <option value selected disabled>Trier...</option>
                                <option value={0}>Les plus valorisés</option>
                                <option value={1}>Les moins valorisés</option>
                              </select>
                            </div>
                          </div>
                          <div className="campaigns-list">
                            <ul>
                              {
                                this.campaignsFakeData.campaigns.map((campaign, cKey) => {
                                  return (
                                    <li key={cKey}>
                                      <Link to="details.html" className="campaigns-box">
                                        <div className="img-wrap">
                                          <img src={campaign.img} alt={campaign.name} className="img-responsive" />
                                        </div>
                                        <div className="text-wrap">
                                          <i className="campaigns-ico">
                                            <img src={campaign.imgIco} alt="#" className="img-responsive img-circle" />
                                          </i>
                                          <h4>{campaign.name}</h4>
                                          <div className="range">
                                            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" />
                                            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" />
                                            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" />
                                            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" />
                                            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" />
                                          </div>
                                        </div>
                                      </Link>
                                    </li>
                                  );
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      </div>
                    </TabPane>
                  </TabContent>
                </div>
              </div>
            </TabContainer>
          </div>
        </div>
      </section>
    );
  }
}

export { OfferPage }; 