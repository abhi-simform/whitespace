import React from "react";

export default function Hero() {
  return (
    <section className="bg-whitepace-blue py-20 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Left Column - Text Content */}
          <div className="lg:w-1/2 lg:pr-16 text-center lg:text-left">
            <h1 className="text-white font-inter text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              Get More Done with
              <br />
              <span className="text-white">whitepace</span>
            </h1>

            <p className="text-white font-inter text-lg lg:text-xl leading-relaxed mb-10 lg:mb-12 max-w-lg mx-auto lg:mx-0">
              Project management software that enables your teams to
              collaborate, plan, analyze and manage everyday tasks
            </p>

            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center lg:justify-start">
              <button className="bg-whitepace-light-blue text-white font-inter text-lg font-medium px-10 py-5 rounded-lg hover:bg-blue-600 transition-colors duration-200 flex items-center justify-center">
                Try Whitepace free
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
          </div>

          {/* Right Column - Visual Element */}
          <div className="lg:w-1/2 mt-16 lg:mt-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Background Shape */}
              <div className="bg-whitepace-bg-blue w-80 h-80 lg:w-96 lg:h-96 xl:w-[500px] xl:h-[400px] rounded-lg flex items-center justify-center">
                {/* Placeholder for hero image/illustration */}
                <div className="bg-white/20 w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-80 rounded-lg flex items-center justify-center">
                  <div className="text-whitepace-blue text-6xl lg:text-8xl opacity-50">
                    📊
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-whitepace-yellow rounded-full opacity-80"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-white rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
