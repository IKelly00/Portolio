import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
      id="home"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-100 absolute left-0 z-[0] w-full pointer-events-none object-cover
          /* Mobile settings: restrict height and pull up slightly so it doesn't scale massively */
          top-[-120px] h-[55vh] 
          /* Tablet settings */
          md:top-[-240px] md:h-full 
          /* Desktop settings */
          lg:top-[-335px]"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
