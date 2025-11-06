import React from "react";
import "./Futureishere.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Futureishere = () => {
  return (
    <>
      <Header />
      <section className="about-section futureisher-section">
        <div className="about-content">
          <h1>THE FUTURE IS HERE</h1>
          <hr />
          <p>
            We are ‘Building the Future’ for the upcoming generations by setting
            up a whole gamut futuristic infrastructure by use of advanced
            technologies. The domains/ verticals in the horizon are:
          </p>
          <br />
                  <div className="siding futureisher-content" style={{ display: "flex" }}>
                       <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246253/futureishereimg_xxamzy.png" alt="" className="futureishereimg" />
            <p className="futureimg-container">
              <ul>
                <li>Aerospace Innovations</li>
                <li>Modern Drone Technology</li>
                <li>Future of Energy: Fusion </li>
                <li>Power Harnessing Cosmic Energy</li>
                <li>Advanced Prefabricated Construction</li>
                <li>Next-Gen Satellite Manufacturing</li>
                <li>Planet Colonization Efforts</li>
                <li>Future of Hospitals & Healthcare Infrastructure</li>
                <li>Advanced Agriculture Techniques</li>
                <li>Underwater Civilizations & Military Bases</li>
              </ul>
            </p>
           
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Futureishere;
