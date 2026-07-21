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

      {/* Top Cosmic Glow */}
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
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4 text-center"
            >
              About
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                {" "}
                Me
              </span>
            </motion.div>
          )}
        </InView>
      </div>

      <div className="w-full max-w-[1200px] grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 items-stretch z-[10]">
        {/* LEFT COLUMN: Redesigned Profile Showcase Card */}
        <div className="col-span-1 md:col-span-5 flex flex-col items-center justify-center relative">
          <InView triggerOnce={false}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={slideInFromLeft(0.6)}
                className="relative w-full max-w-[420px] min-h-[520px] mx-auto bg-[#07041a]/40 backdrop-blur-xl border border-purple-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-purple-950/30 flex flex-col justify-between p-6 group z-[10]"
              >
                {/* 1. Card Background Image */}
                <img
                  src="/michael.png"
                  alt="Michael Roy Jardinel"
                  className="absolute inset-0 w-full h-full object-cover z-0 object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* 2. Premium Dark Gradient Overlay for Typography Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040212] via-[#07041a]/70 to-[#030014]/20 z-[1]" />

                {/* 3. Floating Available Badge */}
                <div className="relative z-10 self-start inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#030014]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-400 text-[10px] uppercase tracking-widest font-semibold shadow-lg">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  Available for Projects
                </div>

                {/* 4. Layered Content Container at the Bottom */}
                <div className="relative z-10 flex flex-col space-y-4 pt-40">
                  {/* Header: Name on top */}
                  <div className="space-y-1 text-left">
                    <h2 className="text-2xl md:text-3xl font-black tracking-wide text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] bg-gradient-to-b from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
                      Michael Roy Jardinel
                    </h2>
                    <p className="text-xs font-bold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400 drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                      Frontend Developer
                    </p>
                  </div>

                  {/* Subtle Elegant Divider */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-purple-500/30 via-cyan-500/20 to-transparent" />

                  {/* Core Bio Text */}
                  <p className="text-xs text-gray-300 leading-relaxed font-normal text-left drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
                    A dedicated Information Technology graduate from STI
                    College, holding a Bachelor of Science in Information
                    Technology. Equipped with foundational tech skills and eager
                    to contribute to innovative software solutions.
                  </p>

                  {/* Micro Profile Statistics / Focus Grid */}
                  <div className="grid grid-cols-2 gap-2 pt-1 text-left text-[11px]">
                    <div className="p-2.5 rounded-xl bg-[#030014]/60 border border-white/[0.08] backdrop-blur-md shadow-inner">
                      <span className="block text-gray-400 text-[9px] uppercase tracking-wider font-medium">
                        Core Focus
                      </span>
                      <span className="text-gray-200 font-medium mt-0.5 block">
                        UI Architectures
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl bg-[#030014]/60 border border-white/[0.08] backdrop-blur-md shadow-inner">
                      <span className="block text-gray-400 text-[9px] uppercase tracking-wider font-medium">
                        Main Stack
                      </span>
                      <span className="text-purple-300 font-medium mt-0.5 block">
                        React Ecosystem
                      </span>
                    </div>
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
                      Focused on clean, scalable, and user-centric code
                      structures built to withstand the demands of modern
                      production environments and seamless system deployments.
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
