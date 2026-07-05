"use client";

import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const Projects = () => {
  return (
    <div
      className="relative z-[20] flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20"
          >
            My Projects
          </motion.h1>
        )}
      </InView>

      {/* CHANGED: Swapped max-w-7xl for an expansive max-w-[1600px] (or use max-w-[90vw]) */}
      {/* Reduced desktop gap slightly to 8 to give the card bodies even more horizontal room */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-14 w-full max-w-[1600px] mx-auto">
        <ProjectCard
          src="/NPSElection.png"
          title="Naga Parochial School Election System"
          description="Modern web application built to streamline and digitize student commission campaigns and elections at Naga Parochial School."
          sourceLink="https://github.com/IKelly00/Naga-Parochial-Voting-System"
          demoLink="https://ikelly00.github.io/Naga-Parochial-Voting-System/"
          technologies={[
            "React JS",
            "Node JS",
            "Vite",
            "CSS Module",
            "Framer Motion",
          ]}
        />
        <ProjectCard
          src="/Dishora.png"
          title="Dishora Food Ordering System"
          description="Dishora is a specialized multi-vendor food ordering system built specifically to digitalize and support the vibrant local culinary scene in Naga City, Camarines Sur."
          sourceLink="https://github.com/IKelly00/Dishora"
          demoLink="https://dishora.shop/"
          technologies={[
            "JavaScript",
            "Vue JS",
            "Bootstrap",
            "Vite",
            "PHP",
            "Laravel",
          ]}
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="STI Schedule Management System"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          sourceLink="https://github.com/Jkelly00/space-website"
          demoLink="https://jkelly00.github.io/space-website"
          technologies={[
            "Next.js",
            "Three.js",
            "Tailwind CSS",
            "CSS Variables",
          ]}
        />
      </div>
    </div>
  );
};

export default Projects;
