import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="flex flex-col relative h-full w-full">
      <video
        autoPlay
        muted
        loop
        className=" rotate-180 absolute top-[-340px] z-[1] object-cover left-0 w-full h-full"
      >
        <source src="/blackhole.webm" />
      </video>
      <HeroContent/>
    </div>
  );
};

export default Hero;
