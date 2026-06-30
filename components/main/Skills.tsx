"use client";

import {
  Backend_skill,
  DevTools,
  Frontend_skill,
  libraries,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { InView } from "react-intersection-observer";
import { slideInFromLeft, slideInFromRight } from "@/utils/motion";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-8 min-h-screen relative overflow-hidden py-28 select-none"
      style={{ transform: "scale(0.95)" }}
    >
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="z-10">
        <SkillText />
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-[1400px] px-4 md:px-10 gap-8 z-10">
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8">
          <div className="w-full lg:w-1/2 flex group">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.4)}
                  className="w-full bg-[#050214]/30 backdrop-blur-2xl border border-white/[0.06] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-purple-950/20 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 text-lg font-bold tracking-wider uppercase">
                        Frontend Engineering
                      </span>
                      <span className="text-[10px] text-purple-400 font-mono tracking-widest bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                        01 // UI.LAYER
                      </span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.08] via-purple-500/10 to-transparent" />
                  </div>

                  <div className="flex flex-row justify-center flex-wrap gap-6 items-center mt-8 py-6 px-4 bg-black/40 border border-white/[0.03] rounded-xl backdrop-blur-md shadow-inner">
                    {Frontend_skill.map((image, index) => (
                      <div
                        key={index}
                        className="transition-all duration-300 hover:scale-115 hover:filter hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-pointer"
                      >
                        <SkillDataProvider
                          src={image.Image}
                          width={image.width}
                          height={image.height}
                          index={index}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>

          <div className="w-full lg:w-1/2 flex group">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromRight(0.4)}
                  className="w-full bg-[#050214]/30 backdrop-blur-2xl border border-white/[0.06] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-cyan-950/20 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 text-lg font-bold tracking-wider uppercase">
                        Backend Architecture
                      </span>
                      <span className="text-[10px] text-cyan-400 font-mono tracking-widest bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                        02 // DATA.CORE
                      </span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.08] via-cyan-500/10 to-transparent" />
                  </div>

                  <div className="flex flex-row justify-center flex-wrap gap-6 items-center mt-8 py-6 px-4 bg-black/40 border border-white/[0.03] rounded-xl backdrop-blur-md shadow-inner">
                    {Backend_skill.map((image, index) => (
                      <div
                        key={index}
                        className="transition-all duration-300 hover:scale-115 hover:filter hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] cursor-pointer"
                      >
                        <SkillDataProvider
                          src={image.Image}
                          width={image.width}
                          height={image.height}
                          index={index}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-stretch justify-center gap-8">
          <div className="w-full lg:w-1/2 flex group">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromLeft(0.5)}
                  className="w-full bg-[#050214]/30 backdrop-blur-2xl border border-white/[0.06] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-purple-500/30 hover:shadow-purple-950/20 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 text-lg font-bold tracking-wider uppercase">
                        DevOps & Tooling
                      </span>
                      <span className="text-[10px] text-purple-400 font-mono tracking-widest bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                        03 // WORK.FLOW
                      </span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.08] via-purple-500/10 to-transparent" />
                  </div>

                  <div className="flex flex-row justify-center flex-wrap gap-6 items-center mt-8 py-6 px-4 bg-black/40 border border-white/[0.03] rounded-xl backdrop-blur-md shadow-inner">
                    {DevTools.map((image, index) => (
                      <div
                        key={index}
                        className="transition-all duration-300 hover:scale-115 hover:filter hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.5)] cursor-pointer"
                      >
                        <SkillDataProvider
                          src={image.Image}
                          width={image.width}
                          height={image.height}
                          index={index}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>

          <div className="w-full lg:w-1/2 flex group">
            <InView triggerOnce={false}>
              {({ inView, ref }) => (
                <motion.div
                  ref={ref}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={slideInFromRight(0.5)}
                  className="w-full bg-[#050214]/30 backdrop-blur-2xl border border-white/[0.06] rounded-2xl p-6 md:p-8 relative overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 hover:shadow-cyan-950/20 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 text-lg font-bold tracking-wider uppercase">
                        External Libraries
                      </span>
                      <span className="text-[10px] text-cyan-400 font-mono tracking-widest bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]">
                        04 // MOD.Ecosystem
                      </span>
                    </div>
                    <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.08] via-cyan-500/10 to-transparent" />
                  </div>

                  <div className="flex flex-row justify-center flex-wrap gap-6 items-center mt-8 py-6 px-4 bg-black/40 border border-white/[0.03] rounded-xl backdrop-blur-md shadow-inner">
                    {libraries.map((image, index) => (
                      <div
                        key={index}
                        className="transition-all duration-300 hover:scale-115 hover:filter hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] cursor-pointer"
                      >
                        <SkillDataProvider
                          src={image.Image}
                          width={image.width}
                          height={image.height}
                          index={index}
                        />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </InView>
          </div>
        </div>
      </div>

      <div className="hidden md:block w-full h-full absolute top-0 left-0 pointer-events-none z-[-5]">
        <div className="w-full h-full opacity-[0.18] absolute flex items-center justify-center mix-blend-color-dodge">
          <video
            className="w-full h-full object-cover"
            preload="auto"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
