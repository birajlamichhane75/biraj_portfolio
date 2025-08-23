"use client";

import Image from "next/image";
import React, { useState } from "react";
import profile from "../../public/Image/profile.jpeg";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile top bar with hamburger */}
      <div className="md:hidden flex items-center justify-between bg-gray-900 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-lg font-bold">Biraj</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile overlay with blur */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-0 flex justify-start items-center transform z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        {/* Inner rounded box */}
        <div className="flex flex-col items-center shadow-lg shadow-black bg-gray-800 h-[80%] mx-4 md:mx-10 md:ml-16 rounded-4xl w-64 p-6">
          {/* Top profile */}
          <div className="flex flex-col items-center mt-5 md:mt-0">
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
          <div className="mt-10 w-full">
            <ul className="flex flex-col gap-4">
              {["Home", "Projects", "Contact", "About"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="hover:bg-gray-700 px-4 py-2 rounded block text-center"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
