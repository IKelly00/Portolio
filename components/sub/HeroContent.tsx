"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const HeroContent = () => {
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // FIXED: Changed fragments to React.Fragment to support keys, and escaped the quotes
  const codeLines = [
    <React.Fragment key="line-1">
      <span className="text-blue-400">const</span>{" "}
      <span className="text-yellow-300">getAchievements</span> = () =&gt;{" "}
      <span className="text-yellow-500">&#123;</span>
    </React.Fragment>,
    <span className="ml-4" key="line-2">
      <span className="text-purple-400">return</span>{" "}
      <span className="text-blue-500">[</span>
      <span className="text-orange-300">&quot;Top 100 Coder&quot;</span>,{" "}
      <span className="text-orange-300">&quot;Mentor&quot;</span>
      <span className="text-blue-500">]</span>;
    </span>,
    <React.Fragment key="line-3">
      <span className="text-yellow-500">&#125;</span>;
    </React.Fragment>,
  ];

  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex md:flex-row flex-col items-center justify-center gap-10 md:gap-0 md:px-20 px-5 mt-[5rem] w-full z-20"
        >
          <div className="h-full w-full md:w-3/6 flex flex-col gap-6 justify-start text-start">
            <div className="hidden md:flex flex-row items-center md:gap-5 gap-1">
              <InView triggerOnce={false}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                  >
                    <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px] mr-[10px]">
                      Aspiring Fullstack
                    </h1>
                  </motion.div>
                )}
              </InView>

              <InView triggerOnce={false}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                  >
                    <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px] mr-[10px]">
                      Lead Developer
                    </h1>
                  </motion.div>
                )}
              </InView>
              <InView triggerOnce={false}>
                {({ inView, ref }) => (
                  <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={slideInFromTop}
                    className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
                  >
                    <BsStars className="text-[#b49bff] mr-[10px] h-5 w-5" />
                    <h1 className="Welcome-text text-[13px] mr-[10px]">
                      Team Lead
                    </h1>
                  </motion.div>
                )}
              </InView>
            </div>

            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.5)}
                  className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
                >
                  <span>
                    Coding
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      {" "}
                      Dreams{" "}
                    </span>
                    into
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                      {" "}
                      Reality{" "}
                    </span>
                    one line at a time
                  </span>
                </motion.div>
              )}
            </InView>

            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.5)}
                  className="flex flex-col gap-6 mt-6 md:text-5xl text-4xl font-bold text-white max-w-[600px] w-auto h-auto z-20"
                >
                  <div
                    ref={ref}
                    className="w-full max-w-md mr-auto bg-[#1e1e1e] rounded-xl border border-gray-800 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm"
                  >
                    {/* Mac OS Window Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-gray-800">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>

                    {/* Typing Code Body */}
                    <div className="p-4">
                      <motion.div
                        initial="hidden"
                        animate={inView && isTyping ? "visible" : "hidden"}
                        transition={{ staggerChildren: 0.5 }}
                      >
                        {codeLines.map((line, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              hidden: {
                                width: 0,
                                opacity: 0,
                                transition: { duration: 0 },
                              },
                              visible: {
                                width: "100%",
                                opacity: 1,
                                transition: { duration: 2.0, ease: "linear" },
                              },
                            }}
                            className="whitespace-nowrap overflow-hidden block text-gray-300"
                          >
                            {line}
                          </motion.div>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              )}
            </InView>

            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.a
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  href="#about"
                  variants={slideInFromLeft(1)}
                  className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] z-40"
                >
                  Learn More!
                </motion.a>
              )}
            </InView>
          </div>

          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromRight(0.8)}
                className="w-full md:w-3/6 h-full flex justify-center items-center z-40"
              >
                <Image
                  src="/mainIconsdark.svg"
                  alt="work icons"
                  height={650}
                  width={650}
                />
              </motion.div>
            )}
          </InView>
        </motion.div>
      )}
    </InView>
  );
};

export default HeroContent;
