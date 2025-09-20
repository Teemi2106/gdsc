import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import Navbar from "./Navbar";
import logo from "../../Assets/Header/logo.png";

const Header = () => {
  const { ref, isInView } = useInViewAnimation({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.header
      ref={ref}
      className="w-full flex justify-between p-3 md:p-4 px-4 md:px-10 align-middle"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.img
        src={logo}
        alt="Company Logo"
        className="h-6 sm:h-7 md:h-8"
        variants={itemVariants}
        whileHover={{ scale: 1.1 }}
      />
      <motion.div variants={itemVariants}>
        <Navbar />
      </motion.div>
    </motion.header>
  );
};

export default Header;
