import React from "react";
import DesktopImage from "../../assets/Home/Hero/Desktop Image.svg";
import Airplane from "../../assets/Home/Hero/Airplane.svg";

function Hero() {
  return (
    <section className="home-hero">
      <div className="home-hero-img">
        <img src={DesktopImage} alt="Desktop Image" />
      </div>
      <div className="home-hero-content">
        <h1>
          SCALING <span>F&B</span> Brands
        </h1>
        <div className="home-hero-content-section">
          <p>
            Data-driven, hands-on growth partnership for restaurants, cafes, and
            beverage brands.
          </p>
          <a href="#Contact" className="primary-button">
            Claim Your Audit Today
          </a>
        </div>
        <img src={Airplane} alt="Airplane Icon" />
      </div>
    </section>
  );
}

export default Hero;
