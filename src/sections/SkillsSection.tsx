"use client";

import React from "react";
import { Code, Server, Bug, Settings } from "lucide-react"; // icons

const SkillsSection = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg shadow-black hover:shadow-xl transition h-[30rem]">
      <h2 className="text-lg font-semibold mb-6 flex items-center gap-2">
        <Code className="w-5 h-5 text-blue-500" />
        Skills
      </h2>

      <div className="grid grid-cols-2 gap-4 text-sm">
        {/* Frontend */}
        <div className="bg-gray-900 rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Code className="w-4 h-4 text-green-400" /> Frontend
          </h3>
          <ul className="space-y-1 text-gray-300 list-disc pl-5 marker:text-green-400">
            <li><b>React.js / Next.js</b></li>
            <li><b>HTML / CSS / JS</b></li>
            <li><b>Tailwind / Bootstrap</b></li>
            <li><b>GSAP Animations</b></li>
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-gray-900 rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Server className="w-4 h-4 text-yellow-400" /> Backend
          </h3>
          <ul className="space-y-1 text-gray-300 list-disc pl-5 marker:text-yellow-400">
            <li><b>Node.js / Express</b></li>
            <li><b>MongoDB</b></li>
            <li><b>Solidity (Smart Contracts)</b></li>
            <li><b>REST APIs</b></li>
          </ul>
        </div>

        {/* Testing */}
        <div className="bg-gray-900 rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Bug className="w-4 h-4 text-red-400" /> Testing
          </h3>
          <ul className="space-y-1 text-gray-300 list-disc pl-5 marker:text-red-400">
            <li><b>Jest</b></li>
            <li><b>Postman</b></li>
            <li><b>Hardhat (Blockchain Testing)</b></li>
          </ul>
        </div>

        {/* Tools & Concepts */}
        <div className="bg-gray-900 rounded-xl p-4 shadow">
          <h3 className="font-semibold mb-2 flex items-center gap-2">
            <Settings className="w-4 h-4 text-purple-400" /> Tools & Concepts
          </h3>
          <ul className="space-y-1 text-gray-300 list-disc pl-5 marker:text-purple-400">
            <li><b>Git & GitHub</b></li>
            <li><b>Redux Toolkit</b></li>
            <li><b>Data Structures & Algorithms</b></li>
            <li><b>Agile Workflow</b></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
