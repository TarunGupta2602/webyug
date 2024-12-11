"use client";
import { useState } from 'react';
import { Bars3Icon, MoonIcon, SunIcon, UserIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';

export default function Home({ darkMode, toggleDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className={darkMode ? "bg-black-900 text-white" : "bg-white text-black"}>
      <header>
        <nav className="flex justify-between items-center p-4">
          {/* Hamburger Icon */}
          <div className="flex items-center space-x-16">
            <div className="cursor-pointer" onClick={toggleMobileMenu}>
              <Bars3Icon className="w-5 h-5" />
            </div>

            {/* Dark Mode Toggle Icon */}
            <div className="cursor-pointer" onClick={toggleDarkMode}>
              {darkMode ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </div>
          </div>

          {/* Logo */}
          <div className="flex-grow text-center">
            <span className="text-5xl font-extrabold text-gradient bg-clip-text">gzb</span>
            <span className="text-2xl font-semibold text-black-400">.ae</span>
          </div>

      

        </nav>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
            <div className="absolute top-2 left-6 z-30 cursor-pointer" onClick={toggleMobileMenu}>
              <button className="text-gray text-2xl hover:bg-gray-200 p-2 rounded">×</button>
            </div>
            <div className="w-72 sm:w-80 lg:w-80 bg-white p-6 text-black h-full dark:bg-gray-900 dark:text-white">
              <div className="flex-grow text-center">
                <span className="text-4xl font-extrabold text-gradient bg-clip-text">gzb</span>
                <span className="text-2xl font-semibold text-black-400">.ae</span>
              </div><br/><br/><br/>
              <ul className="flex flex-col items-center space-y-4">
                <li className="py-1 px-2 hover:bg-black-100 cursor-pointer hover:underline">About Us</li>
                <li className="py-1 px-2 hover:bg-black-100 cursor-pointer hover:underline">Contact Us</li>
                <li className="py-1 px-2 hover:bg-black-100 cursor-pointer hover:underline">Payment Methods</li>
                <li className="py-1 px-2 hover:bg-black-100 cursor-pointer hover:underline">FAQs</li>
                <li className="py-1 px-2 hover:bg-black-100 cursor-pointer hover:underline">Shipping Policy</li>
                <li className="py-1 px-2 hover:bg-black-100 cursor-pointer hover:underline">Refund and Return</li>
                <li className="py-1 px-2 hover:bg-black-100 cursor-pointer hover:underline">Terms of Use</li>
                <li className="py-1 px-2 hover:bg-black-100 cursor-pointer hover:underline">Privacy Policy</li>
                <li className="py-1 px-2 hover:bg-black-100 cursor-pointer hover:underline">Cookie Notice</li>
              </ul>
            </div>
          </div>
        )}

        {/* Search Bar */}
        <div className="mt-4 px-4  mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full py-2 pl-10 pr-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <a href="#" className="text-blue-500 underline text-sm mb-7 mr-5">Advanced Search</a>
        </div>
      </header>
    </div>
  );
}
