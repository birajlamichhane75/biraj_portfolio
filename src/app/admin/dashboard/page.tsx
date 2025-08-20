// Admin Dashboard page
"use client";

import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import axios from "axios";


type Project = {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  imageURL: string;
  githubLink?: string;
  liveLink?: string;
};

const AdminDashboard = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStack, setTechStack] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  // Fetch existing projects from Firestore
  const fetchProjects = async () => {
    const querySnapshot = await getDocs(collection(db, "projects"));
    const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Project));
    setProjects(data);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle image file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImageFile(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!imageFile) return alert("Please select an image");

    setLoading(true);
    try {
      // Upload image to Cloudinary via Next.js API
      const formData = new FormData();
      formData.append("file", imageFile);
      const uploadRes = await axios.post("/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      const imageURL = uploadRes.data.url;

      // Save project metadata + image URL to Firestore
      await addDoc(collection(db, "projects"), {
        title,
        description,
        techStack: techStack.split(",").map(t => t.trim()),
        githubLink,
        liveLink,
        imageURL,
      });

      // Reset form and refresh project list
      setTitle("");
      setDescription("");
      setTechStack("");
      setGithubLink("");
      setLiveLink("");
      setImageFile(null);
      fetchProjects();
    } catch (err) {
      console.error(err);
      alert("Failed to upload project");
    } finally {
      setLoading(false);
    }
  };

  // Handle project deletion
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this project?")) return;
    await deleteDoc(doc(db, "projects", id));
    fetchProjects();
  };

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Form to add new project */}
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow mb-6 max-w-lg">
        <h2 className="text-xl font-semibold mb-4">Add New Project</h2>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-2"
          required
        />

        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-2"
          required
        />

        <input
          type="text"
          placeholder="Tech Stack (comma separated)"
          value={techStack}
          onChange={e => setTechStack(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-2"
          required
        />

        <input
          type="url"
          placeholder="GitHub Link"
          value={githubLink}
          onChange={e => setGithubLink(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-2"
        />

        <input
          type="url"
          placeholder="Live Link"
          value={liveLink}
          onChange={e => setLiveLink(e.target.value)}
          className="w-full border px-3 py-2 rounded mb-2"
        />

        <input type="file" onChange={handleFileChange} className="mb-4" required />

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Uploading..." : "Add Project"}
        </button>
      </form>

      {/* List of projects */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
          <div key={project.id} className="bg-white p-4 rounded shadow relative">
            <img src={project.imageURL} alt={project.title} className="h-40 w-full object-cover rounded mb-2" />
            <h3 className="font-semibold text-lg">{project.title}</h3>
            <p className="text-gray-600 text-sm mb-2">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {project.techStack.map((tech, i) => (
                <span key={i} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-2">
              {project.githubLink && <a href={project.githubLink} target="_blank" className="text-blue-600 text-sm hover:underline">GitHub</a>}
              {project.liveLink && <a href={project.liveLink} target="_blank" className="text-green-600 text-sm hover:underline">Live</a>}
            </div>
            <button
              onClick={() => handleDelete(project.id)}
              className="absolute top-2 right-2 text-red-600 hover:text-red-800"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
