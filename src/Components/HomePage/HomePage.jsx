import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./HomePage.css";
import Carousel from "react-bootstrap/Carousel";
import HomePagePhoto1 from "../HomeImg/contructionimage.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Template from "../Template/Template";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const HomePage = () => {
  const [showTemp, setShowTemp] = useState(true);
  const [isBottom, setIsBottom] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => setShowTemp(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.innerHeight + window.scrollY;
      const offsetHeight = document.body.offsetHeight;
      if (scrollTop >= offsetHeight - 10) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll functions
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fadeFromRight = {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const fadeFromLeft = {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  const textContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5 },
    },
  };

  const headingVariant = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const paragraphVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <div className="homepage-container">
        <Header />

        {/* ===== Carousel ===== */}
        <div
          className="carousel-wrapper"
          style={{ "--carousel-opacity": 0.75 }}
        >
          <Carousel fade interval={3000} controls={false} indicators>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="/images/carousel1.png"
                alt="slide1"
              />
              <Carousel.Caption className="carousel-caption top-left">
                <h3>Innovation for the Future</h3>
                <p>Race To Dominate The Space</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="/images/carousel2.png"
                alt="slide2"
              />
              <Carousel.Caption className="carousel-caption top-left">
                <h3>Building Together</h3>
                <p>The Sky is Just The Beginning</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carousel-img"
                src="/images/carousel3.png"
                alt="slide3"
              />
              <Carousel.Caption className="carousel-caption top-left">
                <h3>The Future Of Construction</h3>
                <p>Automation, Smart Materials And Futuristic Technology</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        {/* ===== Hero Section ===== */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Fostering Sustainable Growth For a Futuristic India</h1>
            <p className="future-text">Future is Here</p>
          </div>
        </section>

        {/* ===== Section 1 ===== */}
        <div className="fixes-section">
          <div className="content-container homepage-section-content">
            <motion.div
              className="text-content"
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                variants={headingVariant}
                style={{ fontSize: "42px", display: "block" }}
              >
                Revolutionary Construction Approach.
              </motion.span>
              <motion.p variants={paragraphVariant}>
                Large-scale 3D printers using specialized concrete or
                sustainable composites can construct entire buildings or
                prefabricated components with remarkable efficiency.
                <br />
                <br />
                <ul>
                  <li>A basic home can be printed in just 24 hours.</li>
                  <li>Material waste reduced by up to 60%.</li>
                  <li>Labour requirements cut by 80%.</li>
                  <li>Complex geometries possible without additional cost.</li>
                </ul>
              </motion.p>
            </motion.div>

            <motion.div
              className="card-content"
              variants={fadeFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="cardPhoto">
                <img
                  src="https://res.cloudinary.com/dttqciolc/image/upload/v1762246793/contructionimage_dmuchm.png"
                  alt="Construction"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===== Section 2 ===== */}
        <div className="fixes-section">
          <div className="content-container">
            <motion.div
              className="card-content"
              variants={fadeFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="cardPhoto">
                <img
                  src="https://res.cloudinary.com/dttqciolc/image/upload/v1762247016/samrtStructure_cw7cwk.jpg"
                  alt="Smart Structure"
                />
              </div>
            </motion.div>

            <motion.div
              className="text-content"
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                variants={headingVariant}
                style={{ fontSize: "42px", display: "block" }}
              >
                Prefabricated & Modular Smart Structures.
              </motion.span>
              <motion.p variants={paragraphVariant}>
                <ul>
                  <li>
                    Components manufactured in controlled environments achieve
                    higher quality standards.
                  </li>
                  <li>
                    Assembly time reduced by up to 50% and minimized disruption.
                  </li>
                  <li>
                    Pre-wired with IoT systems for smart city integration.
                  </li>
                  <li>
                    Perfect for military, healthcare, and emergency housing.
                  </li>
                </ul>
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* ===== Section 3 ===== */}
        <div className="fixes-section">
          <div className="content-container homepage-section-content">
            <motion.div
              className="text-content"
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                variants={headingVariant}
                style={{ fontSize: "42px", display: "block" }}
              >
                Smart Materials: The Self-Healing Revolution.
              </motion.span>
              <motion.p variants={paragraphVariant}>
                <span>Self-Healing Concrete</span> uses bacteria to repair
                cracks automatically, extending lifespan and reducing
                maintenance costs.
                <br />
                <br />
                <span>Phase-Change Materials</span> adapt to temperature,
                reducing energy consumption by up to 30%.
                <br />
                <br />
                <span>Graphene-Infused Materials</span> increase strength by 30%
                while lowering emissions.
              </motion.p>
            </motion.div>

            <motion.div
              className="card-content"
              variants={fadeFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="cardPhoto">
                <img
                  src="https://res.cloudinary.com/dttqciolc/image/upload/v1762247021/smartHealingimg_vle7xw.jpg"
                  alt="Smart Healing"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ===== Section 4 ===== */}
        <div className="fixes-section">
          <div className="content-container">
            <motion.div
              className="card-content"
              variants={fadeFromLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="cardPhoto">
                <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762247020/setalightimg_khuurv.webp" alt="Satellite" />
              </div>
            </motion.div>

            <motion.div
              className="text-content"
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                variants={headingVariant}
                style={{ fontSize: "42px", display: "block" }}
              >
                Miniaturization & Nano/Micro-Satellites.
              </motion.span>
              <motion.p variants={paragraphVariant}>
                Modern defense strategies use micro-satellites to build
                resilient and intelligent communication networks.
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* ===== Section 5 ===== */}
        <div className="fixes-section">
          <div className="content-container homepage-section-content">
            <motion.div
              className="text-content"
              variants={textContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.span
                variants={headingVariant}
                style={{ fontSize: "42px", display: "block" }}
              >
                Enhanced Technology Satellites.
              </motion.span>
              <motion.p variants={paragraphVariant}>
                <ul>
                  <li>AI-driven autonomous threat detection.</li>
                  <li>Coordinated satellite swarms.</li>
                  <li>Real-time recognition without human input.</li>
                </ul>
              </motion.p>
            </motion.div>

            <motion.div
              className="card-content"
              variants={fadeFromRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="cardPhoto">
                <img src="https://res.cloudinary.com/dttqciolc/image/upload/v1762247035/HomePagePhoto5_nmh7e2.png" alt="Tech Satellite" />
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
      </div>

      {/* Floating Scroll Button */}
      <button
        className="scroll-btn"
        onClick={isBottom ? scrollToTop : scrollToBottom}
        title={isBottom ? "Go to Top" : "Go to Bottom"}
      >
        {isBottom ? <FaArrowUp /> : <FaArrowDown />}
      </button>

      {/* Splash Screen */}
      <AnimatePresence>
        {showTemp && (
          <motion.div
            key="template"
            initial={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.4, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.83, 0, 0.17, 1] }}
            className="temp-wrapper"
          >
            <Template />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;
