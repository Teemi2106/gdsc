import React from "react";
import { motion } from "framer-motion";
import { useInViewAnimation } from "../../hooks/useInViewAnimation";
import image from "../../Assets/Organic/image.png";
import icon from "../../Assets/Organic/icon.png";

interface Props {}

const Organic = (props: Props) => {
  const { ref, isInView } = useInViewAnimation({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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
      className="flex flex-col md:flex-row items-center justify-between mx-auto p-4 md:p-8 gap-6 md:gap-12 w-full"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <motion.img
        src={image}
        alt="soil"
        className="w-1/2 h-auto rounded-2xl object-cover shadow-lg brightness-75"
        variants={itemVariants}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="space-y-4 md:space-y-6 w-1/2"
        variants={itemVariants}
      >
        <motion.h1
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight text-center lg:text-left"
          variants={itemVariants}
        >
          Fresh organic produce
        </motion.h1>

        <motion.p
          className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center lg:text-left"
          variants={itemVariants}
        >
          Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a. Diam
          lacus platea orci vel elit blandit facilisis enim risus. Ut tristique
          eget integer odio nec vulputate consequat. Elit mattis ac in amet sit
          viverra.
        </motion.p>

        <motion.div
          className="space-y-3 md:space-y-4 pt-2 md:pt-4"
          variants={containerVariants}
        >
          {[1, 2, 3].map((item, index) => (
            <motion.div
              key={item}
              className="flex items-center gap-3 md:gap-4"
              variants={itemVariants}
              whileHover={{ x: 10 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img
                src={icon}
                alt="icon"
                className="w-[5vmin] flex-shrink-0"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              />
              <p className="text-gray-600 text-sm sm:text-sm md:text-lg leading-relaxed flex-1">
                Lorem ipsum dolor sit amet consectetur. Quam ut consequat at a.
                Diam lacus platea
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Organic;
