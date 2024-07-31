import React from "react";
import "./Hero.css";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow_icon.png";
import hero_image from "../Assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>New Arrivals Only</h2>
        <div>
          <div className="hero-hand-icon">
            <p>new</p>
            <img src={hand_icon} alt="hand_icon" />
          </div>
          <p>collections</p>
          <p>for everyone</p>
          <div className="hero-latest-btn">
            <div>Latest Collections</div>
            <img src={arrow_icon} alt="arrow_icon" />
          </div>
        </div>
      </div>
      <div className="hero-right"></div>
      <img src={hero_image} alt="hero_image" />
    </div>
  );
};

export default Hero;
