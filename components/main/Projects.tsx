"use client";

import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "../sub/ProjectCard";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

interface ProjectItem {
  src: string;
  gallery: string[];
  title: string;
  description: string;
  problemSolved: string;
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
    problemSolved:
      "Replaced manual, time-consuming paper voting with a secure digital platform, ensuring faster tabulation and preventing ballot tampering.",
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
    problemSolved:
      "Bridged the gap between customers and multiple local vendors by unifying scattered, individual ordering methods into one seamless platform.",
    sourceLink: "https://github.com/IKelly00/Dishora",
    demoLink: "https://dishora.shop/",
    technologies: ["JavaScript", "Bootstrap", "Vite", "PHP", "Laravel"],
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
    problemSolved:
      "Eliminated messy manual record-keeping by providing a centralized dashboard for SMEs to accurately track inventory and sales in real-time.",
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
    problemSolved:
      "Digitized inefficient paper-bound local governance, creating a streamlined portal for fast certificate issuance and organized complaint tracking.",
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
    problemSolved:
      "Demonstrated the practical implementation of complex AI API integrations, handling real-time streaming and multimodal data within a React environment.",
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

      {/* --- NEW EXPANDED SKILL-TEXT STYLE HEADER --- */}
      <div className="w-full flex flex-col items-center justify-center mt-20 mb-[4rem] z-20 px-4">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex items-center justify-center py-2 px-4 border border-[#7042f88b] bg-[#0300145e] backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(112,66,248,0.2)] mb-6 cursor-default select-none transition-all hover:border-cyan-400/50"
        >
          {/* Sparkle Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-4 h-4 text-[#b49bff] mr-2 animate-pulse"
          >
            <path
              fillRule="evenodd"
              d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A11.89 11.89 0 0112 15.75a11.893 11.893 0 01-4.416-1.064c-3.701-2.88-6.084-7.38-6.084-12.436a.75.75 0 01.75-.75c5.056 0 9.555 2.383 12.436 6.084z"
              clipRule="evenodd"
            />
            <path d="M3 15a6 6 0 1012 0 6 6 0 00-12 0z" />
          </svg>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-cyan-300 text-[13px] font-semibold tracking-wide uppercase">
            Featured Work
          </span>
        </motion.div>

        <motion.h1
          variants={slideInFromLeft(0.3)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white text-center mb-4"
        >
          What I
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            Do
          </span>
        </motion.h1>

        <motion.p
          variants={slideInFromRight(0.4)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="text-gray-400 text-sm sm:text-base font-medium text-center max-w-xl leading-relaxed"
        >
          Explore my latest systems, applications, and digital solutions
          engineered to solve complex, real-world problems.
        </motion.p>
      </div>
      {/* ------------------------------------------- */}

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
              className="w-full h-full"
            >
              <ProjectCard
                src={project.src}
                gallery={project.gallery}
                title={project.title}
                description={project.description}
                problemSolved={project.problemSolved}
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
