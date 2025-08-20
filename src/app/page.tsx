"use client";

import React from "react";
import Wrapper from "../components/Wrapper";
import { projects } from "../data/projects";
import Navbar from "../components/Navbar";

const HomePage = () => {
  return (
    <div>
        <Navbar />
      <Wrapper>
        {/* Page content wrapper (so content shifts right on desktop) */}
      <div className="md:ml-64 pt-16 md:pt-0">
        {/* Example content */}
        <div className="p-6">
          <h1 className="text-2xl font-bold">Welcome to My Portfolio</h1>
          <p className="mt-4">
            This is where your main content will go. On desktop, it shifts to
            the right of the sidebar. On mobile, the sidebar slides in/out.
          </p>
        </div>
      </div>
      </Wrapper>
    </div>
  );
};

export default HomePage;
