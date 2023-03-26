import "./PricingCardStyle.css";
import { Link } from "react-router-dom";

import React from "react";

export const PricingCard = () => {
  return (
    <div className="pricing">
      <h1>Pricing</h1>
      <div className="card-container">
        <div className="card">
          <h2>A</h2>
          <span className="bar"></span>
          <h3 className="btc">$ 100</h3>
          <h4>3 Days</h4>
          <h4>3 Pages</h4>
          <h4>Responsive</h4>
          <Link to="/contact" className="btn">
            BUY
          </Link>
        </div>
        <div className="card">
          <h2>B</h2>
          <span className="bar"></span>
          <h3 className="btc">$ 250</h3>
          <h4>10 Days</h4>
          <h4>10 Pages</h4>
          <h4>Responsive</h4>
          <Link to="/contact" className="btn">
            BUY
          </Link>
        </div>
        <div className="card">
          <h2>C</h2>
          <span className="bar"></span>
          <h3 className="btc">$ 500</h3>
          <h4>20 Days</h4>
          <h4>Unlimited Pages</h4>
          <h4>Responsive</h4>
          <Link to="/contact" className="btn">
            BUY
          </Link>
        </div>
      </div>
    </div>
  );
};
