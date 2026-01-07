import React from "react";
import DesktopImage from "../../assets/FoodAndBeverage/Focus/Desktop Image.png";

function Focus() {
  return (
    <section className="template">
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>Our Focus</p>
        </div>
        <h2>
          Data-Driven Cuisine & <br className="desktop" /> Market Discovery
        </h2>
      </header>
      <div className="fandb-focus">
        <p>
          We analyze consumer demand, competition, and regional food trends to
          pinpoint high-performing cuisines and untapped opportunities. Every
          brand is built on strong local relevance and long-term growth
          potential.
        </p>
        <div className="fandb-focus-img">
          <img src={DesktopImage} alt="Desktop Image" />
        </div>
      </div>
    </section>
  );
}

export default Focus;
