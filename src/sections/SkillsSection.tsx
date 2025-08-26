"use client";

import React from "react";
import { Code, Server, Bug, Settings } from "lucide-react";

const SkillsSection = () => {
  return (
    <div className="bg-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg shadow-black hover:shadow-xl transition h-[28rem] sm:h-[30rem] flex flex-col">
      {/* Title */}
      <h2 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6 flex items-center gap-2">
        <Code className="w-5 h-5 text-blue-500" />
        Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm flex-1 overflow-y-auto">
        {/* Frontend */}
        <div className="bg-gray-900 rounded-xl p-3 sm:p-4 shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
            <Code className="w-4 h-4 text-green-400" /> Frontend
          </h3>
          <ul className="space-y-1 text-gray-300 list-disc pl-5 marker:text-green-400">
            <li>React.js / Next.js</li>
            <li>HTML / CSS / JS</li>
            <li>Tailwind / Bootstrap</li>
            <li>GSAP Animations</li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-gray-900 rounded-xl p-3 sm:p-4 shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
            <Server className="w-4 h-4 text-yellow-400" /> Backend
          </h3>
          <ul className="space-y-1 text-gray-300 list-disc pl-5 marker:text-yellow-400">
            <li>Node.js / Express</li>
            <li>Python</li>
            <li>MongoDB</li>
            <li>Solidity (Smart Contracts)</li>
            <li>REST APIs</li>
          </ul>
        </div>

        {/* Testing */}
        <div className="bg-gray-900 rounded-xl p-3 sm:p-4 shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
            <Bug className="w-4 h-4 text-red-400" /> Testing
          </h3>
          <ul className="space-y-1 text-gray-300 list-disc pl-5 marker:text-red-400">
            <li>Jest</li>
            <li>Postman</li>
            <li>Hardhat</li>
          </ul>
        </div>

        {/* Tools & Concepts */}
        <div className="bg-gray-900 rounded-xl p-3 sm:p-4 shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2 text-sm sm:text-base">
            <Settings className="w-4 h-4 text-purple-400" /> Tools & Concepts
          </h3>
          <ul className="space-y-1 text-gray-300 list-disc pl-5 marker:text-purple-400">
            <li>Git & GitHub</li>
            <li>Redux Toolkit</li>
            <li>Data Structures & Algorithms</li>
            <li>Agile Workflow</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
