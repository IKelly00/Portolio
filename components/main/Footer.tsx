import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const communityLinks = [
    { name: "YouTube", icon: FaYoutube, href: "https://youtube.com" },
    { name: "GitHub", icon: RxGithubLogo, href: "https://github.com" },
    { name: "Discord", icon: RxDiscordLogo, href: "https://discord.com" },
  ];

  const socialLinks = [
    { name: "Instagram", icon: RxInstagramLogo, href: "https://instagram.com" },
    { name: "Twitter", icon: RxTwitterLogo, href: "https://twitter.com" },
    { name: "LinkedIn", icon: RxLinkedinLogo, href: "https://linkedin.com" },
  ];

  return (
    <footer className="w-full relative z-[20] pt-12 pb-8 px-4 md:px-10">
      {/* Background Subtle Blur Container */}
      <div className="max-w-[1200px] mx-auto bg-[#0300145e] backdrop-blur-md border border-[#7042f840] rounded-3xl p-8 md:p-12 shadow-[0_0_25px_rgba(112,66,248,0.15)] flex flex-col gap-10">
        {/* Top Section: Quick Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center md:justify-items-start text-center md:text-left">
          {/* Column 1: Community */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-white font-bold text-lg tracking-wide border-b border-purple-500/30 pb-1 w-fit">
              Community
            </h4>
            <div className="flex flex-col gap-2 mt-1">
              {communityLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium py-1 px-3 rounded-full hover:bg-purple-900/20 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transform hover:-translate-y-0.5"
                >
                  <item.icon className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Social Media */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-white font-bold text-lg tracking-wide border-b border-purple-500/30 pb-1 w-fit">
              Social Media
            </h4>
            <div className="flex flex-col gap-2 mt-1">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-gray-300 hover:text-cyan-400 transition-all duration-300 text-sm font-medium py-1 px-3 rounded-full hover:bg-purple-900/20 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] transform hover:-translate-y-0.5"
                >
                  <item.icon className="w-4 h-4 text-purple-400 group-hover:text-cyan-400 transition-colors" />
                  <span>{item.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Contact & Info */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-white font-bold text-lg tracking-wide border-b border-purple-500/30 pb-1 w-fit">
              About
            </h4>
            <div className="flex flex-col gap-2 mt-1 text-sm text-gray-300">
              <a
                href="#about"
                className="hover:text-cyan-400 transition-colors py-1 px-3 rounded-full hover:bg-purple-900/20 w-fit"
              >
                Learning about me
              </a>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-colors py-1 px-3 rounded-full hover:bg-purple-900/20 w-fit"
              >
                Become Sponsor
              </a>
              <a
                href="mailto:mifwebchain@gmail.com"
                className="group flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors py-1 px-3 rounded-full bg-cyan-500/10 border border-cyan-500/30 shadow-[0_0_10px_rgba(6,182,212,0.15)] mt-1"
              >
                <HiOutlineMail className="w-4 h-4" />
                <span className="font-mono text-xs">mifwebchain@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#7042f880] to-transparent" />

        {/* Bottom Section: Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-light">
          <div>
            &copy; {currentYear}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-semibold">
              WebChain Dev Inc.
            </span>{" "}
            All rights reserved.
          </div>
          <div className="flex gap-6 text-gray-400">
            <a href="#home" className="hover:text-white transition-colors">
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
