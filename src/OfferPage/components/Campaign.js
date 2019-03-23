import React from "react";
import { Link } from 'react-router-dom';

export const Campaign = (props) => (
  <li>
    <Link to="/app/details" className="campaigns-box">
      <div className="img-wrap">
        <img src={props.campaign.img} alt={props.campaign.name} className="img-responsive" />
      </div>
      <div className="text-wrap">
        <i className="campaigns-ico">
          <img src={props.campaign.imgIco} alt="#" className="img-responsive img-circle" />
        </i>
        <h4>{props.campaign.name}</h4>
      </div>
    </Link>
    <div className="range">
      <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" />
      <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" />
      <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" />
      <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" />
      <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" />
    </div>
  </li>
)
