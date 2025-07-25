import React, { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-whitepace-blue py-4 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-white text-2xl font-bold font-inter">
              whitepace
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="relative group">
              <button className="text-white font-dm-sans text-lg font-medium hover:text-whitepace-yellow transition-colors duration-200 flex items-center">
                Products
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-white font-dm-sans text-lg font-medium hover:text-whitepace-yellow transition-colors duration-200 flex items-center">
                Solutions
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <div className="relative group">
              <button className="text-white font-dm-sans text-lg font-medium hover:text-whitepace-yellow transition-colors duration-200 flex items-center">
                Resources
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>
            <button className="text-white font-dm-sans text-lg font-medium hover:text-whitepace-yellow transition-colors duration-200">
              Pricing
            </button>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <button className="text-white font-inter text-lg font-medium hover:text-whitepace-yellow transition-colors duration-200">
              Login
            </button>
            <button className="bg-whitepace-light-blue text-white font-inter text-lg font-medium px-10 py-4 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Try Whitepace free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 border-t border-blue-700 pt-4">
            <nav className="flex flex-col space-y-4">
              <button className="text-white font-dm-sans text-lg font-medium text-left hover:text-whitepace-yellow transition-colors duration-200">
                Products
              </button>
              <button className="text-white font-dm-sans text-lg font-medium text-left hover:text-whitepace-yellow transition-colors duration-200">
                Solutions
              </button>
              <button className="text-white font-dm-sans text-lg font-medium text-left hover:text-whitepace-yellow transition-colors duration-200">
                Resources
              </button>
              <button className="text-white font-dm-sans text-lg font-medium text-left hover:text-whitepace-yellow transition-colors duration-200">
                Pricing
              </button>
              <div className="border-t border-blue-700 pt-4 flex flex-col space-y-4">
                <button className="text-white font-inter text-lg font-medium text-left hover:text-whitepace-yellow transition-colors duration-200">
                  Login
                </button>
                <button className="bg-whitepace-light-blue text-white font-inter text-lg font-medium px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors duration-200 text-center">
                  Try Whitepace free
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
