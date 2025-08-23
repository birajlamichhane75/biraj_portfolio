"use client";

import React from "react";
import Image from "next/image";
import projectPreview from "../../public/Image/img1.jpg";
import htmlIcon from "../../public/Image/html.png";
import cssIcon from "../../public/Image/css.png";
import jsIcon from "../../public/Image/js.png";
import reactIcon from "../../public/Image/react.png";
import bootstrapIcon from "../../public/Image/bs.png";
import tailwindIcon from "../../public/Image/tailwind.png";
import nextIcon from "../../public/Image/nextimg.jpg";
import Navbar from "../components/Navbar";
import Wrapper from "../components/Wrapper";

const HomePage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Main content wrapper */}
      <div className="md:ml-80 pt-24 p-4 md:p-16 md:px-10">
        <Wrapper>
          {/* Top Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <div>
              <h1 className="text-4xl font-bold mb-2">Web Developer</h1>
              <p className="text-gray-400 text-lg">Next JS | React JS</p>
            </div>
            <a href="#contact" className="text-blue-600 font-semibold mt-4 md:mt-0">
              Follow Me
            </a>
          </div>

          {/* Cards Section */}
          <div className="bigGrid grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-10 mb-12 items-stretch">

            <div className="bg-gray-900 p-6 rounded-lg h-[30rem]">
              <h2 className="text-lg font-semibold mb-2">
                Projects <span className="text-blue-600 text-sm">View all</span>
              </h2>
              <Image src={projectPreview} alt="Project Preview" className="rounded-lg mt-2" />
              
            </div>

            <div className="grid grid-cols-2 gap-6 rounded-lg border-white border-2 h-[30rem]">
              <div className="border-1 border-white rounded-lg bg-gray-900">
                <span>10+ <br /> <p>Projetct Completed</p></span>
              </div>
              <div className="border-1 border-white rounded-lg bg-gray-900">

              </div>
              <div className="border-1 border-white rounded-lg bg-gray-900">Node Js Basic</div>
              <div className="border-1 border-white rounded-lg bg-gray-900">Python Basic</div>
            </div>

            {/* Projects */}
            <div className="bg-gray-900 p-6 rounded-lg h-[30rem]" id="projects ">
              <h2 className="font-semibold mb-2">Interactive Web Design</h2>
              <p className="text-gray-400 text-sm">
                Animations in web design create movement and interactive features on a website. Enhance UX with visual effects.
              </p>
              <a href="#contact" className="text-blue-600 font-semibold mt-2 block">
                Get in touch
              </a>
            </div>

            {/* Skills */}
            <div className="bg-gray-900 p-6 rounded-lg h-[30rem]" id="skills ">
              <h2 className="text-lg font-semibold mb-4">Skills</h2>
              <div className="grid grid-cols-4 gap-4">
                <Image src={htmlIcon} alt="HTML" />
                <Image src={cssIcon} alt="CSS" />
                <Image src={jsIcon} alt="JavaScript" />
                <Image src={reactIcon} alt="React" />
                <Image src={bootstrapIcon} alt="Bootstrap" />
                <Image src={tailwindIcon} alt="Tailwind" />
                <Image src={nextIcon} alt="Next.js" />
              </div>
            </div>
          </div>

          {/* Projects & Skills */}

        </Wrapper>
      </div>
    </div>
  );
};

export default HomePage;
