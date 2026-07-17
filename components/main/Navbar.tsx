"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
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

  return (
    <div className="w-screen md:w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-[9999] px-4 md:px-10 m-0 max-w-[1855px] items-center md:rounded-full">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Left Section: Branding Logo */}
        <div className="flex-1 flex justify-start">
          <a
            href="#home"
            onClick={() => setActiveSection("home")}
            className="h-auto w-auto flex flex-row items-center"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={50}
              height={50}
              className="cursor-pointer hover:animate-spin w-10"
            />
            <span className="font-bold ml-[10px] block text-gray-300 z-50 md:text-lg text-xl">
              MRJ.
            </span>
          </a>
        </div>

        {/* Middle Section: Main Navigation Links (Desktop Only) */}
        <div className="hidden md:flex flex-none items-center justify-center">
          <div className="flex items-center gap-14 h-auto border border-[#7042f861] bg-[#0300145e] px-[30px] py-[10px] rounded-full">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative cursor-pointer transition-all duration-300 select-none text-sm font-medium ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold drop-shadow-[0_0_6px_rgba(168,85,247,0.4)]"
                      : "text-gray-200 hover:text-purple-400"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Section: Contains Download CV Button, Social Icons, and Mobile Burger */}
        <div className="flex-1 flex flex-row items-center justify-end gap-3 md:gap-5 text-white">
          {/* Download CV Button */}
          <a
            href="/resume.pdf"
            download="Michael_Roy_Jardinel_Resume.pdf"
            className="px-3 py-1.5 text-xs font-medium border border-[#7042f88b] bg-[#0300145e] text-gray-200 rounded-full hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500 hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(112,66,248,0.3)] select-none text-center whitespace-nowrap"
          >
            Download CV
          </a>

          {/* Social Icons (Desktop Only) */}
          <div className="hidden md:flex items-center gap-5">
            {navItems &&
              Socials.map((social) => (
                <a
                  href={social.link}
                  key={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image
                    src={social.src}
                    alt={social.name}
                    width={24}
                    height={24}
                    className="cursor-pointer hover:scale-110 transition-transform duration-200"
                  />
                </a>
              ))}
          </div>

          {/* Mobile Menu Toggle Button (Burger Icon) */}
          <button
            className="md:hidden text-gray-300 hover:text-purple-400 focus:outline-none ml-2 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              // Close (X) Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // Hamburger Icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
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
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[70px] left-0 w-full bg-[#030014f2] backdrop-blur-xl border-t border-[#2A0E61]/50 shadow-xl shadow-[#2A0E61]/20 py-6 px-6 flex flex-col gap-6 z-[9999] rounded-b-3xl transition-all duration-300">
          {/* Mobile Nav Links */}
          <div className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => {
                    setActiveSection(item.id);
                    setIsMobileMenuOpen(false); // Close menu on click
                  }}
                  className={`text-lg font-medium transition-all duration-300 select-none ${
                    isActive
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-bold"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Social Icons */}
          <div className="flex items-center gap-6 pt-6 border-t border-[#2A0E61]/50 mt-2">
            {Socials.map((social) => (
              <a
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
                  className="cursor-pointer hover:scale-110 transition-transform duration-200"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
