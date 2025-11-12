import React, { useEffect, useState } from "react";
import "./WhispersOfThePast.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer";

const images = [
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762490340/Officeteamimg9_axzrac.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762490340/Officeteamimg4_nhzio1.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762490339/Officeteamimg8_fx1bs9.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762490339/Officeteamimg6_wjs18m.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762490338/Officeteamimg1_tpntdm.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247579/Proposedimg3_jdqv28.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247461/pmo-img_kaktzi.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247283/datacenterimage5_b2ypjw.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247021/smartHealingimg_vle7xw.jpg",
];

const WhispersOfThePast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayImages = () => {
    const leftIndex = (currentIndex - 1 + images.length) % images.length;
    const rightIndex = (currentIndex + 1) % images.length;
    return [
      { src: images[leftIndex], position: "left", id: leftIndex },
      { src: images[currentIndex], position: "center", id: currentIndex },
      { src: images[rightIndex], position: "right", id: rightIndex },
    ];
  };

  return (
    <>
      <Header />
      <section className="whisper-section">
        <div className="whisper-container">
          <div className="whisper-flex-container">
            {getDisplayImages().map((imgObj) => (
              <div key={imgObj.id} className={`carousel-image ${imgObj.position}`}>
                <img src={imgObj.src} alt={`carousel-${imgObj.id}`} />
              </div>
            ))}
          </div>
        </div>

        <hr />

        <div className="whisper-gallery-container">
          {Array(9)
            .fill(
              "https://res.cloudinary.com/dttqciolc/image/upload/v1762247021/smartHealingimg_vle7xw.jpg"
            )
            .map((src, i) => (
              <div key={i} className="whisper-inner-gallery-container">
                <img src={src} alt={`gallery-${i}`} />
              </div>
            ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default WhispersOfThePast;
