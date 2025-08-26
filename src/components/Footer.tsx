"use client";

import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 xl:ml-64 px-4 py-5 mt-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / Logo */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold text-white">Biraj Lamichhane</h2>
          
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row gap-6">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/projects" className="hover:text-white transition">
            Projects
          </Link>
          <Link href="/about" className="hover:text-white transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4">
          <Link
            href="https://github.com/birajlamichhane75"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/biraj-lamichhane-746754277/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:birajlamichhane57@gmail.com"
            className="hover:text-white transition"
          >
            <Mail size={24} />
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Biraj Lamichhane. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
