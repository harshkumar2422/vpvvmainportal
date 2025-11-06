import React from "react";
import "./TownshipPerspective.css";

import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const TownshipPerspective = () => {
  return (
    <>
      <Header />
      <section className="township-container">
        <div className="township-header">
          <h1>Design & Planning Data for Township and PMO at a Glance</h1>
        </div>

        <div className="township-images">
          <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762247461/pmo-img_kaktzi.jpg" alt="PMO 1" />
          <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762247462/pmoimg2_d2ge9u.jpg" alt="PMO 2" />
        </div>

        <h2 className="township-subtitle">
          Project: Cluster Of Villas & Township (Per Location)
        </h2>

        <div className="township-grid">
          <div className="township-item">Capacity of Township – 10,000 people</div>
          <div className="township-item">Plot Area for Villas – 350 acres</div>
          <div className="township-item">Total Area for Township – 500 acres</div>
          <div className="township-item">No. of Villas – 171</div>
          <div className="township-item">Built-up Area (Each Villa) – 50,000 sqft</div>
          <div className="township-item">Total Built-up (171 Villas) – 8,550,000 sqft</div>
          <div className="township-item">Other Infrastructure Buildings = 20% of Villas’ BUA</div>
          <div className="township-item">Total Built-up Area of Township – 10.26 Million sqft</div>
          <div className="township-item">Estimated Budget @ ₹2600/sqft = ₹3600 Crores</div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TownshipPerspective;
