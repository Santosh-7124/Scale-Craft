import React, { useState } from "react";
import Engineering from "../../assets/Home/Banner/Engineering.svg";
import EngineeringHover from "../../assets/Home/Banner/Engineering Hover.svg";
import Distribution from "../../assets/Home/Banner/Distribution.svg";
import DistributionHover from "../../assets/Home/Banner/Distribution Hover.svg";
import Marketing from "../../assets/Home/Banner/Marketing.svg";
import MarketingHover from "../../assets/Home/Banner/Marketing Hover.svg";

function Banner() {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      title: "Menu Engineering & Optimization",
      text: "Optimize Your menu for higher Margins & Smarter Choices",
      img: Engineering,
      hoverImg: EngineeringHover,
      alt: "Engineering",
    },
    {
      title: "Channel Distribution & Go-to-Market",
      text: "We help you get into the right channels",
      img: Distribution,
      hoverImg: DistributionHover,
      alt: "Distribution",
    },
    {
      title: "Performance Marketing for Restaurants",
      text: "Reduce CAC, improve ROI, online delivery orders",
      img: Marketing,
      hoverImg: MarketingHover,
      alt: "Marketing",
    },
  ];

  return (
    <section className="template">
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>Actionable Strategies</p>
        </div>
        <h2>What we do for Food Brands</h2>
      </header>

      <div className="home-banner">
        {cards.map((card, index) => (
          <article
            key={index}
            className={`home-banner-card ${
              activeIndex === index ? "active-home-banner-card" : ""
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            <div className="home-banner-card-img">
              <img src={card.img} alt={card.alt} />
              <img src={card.hoverImg} alt={card.alt} />
            </div>

            <div className="home-banner-card-text">
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Banner;
