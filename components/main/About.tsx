"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen w-full px-6 md:px-16 lg:px-24 py-24 overflow-hidden bg-[#030014]"
    >
      {/* Background Video Layout */}
      <div className="w-full hidden md:flex items-start justify-center absolute top-0 left-0 h-full opacity-20 z-[1] pointer-events-none">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm"
        />
      </div>

      {/* Top Cosmic Glow (Inspired by the neon aura in image_627900.jpg) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[180px] bg-gradient-to-b from-purple-500/20 to-transparent blur-[100px] z-[1] pointer-events-none" />

      {/* Section Global Header */}
      <div className="w-full max-w-[1200px] mb-16 md:mb-20 z-[10] text-center">
        <InView triggerOnce={false}>
          {({ inView, ref }) => (
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={slideInFromTop}
              className="text-center text-[32px] md:text-[40px] font-semibold text-gray-200"
            >
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Me
              </span>
            </motion.div>
          )}
        </InView>
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-center z-[10]">
        <div className="col-span-1 md:col-span-5 flex flex-col items-center justify-center relative text-center">
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromLeft(0.6)}
                className="w-full max-w-[420px] mx-auto bg-[#07041a]/60 backdrop-blur-xl border border-purple-500/15 rounded-2xl p-6 shadow-2xl shadow-purple-950/20 flex flex-col space-y-5 z-[10]"
              >
                <div className="inline-flex items-center gap-2 self-center md:self-start px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase tracking-widest font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Available for Projects
                </div>

                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-left">
                  <div className="relative flex items-center justify-center w-20 h-20 flex-shrink-0">
                    <div className="absolute w-24 h-24 rounded-full border border-purple-500/10 pointer-events-none animate-[spin_120s_linear_infinite]" />
                    <div className="absolute w-28 h-28 rounded-full border border-cyan-500/5 pointer-events-none" />

                    <div className="relative flex items-center justify-center p-[2px] rounded-full bg-gradient-to-b from-purple-500 to-cyan-500 shadow-lg shadow-purple-500/20">
                      <div className="bg-[#030014] p-0.5 rounded-full">
                        <img
                          src="/michael.png"
                          alt="Michael Roy Jardinel"
                          width={72}
                          height={72}
                          className="rounded-full object-cover bg-neutral-900"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-1 self-center">
                    <h2 className="text-xl md:text-2xl font-extrabold tracking-wide text-white bg-gradient-to-b from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                      Michael Roy Jardinel
                    </h2>
                    <p className="text-[11px] font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">
                      Frontend Developer
                    </p>
                  </div>
                </div>

                {/* 3. Sleek Subtle Workspace Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/0 via-purple-500/15 to-purple-500/0 sm:from-purple-500/15 sm:via-purple-500/10 sm:to-transparent" />

                {/* 4. Core Bio Text */}
                <p className="text-xs text-gray-400 leading-relaxed font-light text-center sm:text-left">
                  Specializing in React.js ecosystems, high-performance user
                  interfaces, and modular code architecture.
                </p>

                {/* 5. Micro Profile Statistics / Focus Grid */}
                <div className="grid grid-cols-2 gap-2 pt-1 text-left text-[11px]">
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-sm">
                    <span className="block text-gray-500 text-[9px] uppercase tracking-wider font-medium">
                      Core Focus
                    </span>
                    <span className="text-gray-300 font-medium mt-0.5 block">
                      UI Architectures
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] backdrop-blur-sm">
                    <span className="block text-gray-500 text-[9px] uppercase tracking-wider font-medium">
                      Main Stack
                    </span>
                    <span className="text-purple-300 font-medium mt-0.5 block">
                      React Ecosystem
                    </span>
                  </div>
                </div>
              </motion.div>
            )}
          </InView>
        </div>

        {/* RIGHT COLUMN: Bio details & Achievements */}
        <div className="col-span-1 md:col-span-7 flex flex-col justify-center">
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromRight(0.5)}
                className="flex flex-col space-y-10 md:space-y-12 lg:pl-4"
              >
                {/* Visual Pill Badges / Tags */}
                <div className="flex flex-wrap gap-3">
                  <span className="flex items-center gap-1 text-[11px] md:text-xs font-medium text-purple-300 border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                    ✦ Frontend Specialist
                  </span>
                  <span className="flex items-center gap-1 text-[11px] md:text-xs font-medium text-cyan-300 border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                    ✦ 4+ Years Experience
                  </span>
                  <span className="flex items-center gap-1 text-[11px] md:text-xs font-medium text-purple-300 border border-purple-500/30 bg-purple-500/10 px-3.5 py-1.5 rounded-full backdrop-blur-sm">
                    ✦ Fullstack Fundamentals
                  </span>
                </div>

                {/* Micro-Branding & Impact Typography Heading */}
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.2] tracking-tight">
                    Where{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                      Elegant Design
                    </span>{" "}
                    <span>Meets</span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-cyan-500">
                      Scalable Code
                    </span>
                  </h3>
                </div>

                {/* Structured Performance Highlight List */}
                <ul className="space-y-1 md:space-y-6 lg:space-y-7 text-sm md:text-base text-gray-300 font-light max-w-xl leading-relaxed">
                  <li className="flex items-start gap-3.5">
                    <span className="text-purple-400 mt-1 flex-shrink-0">
                      ✦
                    </span>
                    <span className="text-[15px]">
                      Focused on building high-performance, responsive user
                      interfaces utilizing{" "}
                      <strong className="text-purple-300 font-normal">
                        React.js
                      </strong>{" "}
                      and modern{" "}
                      <strong className="text-purple-300 font-normal">
                        JavaScript (ES6+)
                      </strong>
                      .
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✦</span>
                    <span className="text-[15px]">
                      4+ years of experience on scalable-code, user-centric code
                      structures for client-based deployments.
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-purple-400 mt-1 flex-shrink-0">
                      ✦
                    </span>
                    <span className="text-[15px]">
                      Backed by core knowledge bases in{" "}
                      <strong className="text-cyan-300 font-normal">
                        PHP, Node.js, and MySQL
                      </strong>{" "}
                      to flawlessly bridge data-driven features.
                    </span>
                  </li>
                  <li className="flex items-start gap-3.5">
                    <span className="text-cyan-400 mt-1 flex-shrink-0">✦</span>
                    <span className="text-[15px]">
                      Adept at translating abstract requirements into highly
                      responsive, structured, and performant web products.
                    </span>
                  </li>
                </ul>
              </motion.div>
            )}
          </InView>
        </div>
      </div>
    </section>
  );
};

export default About;
