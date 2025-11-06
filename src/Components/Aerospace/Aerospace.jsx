import React from "react";
import Header from "../Header/Header";
import "./Aerospace.css";
import Footer from "../Footer/Footer";
const Aerospace = () => {
  return (
    <>
      <Header />
      <section className="about-section aerosspace-section">
        <div className="about-content">
          <h1>AEROSPACE & DEFENSE INTEGRATION</h1>
          <hr />
          <p>
            The project has integration of advanced technology and intelligence
            with Aerospace platforms, creating systems with unprecedented
            capabilities, forcing a reevaluation of defense doctrines worldwide.
          </p>
          <br />
          <div className="health-container">
            <img
              src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246617/aerospaceimg1_f9nrqf.png"
              alt=""
            />
            <div>
              <h5 className="about-subline linecard aerospace-align-text">
                The Sky Is Just the Beginning
              </h5>
              <p>
                We stand at the edge of an aerospace renaissance – a
                transformative period where boundaries between Earth and space,
                human and machine, imagination and reality are being redefined.
              </p>
            </div>
          </div>
          <br />

          <br />
          <div className="health-container">
            <p className="futureimg-container health-container aerospace-colum">
              <div>
                <h5 className="linecard">
                  Miniaturization & Military Nano/Micro-Satellites Manufacturing
                </h5>

                <p>
                  Modern defense strategy increasingly relies on miniaturized
                  satellite technology to create resilient, distributed networks
                  for intelligence gathering and tactical operations.
                </p>
                <ul>
                  <li>
                    CubeSats and PocketQubes provide rapid deployment capability
                    for ISR missions
                  </li>
                  <li>
                    Distributed satellite constellations create redundant
                    infrastructure resilient to ASAT attacks
                  </li>
                  <li>
                    DARPA Blackjack program exemplifies tactical ISR
                    capabilities in compact packages
                  </li>
                </ul>
              </div>

              <img
                src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246626/aerospaceimg2_f9uebr.png"
                alt=""
              />
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Aerospace;
