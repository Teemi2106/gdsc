import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import image1 from "../../Assets/Hero/hero-img1.png";
import image2 from "../../Assets/Hero/hero-img2.png";
import "./Hero.css";

interface Props {}

const HeroImages = (props: Props) => {
  const { ref, isInView } = useInViewAnimation({ threshold: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50, scale: 0.8 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="mt-6 md:mt-10 flex flex-col md:flex-row px-4 md:px-10 heroImages gap-4 md:gap-5"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.img
        src={image1}
        alt="hero"
        className="w-full md:w-1/2 px-2 md:px-5 h-auto md:h-1/4 rounded-lg "
        variants={imageVariants}
        whileHover={{ scale: 1.05, rotate: 2 }}
        transition={{ duration: 0.3 }}
      />
      <motion.img
        src={image2}
        alt="hero"
        className="w-full md:w-1/2 px-2 md:px-5 h-auto md:h-1/4 rounded-lg "
        variants={imageVariants}
        whileHover={{ scale: 1.05, rotate: -2 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default HeroImages;
