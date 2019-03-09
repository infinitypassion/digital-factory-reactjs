import React from 'react';
import { Link } from 'react-router-dom';

import { referencesFakeData } from '../_helpers/fake-data';

class ReferencePage extends React.Component {
  constructor() {
    super();

    this.referencesFakeData = referencesFakeData;
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
                    {
                      this.referencesFakeData.references.map((reference, refKey) => {
                        return (
                          <li key={refKey}>
                            <Link to="#" target="_blank" className="reference-box">
                              <div className="img-wrap">
                                <img src={reference.img} alt={reference.name} className="img-responsive" />
                              </div>
                              <h5>{reference.name}</h5>
                            </Link>
                          </li>
                        );
                      })
                    }
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