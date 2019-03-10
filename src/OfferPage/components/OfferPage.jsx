import React from 'react';
import { Link } from 'react-router-dom';
import { TabContainer, Nav, NavItem, TabContent, TabPane } from 'react-bootstrap';
import { campaignsFakeData } from '../../_helpers/fake-data';
import { reseauxBannerImg, independantBannerImg } from '../../_helpers/load-images';
import { Campaign } from "./Campaign";

export class OfferPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { campaginState: 'home' };
  }

  toggleCampaignTab = (e) => {
    e.stopPropagation();
    if (this.state.campaginState == 'home') {
      this.setState({ campaginState: 'menu1' });
    } else {
      this.setState({ campaginState: 'home' });
    }
  }

  handleTabContSelect = (campaginState) => {
    this.setState({ campaginState });
  }

  getSelectedValue = () => {
    let val = this.refs.needs.innerText;
  }

  toggleNeedsDropdown = (e) => {
    if (this.refs.needsOptions.style.display && this.refs.needsOptions.style.display == 'block') {
      this.refs.needsOptions.style = 'display: hide;'
    } else {
      this.refs.needsOptions.style = 'display: block;'
    }
    e.preventDefault();
  }

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
                      <dl id="needs" ref="needs" className="dropdown">
                        <dt>
                          <Link to="#" onClick={this.toggleNeedsDropdown}>
                            <i>
                              <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="21px" height="14.667px" viewBox="0.002 0.972 21 14.667" enableBackground="new 0.002 0.972 21 14.667" xmlSpace="preserve">
                                <path fill="#273138" d="M8.169,15.639h4.667v-2.445H8.169V15.639z M0.002,0.972v2.444h21V0.972H0.002z M3.502,9.527h14V7.083h-14
                                        V9.527z" />
                              </svg>
                            </i>
                            <span>De quoi avez-vous besoin ?...</span>
                          </Link>
                        </dt>
                        <dd>
                          <ul ref="needsOptions">
                            <li>
                              <Link to="#">
                                <label>Je développe ma notoriété et j’attire de nouveaux clients
                                <input type="radio" name="radio" />
                                  <span className="checkmark" />
                                </label>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <label>Améliorer ma visibilité et ma réputation sur internet
                                <input type="radio" name="radio" />
                                  <span className="checkmark" />
                                </label>
                              </Link>
                            </li>
                            <li>
                              <Link to="#">
                                <label>Je développe mon business avec de nouveaux services
                                <input type="radio" name="radio" />
                                  <span className="checkmark" />
                                  <label>
                                  </label>
                                </label>
                              </Link>
                            </li>
                          </ul>
                        </dd>
                      </dl>
                      <button className="refres-btn" onClick={this.getSelectedValue}>Réinitialiser</button>
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
                                <option disabled>Trier...</option>
                                <option value={0}>Les plus valorisés</option>
                                <option value={1}>Les moins valorisés</option>
                              </select>
                            </div>
                          </div>
                          <div className="campaigns-list">
                            <ul>
                              {
                                campaignsFakeData.campaigns.map(
                                  (campaign, cKey) => (
                                    <Campaign key={cKey} campaign={campaign} />
                                  )
                                )
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
                                <option disabled>Trier...</option>
                                <option value={0}>Les plus valorisés</option>
                                <option value={1}>Les moins valorisés</option>
                              </select>
                            </div>
                          </div>
                          <div className="campaigns-list">
                            <ul>
                              {
                                campaignsFakeData.campaigns.map((campaign, cKey) => (
                                  <Campaign key={cKey} campaign={campaign} />
                                )
                                )
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

