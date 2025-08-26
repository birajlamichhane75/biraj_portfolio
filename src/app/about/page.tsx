"use client";

import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import SkillsSection from "../../sections/SkillsSection";
import ExperienceSection from "../../sections/ExperienceSection";

const AboutPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Main content */}
      <div className="pt-16 xl:ml-64 px-4">
        <Wrapper>
          <div className="text-center py-10">
            <h1 className="text-4xl font-bold mb-2">About Me</h1>
            <p className="text-gray-400">
              A little introduction about who I am and what I do.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-lg shadow-black p-8 text-lg leading-relaxed max-w-3xl mx-auto">
            <p className="mb-6">
              Hi, I’m <span className="text-blue-400 font-semibold">Biraj Lamichhane</span>, 
              a Computer Science student at Huston-Tillotson University. I am passionate
              about building scalable software, web applications, and mobile applications. 
            </p>
            <p className="mb-6">
              My technical toolkit includes{" "}
              <span className="text-blue-400">Next.js, React.js, Tailwind CSS, TypeScript, MongoDB, and Solidity</span>. 
              I enjoy creating projects that solve real-world problems and contribute to meaningful change.
            </p>
            <p>
              Outside of academics and coding, I’m also an active member of{" "}
              <span className="text-blue-400">NSBE</span> and the{" "}
              <span className="text-blue-400">Apple Coding Club</span>, 
              where I collaborate with peers and learn through team projects and hackathons.
            </p>
          </div>

          {/* Skills Section */}
          <div className="mt-16">
            <SkillsSection />
          </div>

          

        </Wrapper>
      </div>
    </div>
  );
};

export default AboutPage;
