"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { InView } from "react-intersection-observer";

const SkillText = () => {
  return (
    <div className="w-full h-auto pt-16 flex flex-col items-center justify-center">
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="text-center mb-10 z-50 px-4"
          >
            {/* Badge matching the Contact section */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-medium backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
              <span className="text-cyan-400">✦</span> Technical Arsenal &
              Capabilities
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              What Can I{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-400 to-blue-400">
                Offer
              </span>
            </h2>

            {/* Description Paragraph */}
            <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
              Building fast, easy-to-use websites and apps. I handle everything
              from how it looks beautifully on your screen to how it works
              smoothly behind the scenes.
            </p>
          </motion.div>
        )}
      </InView>
    </div>
  );
};

export default SkillText;
