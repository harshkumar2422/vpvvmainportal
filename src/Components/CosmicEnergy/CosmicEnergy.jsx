import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./CosmicEnergy.css";

const CosmicEnergy = () => {
  return (
    <>
      <Header />
      <section className="about-section cosmic-section">
        <div className="about-content">
          <h1>COSMIC ENERGY CONVERSION</h1>
          <hr />
          <div className="cosmic-container">
            <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246569/cosmicimg_e0clh5.png" alt="" />
            <p>
              A scientific exploration of technologies aiming to harness the
              various forms of energy originating from space, their conversion
              mechanisms, storage possibilities, and practical limitations in
              terrestrial and extraterrestrial applications.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default CosmicEnergy;
