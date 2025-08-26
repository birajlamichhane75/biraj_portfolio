"use client";

import React from "react";
import { CheckCircle } from "lucide-react"; // Verification badge icon
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
      <div>
        {/* Name with verification badge */}
        <h1 className="text-4xl font-bold mb-2 flex items-center gap-2">
          Biraj Lamichhane
          <CheckCircle className="text-blue-500" size={28} />
        </h1>

        {/* Role and membership */}
        <p className="text-gray-400 text-lg">
          CS Student @ Huston-Tillotson University | Full Stack Developer (MERN Stack)
        </p>
        <p className="text-gray-400 text-lg mt-1">
          Member of NSBE & Apple Coding Club
        </p>
      </div>

      {/* Call-to-action */}
      <Link
        href="https://www.linkedin.com/in/biraj-lamichhane-746754277/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-semibold mt-4 md:mt-0 hover:underline"
      >
        LinkedIn
      </Link>
    </div>
  );
};

export default HeroSection;
