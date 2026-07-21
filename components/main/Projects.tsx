"use client";

import { motion } from "framer-motion";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { slideInFromTop } from "@/utils/motion";
import { InView } from "react-intersection-observer";

const Projects = () => {
  return (
    <div
      className="relative z-[20] flex flex-col items-center justify-center py-16"
      id="projects"
    >
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none z-[-1]" />

      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.h1
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="text-[36px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10 drop-shadow-lg"
          >
            My Projects
          </motion.h1>
        )}
      </InView>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 px-4 md:px-8 w-full max-w-[1400px] mx-auto">
        <ProjectCard
          src="/NPSElection.png"
          gallery={[
            "/NPSLandingPage.png",
            "/NPSElectionResult.png",
            "/NPSDashboard.png",
            "/NPSBallot.png",
          ]}
          title="Naga Parochial School Election System"
          description="Modern web application built to streamline and digitize student commission campaigns and elections at Naga Parochial School."
          sourceLink="https://github.com/IKelly00/Naga-Parochial-Voting-System"
          demoLink="https://ikelly00.github.io/Naga-Parochial-Voting-System/"
          technologies={[
            "React.js",
            "Node.js",
            "Express.js",
            "Vite",
            "CSS Module",
            "Framer Motion",
          ]}
        />
        <ProjectCard
          src="/Dishora.png"
          gallery={["/Dishora.png", "/Dishora.png"]}
          title="Dishora Food Ordering System for local SMEs"
          description="Dishora is a specialized multi-vendor food ordering system built specifically to digitalize and support the vibrant local culinary scene in Naga City."
          sourceLink="https://github.com/IKelly00/Dishora"
          demoLink="https://dishora.shop/"
          technologies={[
            "JavaScript",
            "Vue.js",
            "Bootstrap",
            "Vite",
            "PHP",
            "Laravel",
          ]}
        />
        <ProjectCard
          src="/smartstock.png"
          gallery={[
            "/smartstock.png",
            "/SSDashboard.png",
            "/SSInventory.png",
            "/SSSales.png",
            "/SSFinance.png",
          ]}
          title="SmartStock Inventory Management System"
          description="SmartStock is an inventory management system that simplifies stock tracking and record-keeping for small to medium businesses."
          sourceLink="https://github.com/IKelly00/SmartStock"
          demoLink="https://ikelly00.github.io/SmartStock/"
          technologies={["JavaScript", "CSS", "Node.js", "Express.js"]}
        />
        <ProjectCard
          src="/OneLandingPage.png"
          gallery={[
            "/OneAdmin.png",
            "/OneAdminCert.png",
            "/OneSecretary.png",
            "/OneAccounting.png",
            "/OneTreasurer.png",
            "/OneCaptain.png",
          ]}
          title="Barangay E-Service Management  Information System"
          description="A barangay e-service management system for handling resident records, certificates, payments, and complaints."
          sourceLink="https://github.com/IKelly00/OneCaroyroyan"
          demoLink="https://ikelly00.github.io/OneCaroyroyan/"
          technologies={["JavaScript", "React.js", "CSS"]}
        />
      </div>
    </div>
  );
};

export default Projects;
