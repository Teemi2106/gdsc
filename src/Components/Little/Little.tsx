import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import leafIcon from "../../Assets/Little/leaf-icon.png";
import illustration from "../../Assets/Little/illustration.png";

interface Props {}

const Little = (props: Props) => {
  const { ref, isInView } = useInViewAnimation({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.4,
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
      className="w-11/12 flex flex-col md:flex-row my-5 bg-[#F4F4F4] mt-10 py-5 md:py-8 items-center justify-around min-h-[50vmin] rounded-xl gap-4 md:gap-0"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.img
        src={illustration}
        alt="illustration"
        className="w-2/3 sm:w-1/3 md:w-1/5 mb-4 md:mb-0"
        variants={itemVariants}
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        className="h-full w-full md:w-1/2 flex flex-col items-center justify-center px-4"
        variants={itemVariants}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 md:mb-7 text-center"
          variants={itemVariants}
        >
          You are what you eat
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 sm:gap-0"
          variants={containerVariants}
        >
          <motion.div
            className="w-full sm:w-1/2 px-2 text-center sm:text-left"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={leafIcon}
              alt="icon"
              className="w-10 sm:w-12 mb-3 md:mb-5 mx-auto sm:mx-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <p className="text-xs sm:text-sm md:text-base w-full">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea orci vel elit.
            </p>
          </motion.div>
          <motion.div
            className="w-full sm:w-1/2 px-2 text-center sm:text-left"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <motion.img
              src={leafIcon}
              alt="icon"
              className="w-10 sm:w-12 mb-3 md:mb-5 mx-auto sm:mx-0"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            />
            <p className="text-xs sm:text-sm md:text-base">
              Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
              Diam lacus platea orci vel elit.
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Little;
