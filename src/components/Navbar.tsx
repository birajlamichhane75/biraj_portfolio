"use client";

import Image from "next/image";
import React, { useState } from "react";
import profile from "../../public/Image/profile.jpeg";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar with hamburger */}
      <div className="md:hidden flex items-center justify-between bg-gray-800 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-lg font-bold">Biraj</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-800 text-white flex flex-col justify-between transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition-transform duration-300 ease-in-out z-40`}
      >
        {/* Top profile */}
        <div className="p-6 flex flex-col items-center mt-12 md:mt-0">
          <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-2 border-gray-600">
            <Image
              src={profile}
              alt="Profile"
              width={112}
              height={112}
              className="object-cover"
            />
          </div>
          <h1 className="text-xl font-bold text-center">Biraj Lamichhane</h1>
        </div>

        {/* Navigation links */}
        <div className="p-6">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#home"
                className="hover:bg-gray-700 px-4 py-2 rounded block"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="hover:bg-gray-700 px-4 py-2 rounded block"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="#skills"
                className="hover:bg-gray-700 px-4 py-2 rounded block"
                onClick={() => setIsOpen(false)}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="hover:bg-gray-700 px-4 py-2 rounded block"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="hover:bg-gray-700 px-4 py-2 rounded block"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>

      
    </>
  );
};

export default Navbar;
