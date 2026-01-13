import React from "react";
import TopLeft from "./Journey/TopLeft";
import TopRight from "./Journey/TopRight";

function Journey() {
  return (
    <section className="template home-journey-container">
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>The Trust</p>
        </div>
        <h2>Why F&B Chooses us</h2>
      </header>
      <div className="home-journey">
        <TopLeft />
        <TopRight />
      </div>
    </section>
  );
}

export default Journey;
