import React from "react";
import { Link } from "react-router-dom";
import "./PricingCard.css";

const PricingCard = () => {
  return (
    <div className="pricing">
      <div className="card-container">
        <div className="card">
          <h3>- Basic -</h3>
          <span className="bar"></span>
          <h2 className="btc"> $100</h2>
          <p>- 3 Days -</p>
          <p>- 3 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/Contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Premium -</h3>
          <span className="bar"></span>
          <h2 className="btc"> $200</h2>

          <p>- 2 Days -</p>
          <p>- 5 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/Contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>

        <div className="card">
          <h3>- Bussiness -</h3>
          <span className="bar"></span>
          <h2 className="btc"> $300</h2>
          <p>- 5 Days -</p>
          <p>- 8 pages -</p>
          <p>- Featured -</p>
          <p>- Responsive Design -</p>
          <Link to="/Contact" className="btn">
            PURCHASE NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
