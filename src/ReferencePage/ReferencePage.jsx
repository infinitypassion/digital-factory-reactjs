import React from 'react';
import { Link } from 'react-router-dom';
import { paulImg, intermarcheImg, franprixImg, selectaImg, oTacosImg, aviaImg, bpImg, coraImg, carrefourCityImg, essoImg } from '../_helpers/load-images';

class ReferencePage extends React.Component {
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
              <div className="reference-wrap section">
                <div className="inner-title">
                  <h1>Ils nous font confiance</h1>
                  <p>Semper viverra nam libero justo laoreet. Cursus mattis molestie a iaculis at. Phasellus faucibus scelerisque<br /> eleifend donec. Elit duis tristique sollicitudin nibh sit amet commodo.</p>
                </div>
                <div className="reference-list section">
                  <ul>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={paulImg} alt="paul" className="img-responsive" />
                        </div>
                        <h5>paul</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={intermarcheImg} alt="Intermarché" className="img-responsive" />
                        </div>
                        <h5>Intermarché</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={franprixImg} alt="Franprix" className="img-responsive" />
                        </div>
                        <h5>Franprix</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={selectaImg} alt="Selecta" className="img-responsive" />
                        </div>
                        <h5>Selecta</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={oTacosImg} alt="O’Tacos" className="img-responsive" />
                        </div>
                        <h5>O’Tacos</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={aviaImg} alt="Avia" className="img-responsive" />
                        </div>
                        <h5>Avia</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={bpImg} alt="bp" className="img-responsive" />
                        </div>
                        <h5>bp</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={coraImg} alt="Cora" className="img-responsive" />
                        </div>
                        <h5>Cora</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={carrefourCityImg} alt="Carrefour City" className="img-responsive" />
                        </div>
                        <h5>Carrefour City</h5>
                      </Link>
                    </li>
                    <li>
                      <Link to="#" target="_blank" className="reference-box">
                        <div className="img-wrap">
                          <img src={essoImg} alt="Esso" className="img-responsive" />
                        </div>
                        <h5>Esso</h5>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export { ReferencePage }; 