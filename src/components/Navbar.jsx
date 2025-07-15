import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
    { path: '/login', name: 'Login' },
    { path: '/signup', name: 'Sign Up' }
  ];

  return (
    <nav className="bg-amber-100 border-b-4 border-amber-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <Link to="/" className="heading-font text-3xl font-black text-amber-600 transform hover:scale-105 transition-all duration-300">
                Kalibah 🌴
              </Link>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`playful-font text-base font-semibold text-amber-600 transition-all duration-300 transform hover:scale-105 ${
                  location.pathname === link.path
                    ? 'bg-amber-100 text-amber-900 shadow-lg'
                    : 'text-amber-800 hover:bg-amber-100 hover:text-amber-900'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button className="playful-font bg-amber-500 text-white px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wide shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center hover:bg-amber-600">
              <span className="mr-2 text-lg">🥰</span>
              Snack Box (0)
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`playful-font block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-102 ${
                    location.pathname === link.path
                      ? 'bg-gradient-to-r from-pink-400 to-purple-500 text-white'
                      : 'text-gray-800 hover:bg-gradient-to-r hover:from-yellow-300 hover:to-orange-400'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button className="playful-font w-full mt-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-4 rounded-full font-bold text-base uppercase tracking-wide shadow-lg flex items-center justify-center">
                <span className="mr-2 text-xl">🛒</span>
                Cart (0)
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
