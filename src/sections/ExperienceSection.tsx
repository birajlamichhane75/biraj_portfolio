"use client";

import React from "react";

const ExperienceSection = () => {
  return (
    <div className="rounded-2xl transition w-full h-[30rem]">
      <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full">

        {/* Personal Projects */}
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md shadow-black flex flex-col items-center transition hover:scale-105 hover:shadow-xl w-full h-full">
          <span className="text-2xl sm:text-3xl font-bold text-white">10+</span>
          <p className="text-blue-400 font-semibold mt-1 text-sm sm:text-base">Personal Projects</p>
          <div className="mt-2 text-gray-400 text-xs sm:text-sm text-center overflow-y-auto flex-1 w-full scrollbar-thin scrollbar-thumb-gray-700">
            Completed multiple personal web applications and mobile application projects to strengthen technical skills.
          </div>
        </div>

        {/* Internship */}
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md shadow-black flex flex-col items-center transition hover:scale-105 hover:shadow-xl w-full h-full">
          <span className="text-2xl sm:text-3xl font-bold text-white">1</span>
          <p className="text-blue-400 font-semibold mt-1 text-sm sm:text-base">Internship</p>
          <div className="mt-2 text-gray-400 text-xs sm:text-sm text-center overflow-y-auto flex-1 w-full scrollbar-thin scrollbar-thumb-gray-700">
            Gained hands-on experience working in a startup environment on real projects.
          </div>
        </div>

        {/* Hackathon */}
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md shadow-black flex flex-col items-center transition hover:scale-105 hover:shadow-xl w-full h-full">
          <span className="text-2xl sm:text-3xl font-bold text-white">1</span>
          <p className="text-blue-400 font-semibold mt-1 text-sm sm:text-base">Hackathon</p>
          <div className="mt-2 text-gray-400 text-xs sm:text-sm text-center overflow-y-auto flex-1 w-full scrollbar-thin scrollbar-thumb-gray-700">
            Participated in a hackathon to solve real-world problems and enhance coding skills.
          </div>
        </div>

        {/* Extracurricular / Leadership */}
        <div className="bg-gray-800 rounded-xl p-4 sm:p-6 shadow-md shadow-black flex flex-col items-center transition hover:scale-105 hover:shadow-xl w-full h-full">
          <span className="text-2xl sm:text-3xl font-bold text-white">Clubs</span>
          <p className="text-blue-400 font-semibold mt-1 text-sm sm:text-base">Leadership & Membership</p>
          <div className="mt-2 text-gray-400 text-xs sm:text-sm text-center overflow-y-auto flex-1 w-full scrollbar-thin scrollbar-thumb-gray-700">
            Program Chair at NSBE, Member of Apple Coding Club – actively engaging in tech communities.
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExperienceSection;
