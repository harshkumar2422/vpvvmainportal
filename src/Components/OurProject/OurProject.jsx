import React from "react";
import { motion } from "framer-motion";
import "./OurProject.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const data = [
  { year: "2026", value: 3 },
  { year: "2027", value: 10 },
  { year: "2028", value: 20 },
  { year: "2029", value: 32 },
  { year: "2030", value: 50 },
  { year: "2031", value: 70 },
  { year: "2032", value: 85 },
  { year: "2033", value: 92 },
  { year: "2034", value: 97 },
  { year: "2035", value: 100 },
];

const projects = [
  {
    img: "https://res.cloudinary.com/dttqciolc/image/upload/v1762245770/advancedfuturte_toni0e.avif",
    title: "THE FUTURE IS HERE",
    link: "/futureishere",
  },
  {
    img: "https://res.cloudinary.com/dttqciolc/image/upload/v1762245951/fusionenergy_hirvr5.jpg",
    title: "POWERING CITIES WITH FUSION",
    link: "/power-cities",
  },
  {
    img: "https://res.cloudinary.com/dttqciolc/image/upload/v1762246088/constructioncardimg_om3cwj.jpg",
    title:
      "FUTURISTIC CONSTRUCTION: SUPER ADVANCED TECHNOLOGY, AUTOMATION & SMART MATERIALS",
    link: "/construction",
  },
  {
    img: "https://res.cloudinary.com/dttqciolc/image/upload/v1762245983/cardimg2_prucfr.png",
    title: "THE HEALTHCARE REVOLUTION: TECHNOLOGY MEETS MEDICINE",
    link: "/healthcares-revolution",
  },
  {
    img: "https://res.cloudinary.com/dttqciolc/image/upload/v1762246012/cardimg5_xgoiur.png",
    title: "COSMIC ENERGY CONVERSION",
    link: "/cosmic-energy",
  },
  {
    img: "https://res.cloudinary.com/dttqciolc/image/upload/v1762246036/aerospacefrontimage_e9qlfh.jpg",
    title: "AEROSPACE & DEFENSE INTEGRATION",
    link: "/aerospace",
  },
  {
    img: "https://res.cloudinary.com/dttqciolc/image/upload/v1762246059/cardimg4_npulx9.png",
    title:
      "ADVANCED AGRICULTURE TECHNIQUES: TRANSFORMING THE FUTURE OF FOOD PRODUCTION",
    link: "/agriculture",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const OurProject = () => {
  return (
    <>
      <Header />

      <section className="ourproject-wrapper">
        <motion.div
          className="ourproject-hero"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="glow-text"
          >
            Empowering India's Future Through Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
          >
            VPVV is driving transformative technology across sectors — from
            fusion energy to aerospace, healthcare, and agriculture.
          </motion.p>
        </motion.div>

        <motion.div
          className="ourproject-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="ourproject-card"
              variants={{
                hidden: { opacity: 0, scale: 0.9, y: 40 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  y: 0,
                  transition: { delay: index * 0.15, duration: 0.5 },
                },
              }}
            >
              <div className="img-container">
                <motion.img
                  src={proj.img}
                  alt={proj.title}
                  initial={{ scale: 1.1 }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="card-overlay">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {proj.title}
                </motion.h3>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <Link to={proj.link} className="view-btn">
                    View More
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="ourproject-graph-section"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="glow-text"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Project Cumulative Work Plan (Phase 1)
          </motion.h2>
          <motion.div
            className="graph-card"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <ResponsiveContainer width="100%" height={320}>
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334" />
                <XAxis dataKey="year" stroke="#ccc" />
                <YAxis stroke="#ccc" tickFormatter={(tick) => `${tick}%`} />
                <Tooltip formatter={(value) => `${value}%`} />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#00ffe0"
                  strokeWidth={3}
                  dot={{ r: 6, fill: "#00ffe0" }}
                  activeDot={{ r: 8 }}
                  isAnimationActive={true}
                  animationBegin={300} // start after 0.3s
                  animationDuration={7500} // smooth 2.5s animation
                  animationEasing="ease-in-out" // smooth easing
                >
                  <LabelList dataKey="value" position="top" />
                </Line>
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
};

export default OurProject;
