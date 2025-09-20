import React from "react";
import Writeup from "./Writeup";
import HeroImages from "./HeroImages";

interface Props {}

const Hero = (props: Props) => {
  return (
    <div className="w-full flex flex-col items-center">
      <Writeup />
      <HeroImages />
    </div>
  );
};

export default Hero;
