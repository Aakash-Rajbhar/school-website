// src/components/Footer.js
import React from 'react';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Contact Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p>Email: info@school.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 School Lane, Education City</p>
          </div>

          {/* Quick Links Section */}
          <div className="mb-6 md:mb-0 flex flex-col justify-start">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 w-44 flex flex-col gap-2 lg:gap-4 lg:flex-row flex-wrap items-start lg:items-end justify-start ">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:underline">
                  Programs
                </a>
              </li>
              <li>
                <a href="/admissions" className="hover:underline">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="/" className="text-gray-400 hover:text-white">
                <FaFacebookF />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FaTwitter />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FaInstagram />
              </a>
              <a href="/" className="text-gray-400 hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Springdale Public School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
