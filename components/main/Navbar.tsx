"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // InView Ref for repeating scroll animations
  const navRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(navRef, { once: false, amount: 0.1 });

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-30% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Handlers for CV actions
  const handleViewCV = () => {
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
    setIsModalOpen(false);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsModalOpen(false);
  };

  return (
    <>
      <header
        ref={navRef}
        className="w-screen md:w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[999] px-4 md:px-10 m-0 max-w-[1855px] items-center md:rounded-full"
      >
        <div className="w-full h-full flex flex-row items-center justify-between m-auto">
          {/* Left Section: Branding Logo - Slides from Left */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInFromLeft(0.5)}
            className="flex-1 flex justify-start"
          >
            <a
              href="#home"
              onClick={() => setActiveSection("home")}
              className="h-auto w-auto flex flex-row items-center group"
            >
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <Image
                  src="/logo.png"
                  alt="logo"
                  width={50}
                  height={50}
                  className="cursor-pointer w-10"
                />
              </motion.div>
              <span className="font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-xl group-hover:text-cyan-400 transition-colors">
                MRJ.
              </span>
            </a>
          </motion.div>

          {/* Middle Section: Navigation Links Capsule - Slides from Top */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInFromTop}
            className="hidden md:flex flex-none items-center justify-center"
          >
            <div className="flex items-center gap-8 h-auto border border-[#7042f861] bg-[#0300145e] px-[20px] py-[6px] rounded-full shadow-[0_0_15px_rgba(112,66,248,0.2)]">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative px-3 py-1 cursor-pointer transition-all duration-300 select-none text-sm font-medium ${
                      isActive
                        ? "text-white font-semibold"
                        : "text-gray-300 hover:text-purple-400"
                    }`}
                  >
                    {/* Sliding Active Pill Background */}
                    {isActive && (
                      <motion.div
                        layoutId="activeSectionGlow"
                        className="absolute inset-0 bg-gradient-to-r from-purple-600/40 to-cyan-500/40 rounded-full border border-cyan-400/30 shadow-[0_0_12px_rgba(6,182,212,0.4)] z-[-1]"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>

          {/* Right Section: Buttons & Socials - Slides from Right */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={slideInFromRight(0.5)}
            className="flex-1 flex flex-row items-center justify-end gap-3 md:gap-4 text-white"
          >
            {/* Download CV Modal Trigger */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsModalOpen(true)}
              className="px-3.5 py-1.5 text-xs font-medium border border-[#7042f88b] bg-[#0300145e] text-gray-200 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(112,66,248,0.3)] select-none text-center whitespace-nowrap cursor-pointer"
            >
              Download CV
            </motion.button>

            {/* Social Icons (Desktop Only) */}
            <div className="hidden md:flex items-center gap-4">
              {Socials.map((social) => (
                <motion.a
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  href={social.link}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-1"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={22}
                    height={22}
                    className="cursor-pointer"
                  />
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Toggle Button (Burger Icon) */}
            <button
              className="md:hidden text-gray-300 hover:text-purple-400 focus:outline-none ml-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </motion.div>
        </div>

        {/* Mobile Menu Dropdown Panel */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="md:hidden absolute top-[70px] left-0 w-full bg-[#030014f2] backdrop-blur-xl border-t border-[#2A0E61]/50 shadow-xl shadow-[#2A0E61]/20 py-6 px-6 flex flex-col gap-6 z-[999] rounded-b-3xl"
            >
              {/* Mobile Nav Links */}
              <div className="flex flex-col gap-4">
                {navItems.map((item, index) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => {
                        setActiveSection(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`text-lg font-medium transition-all duration-300 select-none ${
                        isActive
                          ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold"
                          : "text-gray-300 hover:text-purple-400"
                      }`}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>

              {/* Mobile Social Icons */}
              <div className="flex items-center gap-6 pt-6 border-t border-[#2A0E61]/50 mt-2">
                {Socials.map((social) => (
                  <motion.a
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.9 }}
                    href={social.link}
                    key={social.name}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={social.src}
                      alt={social.name}
                      width={28}
                      height={28}
                      className="cursor-pointer"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* CV Choice Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-md bg-[#030014e6] border border-[#7042f88b] p-6 rounded-2xl shadow-[0_0_30px_rgba(112,66,248,0.4)] backdrop-blur-xl z-10 flex flex-col items-center text-center"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                Download or View CV
              </h3>
              <p className="text-sm text-gray-300 mb-6">
                Do you want to download the file directly or view it in your
                browser?
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleViewCV}
                  className="flex-1 px-4 py-2.5 text-sm font-medium border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 rounded-xl hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.2)]"
                >
                  View Document
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleDownloadCV}
                  className="flex-1 px-4 py-2.5 text-sm font-medium bg-gradient-to-r from-purple-600 to-cyan-500 text-white rounded-xl shadow-[0_0_15px_rgba(112,66,248,0.4)] hover:brightness-110 transition-all duration-300"
                >
                  Download File
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
