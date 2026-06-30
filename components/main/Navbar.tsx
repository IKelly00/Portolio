"use client";
import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About me" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
  ];

  useEffect(() => {
    const handleHashChange = () => {
      const currentHash = window.location.hash.replace("#", "");
      if (currentHash) {
        setActiveSection(currentHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="w-screen md:w-full h-[70px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10 m-0 max-w-[1855px] items-center rounded-full">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[0px] md:px-[10px]">
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
            Jkelly Dev
          </span>
        </a>

        <div className="hidden w-3/6 lg:w-1/3 h-full md:flex flex-row items-center justify-between md:mx-auto lg:pr-12">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] p-[30px] py-[10px] rounded-full">
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

                  {isActive && (
                    <span className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_#22d3ee]" />
                  )}
                </a>
              );
            })}
          </div>
        </div>

        <div className="flex flex-row gap-5 text-white">
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
                width={24}
                height={24}
                className="cursor-pointer hover:animate-spin"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
