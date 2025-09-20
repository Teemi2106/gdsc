import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import leaf from "../../Assets/Extra/leaf.png";
import backgroundImage from "../../Assets/Extra/background.png";
import leafIcon from "../../Assets/Extra/leaf-icon.png";
import "./Extra.css"; // Import the CSS file

interface Props {}

const Extra = (props: Props) => {
  const { ref, isInView } = useInViewAnimation({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="extra-container px-10"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <motion.div className="hero-content" variants={itemVariants}>
          <motion.img
            src={leaf}
            alt="leaf"
            className="hero-leaf"
            variants={itemVariants}
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.6 }}
          />
          <motion.h1 className="hero-title" variants={itemVariants}>
            Wellbeing starts with welldoing
          </motion.h1>
          <motion.p className="hero-description" variants={itemVariants}>
            Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
            lacus platea arcu velit blandit facilisis enim risus. Ut tristique
            eget integer.
          </motion.p>
          <motion.button
            className="hero-button"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join now
          </motion.button>
        </motion.div>

        <motion.div className="features-card" variants={containerVariants}>
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <motion.div
                key={index}
                className="feature-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src={leafIcon}
                  alt="leaf-icon"
                  className="feature-icon"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                />
                <p className="feature-text">Plant Protective</p>
              </motion.div>
            ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Extra;
