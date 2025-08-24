"use client";

import React from "react";

const ExperienceSection = () => {
    return (
        <div className="rounded-2xl transition h-[30rem]">
            <div className="grid grid-cols-2 gap-4 h-full">
                {/* Personal Projects */}
                <div className="bg-gray-800 rounded-xl p-6 shadow-md shadow-black flex flex-col items-center justify-center h-full transition hover:scale-105 hover:shadow-xl">
                    <span className="text-3xl font-bold text-white">10+</span>
                    <p className="text-blue-400 font-semibold mt-1">Personal Projects</p>
                    <p className="text-gray-400 text-sm mt-2 text-center">
                        Completed multiple personal web and blockchain projects to strengthen technical skills.
                    </p>
                </div>

                {/* Internship */}
                <div className="bg-gray-800 rounded-xl p-6 shadow-md shadow-black flex flex-col items-center justify-center h-full transition hover:scale-105 hover:shadow-xl">
                    <span className="text-3xl font-bold text-white">1</span>
                    <p className="text-blue-400 font-semibold mt-1">Internship</p>
                    <p className="text-gray-400 text-sm mt-2 text-center">
                        Gained hands-on experience working in a startup environment on real projects.
                    </p>
                </div>

                {/* Hackathon */}
                <div className="bg-gray-800 rounded-xl p-6 shadow-md shadow-black flex flex-col items-center justify-center h-full transition hover:scale-105 hover:shadow-xl">
                    <span className="text-3xl font-bold text-white">1</span>
                    <p className="text-blue-400 font-semibold mt-1">Hackathon</p>
                    <p className="text-gray-400 text-sm mt-2 text-center">
                        Participated in a hackathon to solve real-world problems and enhance coding skills.
                    </p>
                </div>

                {/* Extracurricular / Leadership */}
                <div className="bg-gray-800 rounded-xl p-6 shadow-md shadow-black flex flex-col items-center justify-center h-full transition hover:scale-105 hover:shadow-xl">
                    <span className="text-3xl font-bold text-white">NSBE / Clubs</span>
                    <p className="text-blue-400 font-semibold mt-1">Leadership & Membership</p>
                    <p className="text-gray-400 text-sm mt-2 text-center">
                        Program Chair at NSBE, Member of Apple Coding Club – actively engaging in tech communities.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceSection;
