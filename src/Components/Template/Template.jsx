import React from "react";
import { motion } from "framer-motion";
import "./Template.css";

const Template = () => {
  const text = "VPVV";

  return (
    <motion.div
      className="template-main-container"
      initial={{ opacity: 0, filter: "blur(20px) brightness(0.5)", scale: 1.02 }}
      animate={{ opacity: 1, filter: "blur(0px) brightness(1)", scale: 1 }}
      transition={{
        duration: 3.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <motion.div
        className="templatelogoimg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 2.5,
          duration: 1.2,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {/* Extra smooth cinematic logo fade-in */}
        <motion.img
          src="https://res.cloudinary.com/dbibpsvgt/image/upload/v1725174396/fajru6jj7rgkmrorwovx.png"
          alt="VPVV Logo"
          initial={{
            opacity: 0,
            scale: 0.85,
            y: 30,
            filter: "blur(10px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            delay: 2.5,
            duration: 2.8,
            ease: [0.22, 1, 0.36, 1], // very soft slow-ease curve
          }}
          className="logo"
        />

        {/* Shiny text animation */}
        <motion.h2
          className="smooth-text shiny-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 5,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {text.split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 4.2 + index * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h2>
      </motion.div>
    </motion.div>
  );
};

export default Template;
