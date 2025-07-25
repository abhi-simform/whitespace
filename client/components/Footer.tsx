import React from "react";

export default function Footer() {
  return (
    <footer className="bg-whitepace-blue py-16 lg:py-20 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-white text-2xl font-bold font-inter mb-6">
              whitepace
            </div>
            <p className="text-white/80 font-inter text-lg leading-relaxed mb-6">
              whitepace was created for the new ways we live and work. We make a
              better workspace around the world.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-white font-inter text-lg font-bold mb-6">
              Product
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
                >
                  Overview
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
                >
                  Customer stories
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-white font-inter text-lg font-bold mb-6">
              Resources
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
                >
                  Guides & tutorials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
                >
                  Help center
                </a>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-inter text-lg font-bold mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
                >
                  Media kit
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Try Today Section */}
        <div className="text-center py-12 lg:py-16 border-t border-white/20">
          <h3 className="text-white font-inter text-4xl lg:text-5xl font-bold mb-6">
            Try Whitepace
            <br />
            today
          </h3>
          <p className="text-white/80 font-inter text-lg lg:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            Get started for free. Add your whole team as your needs grow.
          </p>
          <button className="bg-whitepace-light-blue text-white font-inter text-lg font-medium px-10 py-5 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center mx-auto">
            Start today
            <svg
              className="ml-3 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/20">
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-6 md:mb-0">
            <select className="bg-transparent text-white border border-white/30 rounded px-4 py-2 font-inter">
              <option value="en" className="text-black">
                🌐 English
              </option>
            </select>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
              >
                Terms & privacy
              </a>
              <a
                href="#"
                className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
              >
                Security
              </a>
              <a
                href="#"
                className="text-white/80 font-inter hover:text-whitepace-yellow transition-colors duration-200"
              >
                Status
              </a>
            </div>
          </div>

          <div className="text-white/60 font-inter">©2021 Whitepace LLC.</div>
        </div>
      </div>
    </footer>
  );
}
