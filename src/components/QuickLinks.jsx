import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  return (
    <div className="container mx-auto my-4 p-4 bg-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Quick Links</h2>
      <div className="flex flex-wrap justify-around">
        <Link to="/about" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">About Us</Link>
        <Link to="/academics" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Academics</Link>
        <Link to="/admissions" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Admissions</Link>
        <Link to="/faculty" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Faculty</Link>
        <Link to="/students" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Students</Link>
        <Link to="/gallery" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Gallery</Link>
        <Link to="/contact" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Contact Us</Link>
      </div>
    </div>
  );
};

export default QuickLinks;
