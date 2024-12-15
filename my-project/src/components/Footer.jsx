import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import React from "react";
import Logos from '../images/Logo.png';
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-700 text-white py-12 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        {/* Logo and Tagline */}
        <div className="flex flex-col md:flex-row justify-between items-center sm:items-start space-y-8 md:space-y-0">
        <div className="flex flex-col items-center md:items-start ">
  {/* Logo */}
  <div className="flex justify-center md:justify-start items-center">
    <img
      src={Logos} 
      alt="Logo"
      className="w-12 md:w-24 mb-2" // Adjusted size to make the logo smaller
    />
  </div>

  {/* Text below the logo */}
  <p className="text-center md:text-left text-gray-300 text-lg max-w-xs md:max-w-sm">
    Empowering students to succeed with world-class training and resources.
  </p>
</div>


          {/* Quick Links */}
          <div className="flex flex-col sm:flex-row sm:space-x-16 md:space-x-24 space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-200">
                Quick Links
              </h3>
              <ul className="text-gray-300 space-y-2 mt-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/About-us"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/all-courses"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Courses
                  </Link>
                </li>
                <li>
                  <Link
                    href="/Contact-us"
                    className="hover:text-blue-400 transition-colors duration-200"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="text-center sm:text-left">
              <h3 className="text-lg font-semibold text-gray-200">Follow Us</h3>
              <div className="flex space-x-6 mt-2">
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <FaLinkedinIn size={24} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-200">Stay Updated</h3>
          <p className="text-lg text-gray-300 mt-2 mb-6">
            Subscribe to our newsletter for the latest updates, New Courses and
            Updates.
          </p>
          <form className="flex justify-center space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 w-72 rounded-lg text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-500 transition-all">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; 2024 LearnDash Acedemy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
