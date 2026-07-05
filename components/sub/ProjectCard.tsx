"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import { slideInFromBottom } from "@/utils/motion";
import { InView } from "react-intersection-observer";

interface Props {
  src: string;
  title: string;
  description: string;
  sourceLink: string;
  demoLink: string;
  technologies: string[];
}

const techIcons: Record<string, string> = {
  "React JS": "/react.png",
  React: "/react.png",
  "Next.js": "/next.png",
  "Tailwind CSS": "/tailwind.png",
  "Framer Motion": "/framer.png",
  Vite: "/vite.svg",
  JavaScript: "/js.png",
  "Three.js": "/threejs.png",
  "CSS Module": "/css.png",
  "CSS Variables": "/css.png",
  "Node JS": "/nodejs.svg",
  PHP: "/php.png",
  Bootstrap: "/Bootstrap.svg",
  "Vue JS": "/Vue.svg",
  Laravel: "/Laravel.svg",
};

const ProjectCard = ({
  src,
  title,
  description,
  sourceLink,
  demoLink,
  technologies,
}: Props) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  return (
    <InView triggerOnce={false}>
      {({ inView, ref }) => (
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={slideInFromBottom}
          className="relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-[#0300145e] backdrop-blur-md flex flex-col h-full w-full group transition-all duration-300 hover:shadow-[0_0_30px_rgba(42,14,97,0.6)]"
        >
          {/* Main Card Content Layer */}
          <div className="flex flex-col flex-grow relative z-10 h-full">
            {/* CHANGED: Framed image inside a unified ratio wrapper using fill layout to neutralize image dimension differences */}
            <div className="relative w-full aspect-video overflow-hidden rounded-t-2xl bg-[#0300145e]">
              <Image
                src={src}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>

            {/* Content box setup with explicit flex growth handles unequal content elegantly */}
            <div className="relative p-6 flex flex-col flex-grow z-10 justify-between">
              <div>
                <h1 className="text-2xl font-bold text-white line-clamp-2">
                  {title}
                </h1>
                <p className="mt-3 text-gray-300 text-sm leading-relaxed line-clamp-4">
                  {description}
                </p>
              </div>

              <div className="mt-6 mb-2 flex flex-wrap gap-2.5 relative z-20">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="text-[12px] font-medium px-3 py-1 border border-[#7042f861] bg-[#030014a1] text-purple-300 rounded-full shadow-[0_0_5px_rgba(112,66,248,0.15)] transition-all duration-300 hover:bg-[#7042f88b] hover:text-white hover:shadow-[0_0_15px_rgba(112,66,248,0.5)] cursor-pointer select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Large Background Watermark Logo Layer */}
          <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden rounded-2xl">
            <AnimatePresence>
              {hoveredTech && techIcons[hoveredTech] && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.75, x: -30, y: 30 }}
                  animate={{ opacity: 0.12, scale: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, scale: 0.75, x: -30, y: 30 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="absolute bottom-[-20px] left-[-20px]"
                >
                  <Image
                    src={techIcons[hoveredTech]}
                    alt=""
                    width={220}
                    height={220}
                    className="object-contain pointer-events-none select-none mix-blend-screen filtering blur-[0.5px]"
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Action Buttons Layer */}
          <div className="relative flex flex-row gap-5 px-6 pb-6 mt-auto z-30 pt-4">
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 text-sm font-medium border border-[#7042f88b] bg-[#0300145e] text-gray-200 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300 select-none shadow-[0_0_10px_rgba(112,66,248,0.2)] cursor-pointer"
            >
              Source Code
            </a>
            <a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center px-4 py-2.5 text-sm font-medium border border-[#22d3ee8b] bg-[#0300145e] text-gray-200 rounded-lg hover:bg-cyan-600 hover:text-white transition-all duration-300 select-none shadow-[0_0_10px_rgba(34,211,238,0.2)] cursor-pointer"
            >
              Live Demo
            </a>
          </div>
        </motion.div>
      )}
    </InView>
  );
};

export default ProjectCard;
