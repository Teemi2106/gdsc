import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import logo from "../../Assets/Footer/logo.png";
import fb from "../../Assets/Footer/fb.png";
import ln from "../../Assets/Footer/ln.png";
import ig from "../../Assets/Footer/instagram.png";
import tw from "../../Assets/Footer/twitter.png";
import Navbar from "../Header/Navbar";

interface Props {}

const Footer = (props: Props) => {
  const { ref, isInView } = useInViewAnimation({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
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
    <motion.footer
      ref={ref}
      className="bg-[#285E67] w-full flex flex-row text-white justify-between items-center p-[10vmin]"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.div className="w-1/6" variants={itemVariants}>
        <motion.img
          src={logo}
          alt="logo"
          className="w-[15vmin] pb-10"
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="flex justify-start gap-7"
          variants={itemVariants}
        >
          <motion.img
            src={tw}
            alt="socials"
            className="w-[3vmin]"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={ig}
            alt="socials"
            className="w-[3vmin]"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={ln}
            alt="socials"
            className="w-[3vmin]"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          />
          <motion.img
            src={fb}
            alt="socials"
            className="w-[3vmin]"
            whileHover={{ scale: 1.2, rotate: 360 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </motion.div>
      <motion.div variants={itemVariants}>
        <Navbar />
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
