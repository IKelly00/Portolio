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

// 1. DRY Data Structure: Easily manage your categories here
const skillCategories = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    tag: "01 // UI.LAYER",
    skills: Frontend_skill,
    themeColor: "purple",
    glowStyles:
      "hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    tagStyles:
      "text-purple-300 bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    gradientLine: "via-purple-500/50",
    animation: slideInFromLeft(0.3),
  },
  {
    id: "backend",
    title: "Backend Architecture",
    tag: "02 // DATA.CORE",
    skills: Backend_skill,
    themeColor: "cyan",
    glowStyles:
      "hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
    tagStyles:
      "text-cyan-300 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]",
    gradientLine: "via-cyan-500/50",
    animation: slideInFromRight(0.3),
  },
  {
    id: "devops",
    title: "DevOps & Tooling",
    tag: "03 // WORK.FLOW",
    skills: DevTools,
    themeColor: "purple",
    glowStyles:
      "hover:border-purple-500/50 hover:shadow-[0_0_40px_rgba(168,85,247,0.15)]",
    tagStyles:
      "text-purple-300 bg-purple-500/10 border-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.15)]",
    gradientLine: "via-purple-500/50",
    animation: slideInFromLeft(0.5),
  },
  {
    id: "libraries",
    title: "External Libraries",
    tag: "04 // MOD.ECOSYSTEM",
    skills: libraries,
    themeColor: "cyan",
    glowStyles:
      "hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]",
    tagStyles:
      "text-cyan-300 bg-cyan-500/10 border-cyan-500/20 shadow-[0_0_15px_rgba(34,211,238,0.15)]",
    gradientLine: "via-cyan-500/50",
    animation: slideInFromRight(0.5),
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-10 min-h-screen relative overflow-hidden py-24 select-none"
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none z-0" />

      {/* Header */}
      <div className="z-10 w-full mb-4">
        <SkillText />
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1250px] px-4 md:px-8 z-10 relative">
        {skillCategories.map((category) => (
          <InView triggerOnce={false} key={category.id}>
            {({ inView, ref }) => (
              <motion.div
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={category.animation}
                className={`group w-full h-full bg-[#050214]/40 backdrop-blur-xl border border-white/[0.05] rounded-3xl p-6 md:p-8 relative overflow-hidden transition-all duration-500 flex flex-col justify-between ${category.glowStyles}`}
              >
                {/* Top Hover Glow Line */}
                <div
                  className={`absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent ${category.gradientLine} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 relative z-10">
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 text-lg md:text-xl font-bold tracking-wide">
                    {category.title}
                  </h3>
                  <span
                    className={`text-[10px] font-mono tracking-widest px-3 py-1.5 rounded-full border backdrop-blur-md w-max ${category.tagStyles}`}
                  >
                    {category.tag}
                  </span>
                </div>

                {/* Divider */}
                <div className="h-[1px] w-full bg-gradient-to-r from-white/[0.05] via-white/[0.1] to-transparent mb-6" />

                {/* Icons Container with subtle dotted grid background */}
                <div
                  className="flex flex-row justify-center flex-wrap gap-5 items-center py-8 px-4 rounded-2xl relative overflow-hidden"
                  style={{
                    background:
                      "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.03) 1px, transparent 0)",
                    backgroundSize: "20px 20px",
                    backgroundColor: "rgba(0,0,0,0.2)",
                  }}
                >
                  {/* Subtle inner shadow overlay */}
                  <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none rounded-2xl" />

                  {category.skills.map((image, index) => (
                    <div
                      key={index}
                      className="transition-all duration-300 hover:-translate-y-2 hover:scale-110 cursor-pointer relative z-10"
                      style={{
                        filter: `drop-shadow(0 0 10px rgba(${category.themeColor === "purple" ? "168,85,247" : "34,211,238"}, 0.3))`,
                      }}
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
        ))}
      </div>

      {/* Looping Video Background */}
      <div className="hidden md:block w-full h-full absolute top-0 left-0 pointer-events-none z-[-5]">
        <div className="w-full h-full opacity-[0.12] absolute flex items-center justify-center mix-blend-color-dodge">
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
