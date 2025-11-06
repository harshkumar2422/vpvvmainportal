import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Proposed.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { FaExpandAlt } from "react-icons/fa";

import proposedimg6 from "../HomeImg/Proposedimg6.png";

const images = [
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247591/propsedimg1_y63e66.png",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247569/Proposedimg2_o6wrso.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247579/Proposedimg3_jdqv28.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247580/Proposedimg4_rmlpte.jpg",
  proposedimg6,
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247566/proposedimages7upgrade_nizipc.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247568/Proposedimageupgrade_yjhpbo.png",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247583/Proposedimg9_om3qdg.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247584/Proposedimg10_ogxqeu.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247586/Proposedimg11_l6fid3.jpg",
  "https://res.cloudinary.com/dttqciolc/image/upload/v1762247587/Proposedimg12_xpnted.jpg",
];

const Proposed = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <Header />
      <section className="proposed-section">
        <motion.div
          className="proposed-content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>Our Project Office Building</h1>
          <h5 className="proposed-subline">
            Empowering progress for a stronger India.
          </h5>
          <hr />
        </motion.div>

        <div className="proposed-container">
          {images.map((img, index) => (
            <motion.div
              className="proposed-content-container"
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="proposed-card"
                onClick={() => setSelectedImg(img)}
              >
                <motion.img
                  src={img}
                  alt={`proposed-${index}`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="overlay">
                  <FaExpandAlt className="view-icon" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImg && (
            <motion.div
              className="lightbox"
              onClick={() => setSelectedImg(null)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.span
                className="close"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                &times;
              </motion.span>
              <motion.img
                src={selectedImg}
                alt="full-view"
                className="lightbox-img"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </section>
      <Footer />
    </>
  );
};

export default Proposed;
