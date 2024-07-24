import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-600 z-10  w-full h-[70px] fixed left-0 top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-lg font-bold">
          Springdale Public School
        </div>
        <div className="hidden md:flex space-x-4  gap-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/academics" className="text-white hover:text-gray-300">
            Academics
          </Link>
          <Link to="/admissions" className="text-white hover:text-gray-300">
            Admissions
          </Link>
          <Link to="/faculty" className="text-white hover:text-gray-300">
            Faculty
          </Link>
          <Link to="/students" className="text-white hover:text-gray-300">
            Students
          </Link>
          <Link to="/gallery" className="text-white hover:text-gray-300">
            Gallery
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
        </div>
        <div className="md:hidden z-10">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden border-t-2 border-gray-400 w-full flex flex-wrap justify-start items-baseline gap-8  space-y-2 mt-2 p-6 z-10 bg-blue-600">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/academics" className="text-white hover:text-gray-300">
            Academics
          </Link>
          <Link to="/admissions" className="text-white hover:text-gray-300">
            Admissions
          </Link>
          <Link to="/faculty" className="text-white hover:text-gray-300">
            Faculty
          </Link>
          <Link to="/students" className="text-white hover:text-gray-300">
            Students
          </Link>
          <Link to="/gallery" className="text-white hover:text-gray-300">
            Gallery
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
