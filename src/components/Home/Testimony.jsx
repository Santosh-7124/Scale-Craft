import React, { useEffect, useState } from "react";
import Testimony1 from "../../assets/Home/Testimony/Testimony 1.png";
import Testimony2 from "../../assets/Home/Testimony/Testimony 2.png";
import Testimony3 from "../../assets/Home/Testimony/Testimony 3.png";
import Testimony4 from "../../assets/Home/Testimony/Testimony 4.jpg";

function Testimony() {
  const testimonyData = [
    {
      name: "Rohan Mehta",
      designation: "Founder, QSR Brand",
      text: "ScaleCraft helped us break a growth plateau by fixing pricing, channels, and execution. It felt like a real growth partner, not a consultant.",
      img: Testimony1,
    },
    {
      name: "Ayesha Khan",
      designation: "Co-founder, Beverage Brand",
      text: "They brought clarity to our numbers and helped us make better decisions across marketing and channels.",
      img: Testimony3,
    },
    {
      name: "Kunal Shah",
      designation: "Owner, Multi-outlet Restaurant Brand",
      text: "Honest advice, hands-on support, and clear priorities. ScaleCraft helped us scale without chaos.",
      img: Testimony2,
    },
    {
      name: "Neha Desai",
      designation: "Founder, Consumer Food Brand",
      text: "Weekly reviews and practical insights made a real difference. We finally started growing with intention.",
      img: Testimony4,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonyData.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonyData.length]);

  return (
    <section className="home-testimony">
      <header>
        <h2>{testimonyData[activeIndex].name}</h2>
        <span>{testimonyData[activeIndex].designation}</span>
      </header>

      <p>“{testimonyData[activeIndex].text}”</p>

      <div className="home-testimony-imgs">
        {testimonyData.map((item, index) => (
          <div
            key={index}
            className={`home-testimony-img ${
              activeIndex === index ? "active-home-testimony-img" : ""
            }`}
          >
            <img src={item.img} alt={item.name} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimony;
