import React from "react";
import { Link } from 'react-router-dom';
import { icUserImg, icUserExclamationImg, icUserCheckImg } from '../../_helpers/load-images';

export const Pack = (props) => (
  <div className="derails-raw">
    <h4>Choisir un pack</h4>
    {
      props.packs.map((pack, pKey) => {
        return (
          <div className="pack-box" key={pKey}>
            <div className="pack-head">
              <div className="detials-title">
                <h2>{pack.title}</h2>
                <p>{pack.info}</p>
                <span className="time">{pack.duration} jours</span>
              </div>
            </div>
            <div className="attract-list">
              <ul>
                <li>
                  <h5>Reach unique</h5>
                  <div className="attract-btn">
                    <i><img src={icUserImg} className="img-responsive" alt="#" /></i>
                    {pack.singleReach} personnes
                  </div>
                </li>
                <li>
                  <h5>Nombre de contact</h5>
                  <div className="attract-btn">
                    <i><img src={icUserExclamationImg} className="img-responsive" alt="#" /></i>
                    {pack.totContacts}
                  </div>
                </li>
                <li>
                  <h5>Nombre de clics générés</h5>
                  <div className="attract-btn">
                    <i><img src={icUserCheckImg} className="img-responsive" alt="#" /></i>
                    {pack.totClicks}
                  </div>
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