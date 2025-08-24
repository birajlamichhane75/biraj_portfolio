"use client";

import React from "react";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import HeroSection from "../sections/homeherosection";
import ProjectsSection from "../sections/ProjectSections";
import ExperienceSection from "../sections/ExperienceSection";
import SkillsSection from "../sections/SkillsSection";
import ExtracurricularSection from "../sections/ExtracurricilarSection";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      <div className="md:ml-80 pt-24 p-4 md:p-16 md:px-10">
        <Wrapper>
          {/* Hero Section */}
          <HeroSection />

          {/* Grid of Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 mb-12 items-stretch">
            <ExperienceSection />
            <ProjectsSection />
            <ExtracurricularSection />
            <SkillsSection />
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default HomePage;
