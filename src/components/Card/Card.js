import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.brand} src={props.photo} />
    </div>
    <div className="content">
      <ul>

        <li>
          <strong>Color:</strong> {props.color}
        </li>
        <li>
          <strong>Brand:</strong> {props.brand}
        </li>
     
      </ul>
    </div>
    <span className="remove">𝘅</span>
  </div>
);

export default Card;
