import React from 'react';
import { Link } from 'react-router-dom';


class FooterComponent extends React.Component {
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
      <footer>
        <div className="footer section">
          <div className="container">
            <div className="footer-con">
              <p className="copy">visiretail ®</p>
              <Link to="#" target="_blank">Mentions légales</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export { FooterComponent }; 