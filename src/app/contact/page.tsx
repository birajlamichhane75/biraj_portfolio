"use client";

import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";

const ContactPage = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />

      {/* Main content */}
      <div className="md:ml-96 pt-24 p-4 md:p-16">
        <Wrapper>
          <div className="text-center py-10">
            <h1 className="text-4xl font-bold mb-2">Contact Me</h1>
            <p className="text-gray-400">
              Let’s connect! Feel free to reach out for collaborations, opportunities, or just a chat.
            </p>
          </div>

          <div className="bg-gray-800 rounded-2xl shadow-lg shadow-black p-8 max-w-2xl mx-auto">
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                placeholder="Your Message"
                rows={5}
                className="bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-500 transition px-6 py-3 rounded-lg font-semibold shadow-md"
              >
                Send Message
              </button>
            </form>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default ContactPage;
