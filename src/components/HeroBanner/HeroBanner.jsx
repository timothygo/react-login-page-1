import React from "react";
import "./HeroBanner.scss";

import heroBanner from "../../assets/images/hero2.jpg";

const HeroBanner = () => {
  return (
    <div className="hero-banner">
      <img src={heroBanner} alt="hero banner" />
    </div>
  );
};

export default HeroBanner;
