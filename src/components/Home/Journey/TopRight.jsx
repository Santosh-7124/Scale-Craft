import React from "react";
import Logo1 from "../../../assets/Home/Journy/Top Right/Logo 1.png";
import Logo2 from "../../../assets/Home/Journy/Top Right/Logo 2.png";
import Logo3 from "../../../assets/Home/Journy/Top Right/Logo 3.png";

function TopRight() {
  return (
    <div className="home-journey-top-right">
      <div className="home-journey-top-right-container">
        <div className="home-journey-top-right-container-div">
          <div className="home-journey-top-right-container-top-tabs">
            <div className="home-journey-top-right-container-top-tab">
              <img src={Logo1} alt="B Burger" />
              <p>B Burger</p>
            </div>
            <div className="home-journey-top-right-container-top-tab">
              <img src={Logo2} alt="House of Biryan" />
              <p>House of Biryan</p>
            </div>
            <div className="home-journey-top-right-container-top-tab">
              <img src={Logo3} alt="Charcoal Eats" />
              <p>Charcoal Eats</p>
            </div>
          </div>
          <div className="home-journey-top-right-container-bottom-tabs">
            <div className="home-journey-top-right-container-bottom-tab">
              <span>50+</span>
              <p>Dark Kitchens</p>
            </div>
            <div className="home-journey-top-right-container-bottom-tab">
              <span>-30%</span>
              <p>Launch Time</p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-journey-set">
        <h3>Scaling Kitchens</h3>
        <p>
          Honed executive leadership and full-scale brand strategy. Established
          reputation in F&B marketing innovation, system-led growth, and
          purpose-driven branding.
        </p>
      </div>
    </div>
  );
}

export default TopRight;
