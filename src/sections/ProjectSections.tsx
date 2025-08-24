"use client";

import React, { useEffect, useState } from "react";
import ProjectsSlider from "../components/ProjectsSlider"; // adjust path
import Link from "next/link";

interface Project {
  video: string;
  title: string;
}

const ProjectsSection = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch("/data/projects.json");
      const data = await res.json();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg shadow-black hover:shadow-xl transition flex flex-col justify-between h-[30rem]">
      {/* Heading */}
      <h2 className="text-lg font-semibold mb-4 flex justify-between items-center">
        <span>Projects</span>
        <Link href="/projects" className="text-blue-500 text-sm hover:underline">
          View All →
        </Link>
      </h2>

      {/* Slider */}
      <ProjectsSlider projects={projects} preview={1} />

      {/* View All Button */}
      <div className="mt-4 text-center">
        <Link
          href="/projects"
          className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition"
        >
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default ProjectsSection;
