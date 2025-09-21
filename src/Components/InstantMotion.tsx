import React from "react";
import { motion, MotionProps } from "framer-motion";

interface InstantMotionProps extends Omit<MotionProps, "transition"> {
  children: React.ReactNode;
  instant?: boolean;
}

const InstantMotion: React.FC<InstantMotionProps> = ({
  children,
  instant = true,
  ...props
}) => {
  const instantTransition = {
    duration: instant ? 0.001 : 0.6,
    delay: 0,
  };

  return (
    <motion.div {...props} transition={instantTransition}>
      {children}
    </motion.div>
  );
};

export default InstantMotion;
