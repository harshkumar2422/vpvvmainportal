import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./OfficeTeam.css";

const OfficeTeam = () => {
  const images = [
    "https://res.cloudinary.com/dttqciolc/image/upload/v1762490338/Officeteamimg1_tpntdm.jpg",
    "https://res.cloudinary.com/dttqciolc/image/upload/v1762490339/Officeteamimg3_qbrb9r.jpg",
    "https://res.cloudinary.com/dttqciolc/image/upload/v1762490339/Officeteamimg2_ofsiwu.jpg",
    "https://res.cloudinary.com/dttqciolc/image/upload/v1762490339/Officeteamimg7_mnr0q4.jpg",
    "https://res.cloudinary.com/dttqciolc/image/upload/v1762490340/Officeteamimg9_axzrac.jpg",
    "https://res.cloudinary.com/dttqciolc/image/upload/v1762490339/Officeteamimg6_wjs18m.jpg",
    "https://res.cloudinary.com/dttqciolc/image/upload/v1762490339/Officeteamimg8_fx1bs9.jpg",
    "https://res.cloudinary.com/dttqciolc/image/upload/v1762490340/Officeteamimg5_grc9yf.jpg",
    "https://res.cloudinary.com/dttqciolc/image/upload/v1762490340/Officeteamimg4_nhzio1.jpg",
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
