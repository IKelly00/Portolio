"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
  slideInFromBottom,
} from "@/utils/motion";

interface ProjectItem {
  src: string;
  gallery: string[];
  title: string;
  description: string;
  sourceLink: string;
  demoLink: string;
  technologies: string[];
}

const PROJECTS: ProjectItem[] = [
  {
    src: "/NPSElection.png",
    gallery: [
      "/NPSLandingPage.png",
      "/NPSElectionResult.png",
      "/NPSDashboard.png",
      "/NPSBallot.png",
    ],
    title: "Naga Parochial School Election System",
    description:
      "Modern web application built to streamline and digitize student commission campaigns and elections at Naga Parochial School.",
    sourceLink: "https://github.com/IKelly00/Naga-Parochial-Voting-System",
    demoLink: "https://ikelly00.github.io/Naga-Parochial-Voting-System/",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "Vite",
      "CSS Module",
      "Framer Motion",
    ],
  },
  {
    src: "/Dishora.png",
    gallery: ["/Dishora.png"],
    title: "Dishora Food Ordering System for local SMEs",
    description:
      "Dishora is a specialized multi-vendor food ordering system built specifically to digitalize and support the vibrant local culinary scene in Naga City.",
    sourceLink: "https://github.com/IKelly00/Dishora",
    demoLink: "https://dishora.shop/",
    technologies: [
      "JavaScript",
      "Vue.js",
      "Bootstrap",
      "Vite",
      "PHP",
      "Laravel",
    ],
  },
  {
    src: "/smartstock.png",
    gallery: [
      "/smartstock.png",
      "/SSDashboard.png",
      "/SSInventory.png",
      "/SSSales.png",
      "/SSFinance.png",
    ],
    title: "SmartStock Inventory Management System",
    description:
      "SmartStock is an inventory management system that simplifies stock tracking and record-keeping for small to medium businesses.",
    sourceLink: "https://github.com/IKelly00/SmartStock",
    demoLink: "https://ikelly00.github.io/SmartStock/",
    technologies: ["JavaScript", "CSS", "Node.js", "Express.js"],
  },
  {
    src: "/OneLandingPage.png",
    gallery: [
      "/OneAdmin.png",
      "/OneAdminCert.png",
      "/OneSecretary.png",
      "/OneAccounting.png",
      "/OneTreasurer.png",
      "/OneCaptain.png",
    ],
    title: "Barangay E-Service Management Information System",
    description:
      "A barangay e-service management system for handling resident records, certificates, payments, and complaints.",
    sourceLink: "https://github.com/IKelly00/OneCaroyroyan",
    demoLink: "https://ikelly00.github.io/OneCaroyroyan/",
    technologies: ["JavaScript", "React.js", "CSS"],
  },
  {
    src: "/GeminiLight.png",
    gallery: ["/GeminiDark.png"],
    title: "Gemini Clone",
    description:
      "A full-featured Gemini AI chat clone built with React — real-time streaming responses, persistent chat history, multi-modal file uploads.",
    sourceLink: "https://github.com/IKelly00/GeminiClone",
    demoLink: "https://ikelly00.github.io/GeminiClone/",
    technologies: [
      "JavaScript",
      "Tailwind CSS",
      "React.js",
      "Google AI Studio",
      "Gemini API",
    ],
  },
];

const Projects = () => {
  return (
    <div
      className="relative z-[20] flex flex-col items-center justify-center py-16 overflow-hidden"
      id="projects"
    >
      {/* Background ambient glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none z-[-1]" />

      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={slideInFromTop}
        className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-[4rem] text-center relative z-20"
      >
        What I
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          {" "}
          Do
        </span>
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-4 md:px-8 w-full max-w-[1400px] mx-auto">
        {PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          // Motion variant selection (Left for even, Right for odd)
          const selectedVariant = isEven
            ? slideInFromLeft(0.2)
            : slideInFromRight(0.2);

          return (
            <motion.div
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={selectedVariant}
              className="w-full"
            >
              <ProjectCard
                src={project.src}
                gallery={project.gallery}
                title={project.title}
                description={project.description}
                sourceLink={project.sourceLink}
                demoLink={project.demoLink}
                technologies={project.technologies}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
