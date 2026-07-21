"use client";

import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact(): React.ReactElement {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.15 });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
    const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
    const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY,
      );

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setErrorMessage(
        "Failed to send message. Please try again or email directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 px-4 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Background ambient neon glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-72 h-72 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Heading Section - Slides from Top */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideInFromTop}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          Contact{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Me
          </span>
        </h2>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/40 border border-purple-500/30 text-purple-300 text-xs font-medium backdrop-blur-md mb-4 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
          <span className="text-cyan-400">✦</span> Let&apos;s Build Something
          Great Together
        </div>

        <p className="text-slate-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
          Have a project in mind, a question, or want to discuss fullstack
          opportunities? Drop me a message below.
        </p>
      </motion.div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative z-10">
        {/* Contact Info Card - Slides in from Left */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideInFromLeft(0.3)}
          className="lg:col-span-5 p-8 rounded-2xl bg-[#0d0722]/60 border border-purple-500/20 backdrop-blur-xl flex flex-col justify-between shadow-[0_0_30px_rgba(120,50,255,0.08)] hover:border-purple-500/40 transition-all duration-300 group"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">
              Let&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Connect
              </span>
            </h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              I&apos;m always open to discussing new projects, web development
              initiatives, or creative ideas.
            </p>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-purple-300/70 font-medium">
                    Email Me
                  </p>
                  <p className="text-sm font-semibold text-slate-200 hover:text-cyan-400 transition-colors">
                    jardinelmichaelroy27@gmail.com
                  </p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-purple-900/30 border border-purple-500/30 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-purple-300/70 font-medium">
                    Location
                  </p>
                  <p className="text-sm font-semibold text-slate-200">
                    Naga City, Camarines Sur
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-10 pt-6 border-t border-purple-900/40">
            <p className="text-xs text-slate-400 mb-4 font-medium tracking-wide">
              SOCIAL PROFILES
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com/ikelly00"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-slate-300 text-xs font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                ✦ GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/michael-roy-jardinel-ba978b325/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-500/20 text-slate-300 text-xs font-medium hover:border-cyan-400/50 hover:text-cyan-400 transition-all hover:shadow-[0_0_15px_rgba(6,182,212,0.2)]"
              >
                ✦ LinkedIn
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form - Slides in from Right */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideInFromRight(0.5)}
          className="lg:col-span-7 p-8 rounded-2xl bg-[#0d0722]/60 border border-purple-500/20 backdrop-blur-xl shadow-[0_0_30px_rgba(120,50,255,0.08)] hover:border-purple-500/40 transition-all duration-300"
        >
          {submitted ? (
            <div className="text-center py-16 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 text-2xl mb-4 shadow-[0_0_25px_rgba(6,182,212,0.3)]">
                ✓
              </div>
              <h4 className="text-2xl font-bold text-white mb-2">
                Message Sent Successfully!
              </h4>
              <p className="text-slate-400 text-sm max-w-sm mb-6">
                Thanks for reaching out! Your message was delivered and
                I&apos;ll get back to you soon.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-200 text-sm font-medium hover:border-cyan-400 hover:text-cyan-300 transition-all shadow-[0_0_15px_rgba(168,85,247,0.2)]"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs">
                  {errorMessage}
                </div>
              )}

              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-purple-300/80 mb-2"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070314]/70 border border-purple-900/50 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-sm shadow-inner"
                  placeholder="e.g. John Kenneth"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-purple-300/80 mb-2"
                >
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070314]/70 border border-purple-900/50 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-sm shadow-inner"
                  placeholder="e.g. john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-purple-300/80 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#070314]/70 border border-purple-900/50 text-white placeholder-slate-600 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 text-sm shadow-inner resize-none"
                  placeholder="Write your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm tracking-wide shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:shadow-[0_0_30px_rgba(6,182,212,0.55)] transition-all duration-300 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
