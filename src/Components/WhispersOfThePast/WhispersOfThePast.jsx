import React, { useEffect, useState } from "react";
import "./WhispersOfThePast.css";
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer";

const images = [
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623666/PKF01776_qhuspt.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623666/PKF01954_pclhff.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623666/PKF00325_ujymbi.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623668/PKF01746_qbmgxf.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623668/PKF00386_e9rhyu.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623668/PKF01975_ua6j9u.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623670/PKF01933_uocq78.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623670/PKF00670_uddl6r.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623670/PKF00441_rdwogj.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623672/PKF02753_yfwczs.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623674/PKF02736_pvrchc.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623853/WhatsApp_Image_2025-11-19_at_12.12.40_vwhlyg.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623854/WhatsApp_Image_2025-11-19_at_12.12.45_mvinfm.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623854/WhatsApp_Image_2025-11-19_at_12.10.59_nfo1xy.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623859/WhatsApp_Image_2025-11-19_at_12.10.52_1_o6cpz6.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623860/WhatsApp_Image_2025-11-19_at_12.10.21_f2koda.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623866/WhatsApp_Image_2025-11-19_at_12.10.14_k4iqim.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623866/WhatsApp_Image_2025-11-19_at_12.10.08_eh0kdw.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623880/WhatsApp_Image_2025-11-19_at_12.13.15_1_h5thwi.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623881/WhatsApp_Image_2025-11-19_at_12.13.04_twv7a8.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623885/WhatsApp_Image_2025-11-19_at_12.13.02_1_kblyfr.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623886/WhatsApp_Image_2025-11-19_at_12.12.46_qsnd7d.jpg",
];

const galleryImages = [
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623666/PKF01865_pnwggb.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623667/PKF00554_x6r2wn.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623668/PKF00339_wvvhwb.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623668/PKF00341_s2xgpn.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623669/PKF01065_j2ej0p.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623670/PKF01747_jfa4zj.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623670/PKF01895_oywzxn.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623671/PKF01734_gwjlkv.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623672/PKF00799_tqi4tj.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623854/WhatsApp_Image_2025-11-19_at_12.10.56_rx1snh.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623855/WhatsApp_Image_2025-11-19_at_12.10.54_1_hrumbh.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623858/WhatsApp_Image_2025-11-19_at_12.10.54_guq9j6.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623860/WhatsApp_Image_2025-11-19_at_12.10.52_erpuyg.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623860/WhatsApp_Image_2025-11-19_at_12.10.19_m2tccw.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623867/WhatsApp_Image_2025-11-19_at_12.10.07_gct8ic.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623867/WhatsApp_Image_2025-11-19_at_12.10.04_laeaha.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623867/WhatsApp_Image_2025-11-19_at_12.09.46_gcmler.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623867/WhatsApp_Image_2025-11-19_at_12.09.48_enfnx5.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623867/WhatsApp_Image_2025-11-19_at_12.09.39_p8iqiq.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623867/WhatsApp_Image_2025-11-19_at_12.09.40_z4gomf.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623875/WhatsApp_Image_2025-11-19_at_12.09.35_g5v7ur.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623875/WhatsApp_Image_2025-11-19_at_12.09.36_ouanpt.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623875/WhatsApp_Image_2025-11-19_at_12.09.25_skdowc.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623886/WhatsApp_Image_2025-11-19_at_12.13.02_flcxnp.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1763623886/WhatsApp_Image_2025-11-19_at_12.12.52_pm6tta.jpg",
];

const WhispersOfThePast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const getDisplayImages = () => {
    const left = (currentIndex - 1 + images.length) % images.length;
    const right = (currentIndex + 1) % images.length;
    return [
      { src: images[left], position: "left", id: left },
      { src: images[currentIndex], position: "center", id: currentIndex },
      { src: images[right], position: "right", id: right },
    ];
  };

  return (
    <>
      <Header />

      <section className="whisper-section">
        {/* Carousel */}
        <div className="whisper-container">
          <div className="whisper-flex-container">
            {getDisplayImages().map((img) => (
              <div key={img.id} className={`carousel-image ${img.position}`}>
                <img src={img.src} alt={`carousel-${img.id}`} />
              </div>
            ))}
          </div>
        </div>

        <hr />

        {/* Gallery */}
        <div className="whisper-gallery-container">
          {galleryImages.map((src, i) => (
            <div key={i} className="whisper-inner-gallery-container">
              <img src={src} alt={`gallery-${i}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default WhispersOfThePast;
