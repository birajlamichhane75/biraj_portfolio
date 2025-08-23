"use client";

import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react"; // link icon
import Link from "next/link";

const ProjectPage = () => {
    const [projects, setProjects] = useState<any[]>([]);

    useEffect(() => {
        fetch("/data/projects.json")
            .then((res) => res.json())
            .then((data) => setProjects(data));
    }, []);

    return (
        <div className="bg-black text-white min-h-screen">
            <Navbar />

            {/* Main content wrapper */}
            <div className="md:ml-96 pt-24 p-4 md:p-16">
                <Wrapper>
                    <div className="main">
                        <div className="top py-10 text-center">
                            <h1 className="text-4xl font-bold">All Projects</h1>
                            <p className="text-gray-400">Showcasing my work</p>
                        </div>

                        {/* Project Cards */}
                        <div className="project-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-10">
                            {projects.map((project, i) => (
                                <div
                                    key={i}
                                    className="card rounded-lg overflow-hidden flex flex-col bg-gray-900 shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-1 hover:scale-105 border border-gray-700"
                                >
                                    {/* Video (shows poster, plays only on hover) */}
                                    <video
                                        src={project.video}
                                        muted
                                        loop
                                        playsInline
                                        preload="metadata" // ensures first frame is visible
                                        className="w-full h-full object-cover transition-transform duration-300"
                                        onMouseOver={(e) => e.currentTarget.play()}
                                        onMouseOut={(e) => {
                                            const video = e.currentTarget;
                                            if (video) {
                                                video.pause();
                                                // optional: reset to start
                                                // video.currentTime = 0;
                                            }
                                        }}
                                    />
                                    {/* Project Details */}
                                    <div className="flex-1 flex flex-col justify-between p-4">
                                        <div className="flex justify-between items-center">
                                            {/* Title bottom-left */}
                                            <h2 className="text-lg font-bold">{project.title}</h2>

                                            {/* Live button with icon and highlighting */}
                                            <Link
                                                href={project.url}
                                                target="_blank"
                                                className="flex items-center gap-1 underline text-gray-400 hover:text-blue-600 font-semibold hover:underline transition"
                                            >
                                                Live <ExternalLink size={16} />
                                            </Link>
                                        </div>

                                        {/* Tools */}
                                        <div className="flex flex-wrap gap-2 mt-3">
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
                                </div>
                            ))}
                        </div>
                    </div>
                </Wrapper>
            </div>
        </div>
    );
};

export default ProjectPage;
