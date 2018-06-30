import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Product Name:</strong> {props.product_name}
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
