
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gradient-to-r bg-[#093a3e] text-white shadow-lg py-3 fixed top-0 left-0 w-full z-50 transition-all duration-500">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-8">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <div className="text-3xl font-extrabold tracking-wide">
            <span className="bg-clip-text text-transparent bg-gradient-to-r text-white font-['poppins']">
              InterviewPrep
            </span>
          </div>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <nav className="hidden md:flex space-x-8 text-lg font-medium">
          <Link
            to="/"
            className="relative text-white hover:text-[#3A98B9] transition duration-300 group"
          >
            Home
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#3A98B9] group-hover:w-full transition-all duration-300"></span>
          </Link>
          {/* <Link
            to="/about"
            className="relative text-white hover:text-[#3A98B9] transition duration-300 group"
          >
            About Us
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#3A98B9] group-hover:w-full transition-all duration-300"></span>
          </Link> */}
          <Link
            to="/resume"
            className="relative text-white hover:text-[#3A98B9] transition duration-300 group"
          >
            Resume
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#3A98B9] group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/dsa"
            className="relative text-white hover:text-[#3A98B9] transition duration-300 group"
          >
            DSA
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#3A98B9] group-hover:w-full transition-all duration-300"></span>
          </Link>
          
          <Link
            to="/all"
            className="relative text-white hover:text-[#3A98B9] transition duration-300 group"
          >
          All
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#3A98B9] group-hover:w-full transition-all duration-300"></span>
          </Link>

            
          <Link
            to="/code"
            className="relative text-white hover:text-[#3A98B9] transition duration-300 group"
          >
       Code
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#3A98B9] group-hover:w-full transition-all duration-300"></span>
          </Link>
         
         

          
          <Link
            to="/editor"
            className="relative text-white hover:text-[#3A98B9] transition duration-300 group"
          >
         Code Editor
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#3A98B9] group-hover:w-full transition-all duration-300"></span>
          </Link>
         
         
          <Link
            to="/signup"
            className="relative text-white hover:text-[#144272] transition duration-300 group bg-[#72A0C1] px-4 py-2 rounded-full"
          >
           Signup   </Link>
          {/* <Link
            to="/login"
            className="relative text-white hover:text-yellow-300 transition duration-300 group bg-green-500 px-4 py-2 rounded-full"
          >
        Login
          </Link> */}
        </nav>

        {/* Hamburger Icon (Shown on Small Screens) */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XMarkIcon className="h-8 w-8 text-white transform transition-transform duration-300" />
            ) : (
              <Bars3Icon className="h-8 w-8 text-white transform transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu (Visible on Small Screens) */}
      {isOpen && (
        <nav className="md:hidden bg-white rounded-xl shadow-xl mt-4 mx-4 p-6 space-y-6 text-gray-900">
          <Link
            to="/"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Home
          </Link>
          {/* <Link
            to="/about"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            About Us
          </Link> */}
          <Link
            to="/resume"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Resume
          </Link>
          <Link
            to="/dsa"
            onClick={toggleMenu}
          
         className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            DSA
          </Link>
          
          <Link
            to="/all"
            className="relative text-white hover:text-yellow-300 transition duration-300 group"
          >
          All
            <span className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-300 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            to="/code"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
            Code
          </Link>

          <Link
            to="/editor"
            onClick={toggleMenu}
            className="block text-lg hover:text-indigo-500 transition duration-300"
          >
         Code Editor
          </Link>
        

          <Link
            to="/signup"
            className="relative text-white hover:text-yellow-300 transition duration-300 group bg-[#D8BFD8] px-4 py-2 rounded-full"
          >
           Signup   </Link>
          {/* <Link
            to="/login"
            className="relative text-white hover:text-yellow-300 transition duration-300 group bg-green-500 px-4 py-2 rounded-full"
          >
        Login
          </Link> */}
        </nav>
      )}
    </header>
  );
};

export default Header;
