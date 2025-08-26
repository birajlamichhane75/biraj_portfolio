"use client";

import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ExternalLink, ExternalLinkIcon } from "lucide-react";

const ProjectPage = () => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("/data/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Main content wrapper */}
      <div className="pt-16 xl:ml-64 px-4">
        <Wrapper>
          <div className="text-center py-10">
            <h1 className="text-4xl font-bold mb-2">All Projects</h1>
            <p className="text-gray-400">Showcasing my work</p>
          </div>

          {/* Project Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Link
                key={i}
                href={project.url}
                target="_blank"
                className="group"
              >
                <div className="bg-gray-800 rounded-2xl shadow-black shadow-lg hover:shadow-xl transition-transform transform group-hover:-translate-y-1 group-hover:scale-105 flex flex-col overflow-hidden h-[24rem]">
                  {/* Video (65% height) */}
                  <div className="relative h-[65%] w-full">
                    <video
                      src={project.video}
                      muted
                      loop
                      autoPlay
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Project Details */}
                  {/* Project Details */}
                  <div className="flex-1 flex flex-row justify-between p-4 gap-5">
                    <div>
                      <h2 className="text-lg font-bold mb-2">{project.title}</h2>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tools.map((tool: string, idx: number) => (
                          <span
                            key={idx}
                            className="bg-blue-600/80 text-xs px-2 py-1 rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-end items-center gap-1">
                      <Link
                        href={project.url}
                        target="_blank"
                        className="font-semibold text-white underline flex items-center gap-1"
                      >
                        Live <ExternalLink size={16} />
                      </Link>
                    </div>
                  </div>


                </div>
              </Link>
            ))}
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default ProjectPage;
