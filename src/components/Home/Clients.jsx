import React from "react";
import DesktopBackground from "../../assets/Home/Clients/Desktop Background.png";
import NanuPaya from "../../assets/Home/Clients/Nanu Paya.jpg";
import DiwanRaj from "../../assets/Home/Clients/Diwan Raj.jpg";
import Client1 from "../../assets/Home/Clients/Client 1.jpg";
import Prisca from "../../assets/Home/Clients/Prisca.png";

function Clients() {
  return (
    <section className="template clients">
      <img
        src={DesktopBackground}
        alt="Desktop Background"
        className="template-background"
      />
      <header className="template-heading">
        <div className="template-heading-header">
          <hr />
          <p>Our Clients</p>
        </div>
        <h2>Trusted By</h2>
      </header>
      <div className="clients-container">
        <img src={NanuPaya} alt="Nanu Paya" />
        <img src={DiwanRaj} alt="Diwan Raj" />
        <img src={Client1} alt="Client 1" />
        <img src={Prisca} alt="Prisca" />
      </div>
    </section>
  );
}

export default Clients;
