import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-orange-600 z-20  w-full h-[70px] fixed left-0 top-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-white text-lg font-bold">
          Springdale Public School
        </div>
        <div className="hidden lg:flex space-x-4  gap-4">
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
        <div className="lg:hidden z-10">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <IoClose className='w-8 h-8 cursor-pointer' /> : <RiMenu3Line className='w-8 h-8 cursor-pointer' />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden absolute right-0 top-[70px] border-t-2 border-gray-400 w-[200px] flex flex-col justify-start items-baseline gap-8  space-y-2 p-6 z-10 bg-orange-600">
          <Link to="/" className="text-white hover:text-gray-300 cursor-pointer">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300 cursor-pointer">
            About Us
          </Link>
          <Link to="/academics" className="text-white hover:text-gray-300 cursor-pointer">
            Academics
          </Link>
          <Link to="/admissions" className="text-white hover:text-gray-300 cursor-pointer">
            Admissions
          </Link>
          <Link to="/faculty" className="text-white hover:text-gray-300 cursor-pointer">
            Faculty
          </Link>
          <Link to="/students" className="text-white hover:text-gray-300 cursor-pointer">
            Students
          </Link>
          <Link to="/gallery" className="text-white hover:text-gray-300 cursor-pointer">
            Gallery
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300 cursor-pointer">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
