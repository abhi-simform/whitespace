import React from "react";

export default function ProjectManagement() {
  return (
    <section className="py-20 lg:py-32 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-20">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-whitepace-text-dark font-inter text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
              Project
              <br />
              <span className="text-whitepace-text-dark">Management</span>
            </h2>

            <p className="text-whitepace-text-dark font-inter text-lg lg:text-xl leading-relaxed mb-10 lg:mb-12">
              Images, videos, PDFs and audio files are supported. Create math
              expressions and diagrams directly from the app. Take photos with
              the mobile app and save them to a note.
            </p>

            <button className="bg-whitepace-light-blue text-white font-inter text-lg font-medium px-10 py-5 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center mx-auto lg:mx-0">
              Get Started
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

          {/* Right Column - Visual Element */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Shape */}
              <div className="bg-whitepace-bg-blue w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[350px] rounded-lg flex items-center justify-center">
                {/* Placeholder for project management illustration */}
                <div className="bg-white/30 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-72 rounded-lg flex items-center justify-center">
                  <div className="text-whitepace-blue text-6xl lg:text-8xl opacity-70">
                    📋
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-6 w-10 h-10 bg-whitepace-yellow rounded-full opacity-80"></div>
              <div className="absolute -bottom-6 -right-4 w-12 h-12 bg-whitepace-light-blue rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
