import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png"; // Make sure to use your logo path
import bgImage from "../images/students.jpg"; // Your background image
import "./Fonts.css";
const Main_Page = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    setUsername(""); // Log out
  };

  const renderAccountButton = () => {
    const token = localStorage.getItem("token");

    if (token) {
      return (
        <div className="flex items-center space-x-4">
          <span className="text-white font-semibold">{username}</span>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-all duration-300 cursor-pointer"
          >
            Logout
          </button>
        </div>
      );
    } else {
      return (
        <button
          onClick={() => setIsLogin(true)}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 cursor-pointer"
        >
          My Account
        </button>
      );
    }
  };

  return (
    <>
      <div
        className="relative w-full min-h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-blue-600 bg-opacity-70"></div>

        <nav className="relative z-10 w-full px-6 py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <img src={Logo} alt="Logo" className="h-12" />
              <span className="text-white font-bold text-2xl">
                LearnDash Academy
              </span>
            </div>

            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMobileMenu}
                className="text-white text-2xl"
              >
                {isMobileMenuOpen ? "×" : "☰"}
              </button>
            </div>

            <div
              className={`md:flex space-x-8 ${
                isMobileMenuOpen ? "block" : "hidden"
              }`}
            >
              <ul className="flex space-x-8 text-white">
                <li>
                  <Link to="/" className="hover:text-blue-400">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/courses" className="hover:text-blue-400">
                    Courses
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:text-blue-400">
                    Contact
                  </Link>
                </li>
                <li>{renderAccountButton()}</li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="absolute inset-0 flex justify-center items-center text-center text-white z-20 px-4">
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Master New Skills from the Experts
            </h1>
            <p className="text-xl mb-6">
              Join top professionals and elevate your career through tailored
              learning experiences.
            </p>
            <Link
              to="/courses"
              className="bg-blue-600 px-6 py-3 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Featured Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Web Development</h3>
              <p>
                Learn how to build websites and web applications using modern
                technologies.
              </p>
              <Link
                to="/courses/web-development"
                className="text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Data Science</h3>
              <p>
                Explore data analysis, machine learning, and deep learning with
                hands-on projects.
              </p>
              <Link
                to="/courses/data-science"
                className="text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Digital Marketing</h3>
              <p>
                Master SEO, social media, and content marketing to drive
                business growth.
              </p>
              <Link
                to="/courses/digital-marketing"
                className="text-blue-600 hover:underline"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main_Page;
