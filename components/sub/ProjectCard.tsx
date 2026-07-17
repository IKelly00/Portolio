"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { slideInFromBottom } from "@/utils/motion";
import { InView } from "react-intersection-observer";

interface Props {
  src: string;
  gallery?: string[]; // Added optional gallery array
  title: string;
  description: string;
  sourceLink: string;
  demoLink: string;
  technologies: string[];
}

const techIcons: Record<string, string> = {
  "React.js": "/react.png",
  React: "/react.png",
  "Next.js": "/next.png",
  "Tailwind CSS": "/tailwind.png",
  "Framer Motion": "/framer.png",
  Vite: "/vite.svg",
  JavaScript: "/js.png",
  "Three.js": "/threejs.png",
  "CSS Module": "/css.png",
  CSS: "/css.png",
  "CSS Variables": "/css.png",
  "Node.js": "/nodejs.svg",
  PHP: "/php.png",
  Bootstrap: "/Bootstrap.svg",
  "Vue.js": "/Vue.svg",
  Laravel: "/Laravel.svg",
  "Express.js": "/express.svg",
};

const ProjectCard = ({
  src,
  gallery,
  title,
  description,
  sourceLink,
  demoLink,
  technologies,
}: Props) => {
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeImage, setActiveImage] = useState<string>(src);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = gallery && gallery.length > 0 ? gallery : [src];

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleOpenModal = () => {
    setActiveImage(images[0]);
    setIsZoomed(false);
    setIsModalOpen(true);
  };

  const handleCloseModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(false);
    setIsZoomed(false);
  };

  return (
    <>
      <InView triggerOnce={false}>
        {({ inView, ref }) => (
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={slideInFromBottom}
            onClick={handleOpenModal} // Clicking the card opens modal
            className="relative overflow-hidden rounded-xl shadow-lg border border-[#2A0E61]/50 bg-[#0300145e] backdrop-blur-md flex flex-col md:flex-row w-full group transition-all duration-500 hover:border-[#7042f88b] hover:shadow-[0_0_30px_rgba(112,66,248,0.2)] hover:-translate-y-1 cursor-pointer"
          >
            {/* LEFT SIDE: Image Component Wrapper */}
            <div className="relative w-full md:w-[40%] aspect-video md:aspect-auto shrink-0 overflow-hidden bg-[#0000005e]">
              <Image
                src={src}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#030014]/80 via-transparent to-transparent md:from-transparent md:via-transparent md:to-[#030014]/90 opacity-80 pointer-events-none" />

              {/* Overlay prompt to hint that it's clickable */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 z-20">
                <span className="px-4 py-2 bg-[#050312]/80 border border-purple-500/50 rounded-full text-white text-xs font-medium backdrop-blur-sm shadow-[0_0_15px_rgba(112,66,248,0.4)]">
                  Click to view gallery
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: Information Block */}
            <div className="relative p-5 md:p-6 flex flex-col flex-grow z-10 justify-between w-full md:w-[60%]">
              <div>
                <h1 className="text-xl font-bold text-white line-clamp-2 transition-all duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-blue-400 group-hover:to-cyan-400">
                  {title}
                </h1>
                <p className="mt-2 text-gray-400 text-sm leading-relaxed line-clamp-3">
                  {description}
                </p>
              </div>

              <div className="mt-4 flex flex-wrap gap-2 relative z-20">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    onMouseEnter={() => setHoveredTech(tech)}
                    onMouseLeave={() => setHoveredTech(null)}
                    className="text-[11px] font-medium tracking-wider px-2.5 py-1 border border-[#7042f840] bg-[#03001480] text-purple-200 rounded-md transition-all duration-300 hover:bg-[#7042f88b] hover:text-white hover:border-purple-400 cursor-default select-none"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Direct action button targets */}
              <div className="relative flex flex-row gap-3 mt-6 z-30 pt-2 border-t border-[#2A0E61]/50">
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // PREVENTS MODAL FROM OPENING WHEN CLICKING LINK
                  className="flex-1 text-center px-3 py-2 text-xs font-semibold tracking-wide border border-[#7042f88b] bg-transparent text-gray-300 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-indigo-600 hover:border-transparent hover:text-white hover:shadow-[0_0_15px_rgba(112,66,248,0.4)]"
                >
                  Source Code
                </a>
                <a
                  href={demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()} // PREVENTS MODAL FROM OPENING WHEN CLICKING LINK
                  className="flex-1 text-center px-3 py-2 text-xs font-semibold tracking-wide border border-[#22d3ee8b] bg-transparent text-gray-300 rounded transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:border-transparent hover:text-white hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden rounded-xl">
              <AnimatePresence>
                {hoveredTech && techIcons[hoveredTech] && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                    animate={{ opacity: 0.06, scale: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute bottom-[-10%] right-[-5%]"
                  >
                    <Image
                      src={techIcons[hoveredTech]}
                      alt=""
                      width={180}
                      height={180}
                      className="object-contain mix-blend-plus-lighter blur-[1px]"
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </InView>

      {/* --- MODAL OVERLAY PORTION --- */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
            // MODIFIED: Adjusted top padding (pt-24 sm:pt-28) to explicitly push the inner modal well below your fixed navbar layout
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030014]/95 backdrop-blur-lg p-4 pt-24 sm:pt-28 md:p-10"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              // RESPONSIVE UPGRADE: Added step-up scaling heights (h-[50vh] -> sm:h-[60vh] -> md:h-[70vh])
              // This guarantees it fits shorter mobile frames cleanly and uses max-w-4xl for wider desktops.
              className="relative w-full max-w-4xl h-[50vh] sm:h-[60vh] md:h-[70vh] bg-[#050312] border border-[#7042f88b] rounded-2xl flex flex-col shadow-[0_0_50px_rgba(112,66,248,0.3)] overflow-hidden"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-center px-4 py-2.5 sm:px-6 sm:py-3 border-b border-[#2A0E61]/50 bg-[#07041a] shrink-0">
                <h2 className="text-white font-bold text-xs sm:text-sm md:text-base truncate pr-4">
                  {title}{" "}
                  <span className="text-gray-400 font-normal text-xs ml-2 hidden sm:inline-block">
                    - Gallery
                  </span>
                </h2>
                <button
                  onClick={handleCloseModal}
                  className="p-1.5 bg-[#03001480] hover:bg-red-500/20 text-gray-400 hover:text-red-400 border border-transparent hover:border-red-500/50 rounded-full transition-all duration-300 shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    className="sm:w-4 sm:h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>

              {/* Main Image Viewing Area */}
              <div
                onClick={() => setIsZoomed(!isZoomed)}
                className={`relative flex-1 w-full bg-black/60 overflow-hidden flex items-center justify-center transition-all ${
                  isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
              >
                {!isZoomed && (
                  <div className="absolute top-2.5 right-2.5 z-10 px-2 py-0.5 sm:py-1 bg-black/50 text-gray-300 text-[10px] sm:text-[11px] rounded border border-gray-600/50 pointer-events-none backdrop-blur-sm">
                    Click to zoom
                  </div>
                )}

                <div
                  className={`relative w-full h-full transition-transform duration-500 ease-in-out ${isZoomed ? "scale-[1.4] sm:scale-[1.8] md:scale-[2]" : "scale-100"}`}
                >
                  <Image
                    src={activeImage}
                    alt="Active Project View"
                    fill
                    priority
                    className="object-contain p-2 sm:p-4" // Added padding to keep image bounding boxes clean inside mobile frames
                  />
                </div>
              </div>

              {/* Thumbnails Row (Bottom) */}
              <div className="flex items-center gap-2 p-2 sm:gap-2.5 sm:p-3 bg-[#07041a] border-t border-[#2A0E61]/50 overflow-x-auto shrink-0 scrollbar-none">
                {images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveImage(img);
                      setIsZoomed(false);
                    }}
                    className={`relative w-[45px] h-[45px] sm:w-[60px] sm:h-[60px] md:w-[75px] md:h-[75px] shrink-0 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                      activeImage === img
                        ? "border-2 border-cyan-400 scale-105 shadow-[0_0_12px_rgba(34,211,238,0.4)] opacity-100"
                        : "border-2 border-transparent opacity-50 hover:opacity-100 hover:border-purple-500/50"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      sizes="(max-width: 640px) 45px, 75px"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProjectCard;
