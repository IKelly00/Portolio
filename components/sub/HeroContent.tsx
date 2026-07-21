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
  const [visibleLines, setVisibleLines] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({
    line: 1,
    visible: true,
  });

  useEffect(() => {
    const sequence = async () => {
      while (true) {
        // Line 1 types out
        setCursorPosition({ line: 1, visible: true });
        setVisibleLines(1);
        await new Promise((r) => setTimeout(r, 600));

        // Line 2 types out
        setCursorPosition({ line: 2, visible: true });
        setVisibleLines(2);
        await new Promise((r) => setTimeout(r, 1850));

        // Line 3 types out
        setCursorPosition({ line: 3, visible: true });
        setVisibleLines(3);
        await new Promise((r) => setTimeout(r, 1000));

        // Idle state at completion
        await new Promise((r) => setTimeout(r, 4000));

        // Reset system
        setVisibleLines(0);
        setCursorPosition({ line: 1, visible: false });
        await new Promise((r) => setTimeout(r, 800));
      }
    };

    sequence();
  }, []);

  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className="flex md:flex-row flex-col items-center justify-center gap-12 md:gap-0 md:px-20 px-5 mt-[5rem] w-full z-20"
        >
          {/* LEFT CONTENT BLOCK */}
          <div className="h-full w-full md:w-3/6 flex flex-col gap-6 justify-start text-start z-20">
            {/* Consolidated Pill Badges Layout */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop}
              className="flex flex-wrap items-center gap-3 w-full z-20"
            >
              {["Aspiring Fullstack", "Web Developer", "Team Lead"].map(
                (text, idx) => (
                  <div
                    key={idx}
                    className="Welcome-box py-[6px] px-[12px] border border-[#7042f88b] bg-[#07041a]/60 backdrop-blur-md opacity-[0.9] flex items-center rounded-full"
                  >
                    <BsStars className="text-[#b49bff] mr-[8px] h-4 w-4 animate-pulse" />
                    <span className="Welcome-text text-[12px] tracking-wide font-medium text-gray-300">
                      {text}
                    </span>
                  </div>
                ),
              )}
            </motion.div>

            {/* Typography Core Headline */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-4 mt-4 md:text-5xl text-4xl font-extrabold text-white max-w-[600px] w-auto h-auto leading-[1.15] z-20"
            >
              <h1>
                Coding{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 drop-shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  Dreams
                </span>{" "}
                into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 drop-shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                  Reality
                </span>{" "}
                one line at a time
              </h1>
            </motion.div>

            {/* HIGH-FIDELITY DEV WORKSPACE CARD */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.7)}
              className="w-full max-w-[460px] mt-2 bg-[#0a071e]/70 backdrop-blur-xl rounded-xl border border-purple-500/20 shadow-[0_0_30px_rgba(112,66,248,0.15)] overflow-hidden font-mono text-xs sm:text-sm z-20"
            >
              {/* IDE Top Window Navigation Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#050312]/90 border-b border-white/[0.06]">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56] shadow-md shadow-red-900/20" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e] shadow-md shadow-yellow-900/20" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f] shadow-md shadow-green-900/20" />
                </div>
                {/* File Management Tab */}
                <div className="text-[11px] text-gray-400 font-medium px-3 py-1 bg-[#0a071e]/90 border-x border-t border-white/[0.06] rounded-t-md translate-y-[13px] text-xs flex items-center gap-1.5">
                  <span className="text-cyan-400 font-bold text-[10px]">
                    TS
                  </span>
                  reality.config.ts
                </div>
                <div className="w-12" />
              </div>

              {/* IDE Body Container Workspace */}
              <div className="p-5 bg-[#070416]/40 flex gap-4 text-left select-none leading-relaxed">
                {/* Code Editor Line Numbers Column */}
                <div className="flex flex-col text-gray-600 text-right font-light pr-1 border-r border-white/[0.04] w-5">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>

                {/* Live Typographic Syntax Pipeline */}
                <div className="flex-1 font-medium tracking-wide">
                  {/* Line 1 */}
                  <div className="h-6 flex items-center relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: visibleLines >= 1 ? "100%" : 0 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="whitespace-nowrap overflow-hidden pr-2 flex items-center"
                    >
                      <span className="text-purple-400">const</span>{" "}
                      <span className="text-yellow-400 ml-1.5">
                        handleExplore
                      </span>{" "}
                      <span className="text-pink-400 ml-1.5">=</span>{" "}
                      <span className="text-cyan-400 ml-1.5">()</span>{" "}
                      <span className="text-pink-400 ml-1.5">=&gt;</span>{" "}
                      <span className="text-purple-300 ml-1.5">&#123;</span>
                    </motion.div>
                    {cursorPosition.line === 1 && cursorPosition.visible && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7 }}
                        className="absolute left-0 bottom-1 w-[8px] h-[15px] bg-cyan-400 pointer-events-none"
                        style={{
                          transform:
                            visibleLines >= 1
                              ? "translateX(255px)"
                              : "translateX(0px)",
                          transition: "transform 0.8s ease-in-out",
                        }}
                      />
                    )}
                  </div>

                  {/* Line 2 */}
                  <div className="h-6 flex items-center relative overflow-hidden pl-5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: visibleLines >= 2 ? "100%" : 0 }}
                      transition={{ duration: 1.0, ease: "easeInOut" }}
                      className="whitespace-nowrap overflow-hidden pr-2 flex items-center"
                    >
                      <span className="text-blue-400">console</span>
                      <span className="text-gray-300">.</span>
                      <span className="text-purple-400">log</span>
                      <span className="text-amber-300">(</span>
                      <span className="text-green-300">
                        `{"Exploring Projects"}`
                      </span>
                      <span className="text-amber-300">)</span>
                      <span className="text-gray-400">;</span>
                    </motion.div>
                    {cursorPosition.line === 2 && cursorPosition.visible && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7 }}
                        className="absolute left-5 bottom-1 w-[8px] h-[15px] bg-cyan-400 pointer-events-none"
                        style={{
                          transform:
                            visibleLines >= 2
                              ? "translateX(245px)"
                              : "translateX(0px)",
                          transition: "transform 1.0s ease-in-out",
                        }}
                      />
                    )}
                  </div>

                  {/* Line 3 */}
                  <div className="h-6 flex items-center relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: visibleLines >= 3 ? "100%" : 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="whitespace-nowrap overflow-hidden pr-2 flex items-center"
                    >
                      <span className="text-purple-300">&#125;</span>
                      <span className="text-gray-400">;</span>
                    </motion.div>
                    {cursorPosition.line === 3 && cursorPosition.visible && (
                      <motion.span
                        animate={{ opacity: [1, 0] }}
                        transition={{ repeat: Infinity, duration: 0.7 }}
                        className="absolute left-0 bottom-1 w-[8px] h-[15px] bg-cyan-400 pointer-events-none"
                        style={{
                          transform:
                            visibleLines >= 3
                              ? "translateX(20px)"
                              : "translateX(0px)",
                          transition: "transform 0.4s ease-in-out",
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Call To Action (CTA Button) */}
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromLeft(0.9)}
              className="z-40"
            >
              <a
                href="#about"
                className="inline-block py-2.5 px-7 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-center text-white font-medium cursor-pointer rounded-lg max-w-[200px] transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-purple-950/40 text-sm"
              >
                Learn More!
              </a>
            </motion.div>
          </div>

          <div className="w-full md:w-3/6 h-full flex justify-center items-center z-40">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromRight(0.8)}
            >
              <Image
                src="/mainIconsdark.svg"
                alt="work icons"
                height={650}
                width={650}
                className="drop-shadow-[0_0_35px_rgba(112,66,248,0.1)]"
                priority
              />
            </motion.div>
          </div>
        </div>
      )}
    </InView>
  );
};

export default HeroContent;
