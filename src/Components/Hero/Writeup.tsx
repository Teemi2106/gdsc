import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";

interface Props {}

const Writeup = (props: Props) => {
  const { ref, isInView } = useInViewAnimation({ threshold: 0.5 });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="w-full flex flex-col items-center mt-8 md:mt-16 text-center p-4 md:p-6 lg:p-8 writeup"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.h1
        className="align-middle font-semibold text-[#2A2A2A] text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl pb-4 md:pb-7 leading-tight"
        variants={itemVariants}
      >
        The dawn of a new era in health is here
      </motion.h1>
      <motion.p
        className="text-[#2B2B2B] text-sm sm:text-base md:text-lg pb-4 md:pb-7 max-w-2xl leading-relaxed"
        variants={itemVariants}
      >
        Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
        lacus platea orci vel elit blandit facilisis{" "}
      </motion.p>
      <motion.button
        className="px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 bg-[#285E67] text-white rounded-full text-sm sm:text-base md:text-lg font-medium hover:bg-[#1e4a52] transition-colors min-h-[44px] min-w-[44px]"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Join now
      </motion.button>
    </motion.div>
  );
};

export default Writeup;
