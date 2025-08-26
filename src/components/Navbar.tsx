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
      {/* Top bar (Mobile + Tablet + Small Laptop <1290px) */}
      <div className="xl:hidden flex items-center justify-between bg-gray-900 text-white p-4 fixed top-0 left-0 right-0 z-50">
        <h1 className="text-lg font-bold">Biraj</h1>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 xl:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed left-0 top-0 h-full w-64 bg-gray-800 shadow-lg shadow-black p-6 z-40 transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} xl:translate-x-0`}
      >
        
        {/* Profile */}
        <div className="flex flex-col items-center mt-10">
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

        {/* Navigation */}
        <div className="mt-10 w-full">
          <ul className="flex flex-col gap-4">
            {["Home", "Projects", "About", "Contact"].map((item) => (
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
    </>
  );
};

export default Navbar;
