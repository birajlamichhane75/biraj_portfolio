"use client";

import React from "react";
import { Users } from "lucide-react"; // icon

const ExtracurricularSection = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg shadow-black hover:shadow-xl transition h-[30rem]">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <Users className="w-5 h-5 text-blue-500" />
        Extracurricular
      </h2>
      <ul className="list-disc pl-6 space-y-3 text-gray-300 marker:text-blue-500">
        <li>
          <span className="font-semibold text-white">
            Program Chair – National Society of Black Engineers (NSBE)
          </span>
        </li>
        
        <li>
          <span className="font-semibold text-white">
            Member – Apple Coding Club
          </span>
        </li>
        <li>
          <span className="font-semibold text-white">
            Planning and Development – Math Club (Huston-Tillotson University)
          </span>
        </li>
        
      </ul>
    </div>
  );
};

export default ExtracurricularSection;
