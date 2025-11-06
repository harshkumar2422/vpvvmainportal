import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./OfficeTeam.css";

import Officeteamimg1 from "../HomeImg/Officeteamimg1.jpeg";
import Officeteamimg2 from "../HomeImg/Officeteamimg2.jpeg";
import Officeteamimg3 from "../HomeImg/Officeteamimg3.jpeg";
import Officeteamimg4 from "../HomeImg/Officeteamimg4.jpeg";
import Officeteamimg5 from "../HomeImg/Officeteamimg5.jpeg";
import Officeteamimg6 from "../HomeImg/Officeteamimg6.jpeg";
import Officeteamimg7 from "../HomeImg/Officeteamimg7.jpeg";
import Officeteamimg8 from "../HomeImg/Officeteamimg8.jpeg";
import Officeteamimg9 from "../HomeImg/Officeteamimg9.jpeg";

const OfficeTeam = () => {
  const images = [
    Officeteamimg1,
    Officeteamimg2,
    Officeteamimg3,
    Officeteamimg4,
    Officeteamimg5,
    Officeteamimg6,
    Officeteamimg7,
    Officeteamimg8,
    Officeteamimg9,
  ];

  return (
    <>
      <Header />
      <section className="officeTeam-section">
        <div className="officeTeam-container">
          <h1 className="officeTeam-title">Our Office Gallery</h1>
          <p className="officeTeam-subtitle">
            Explore the energy and passion behind our workspace.
          </p>
          <hr />

          <div className="officeTeam-gallery">
            {images.map((img, index) => (
              <div className="officeTeam-image-card" key={index}>
                <img src={img} alt={`Office ${index + 1}`} />
                <div className="officeTeam-overlay"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OfficeTeam;
