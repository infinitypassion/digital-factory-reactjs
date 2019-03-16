import React from "react";
import { Link } from 'react-router-dom';

export const Pack = (props) => (
  <div className="pack-main">
    {
      props.packs && props.packs.map((pack, pKey) => {
        return (
          <div className="pack-box" key={pKey}>
            <div className="pack-title">
              <h2>{pack.title}</h2>
              <span className="time">{pack.duration}j</span>
            </div>
            <div className="pack-list">
              <ul>
                <li>
                  <h5>Reach unique</h5>
                  <span>{pack.singleReach}</span>
                </li>
                <li>
                  <h5>contact</h5>
                  <span>{pack.totContacts}</span>
                </li>
                <li>
                  <h5>clics</h5>
                  <span>{pack.totClicks}</span>
                </li>
              </ul>
            </div>
            <div className="start-btn">
              <Link to="#" className="btn-main">Lancer cette campagne</Link>
            </div>
          </div>
        );
      })
    }
  </div>
)