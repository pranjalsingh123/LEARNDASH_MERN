import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Add required icons

export default function ContactUs() {
  const [activeIndex, setActiveIndex] = useState(null); // For toggling FAQ answers

  // Toggle function for FAQ answer visibility
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-8 bg-gray-50">
      {/* Heading */}
      <div className="text-center mt-16">
        <h2 className="font-bold text-4xl">Need Help?</h2>
        <p className="text-lg text-gray-600 mt-4">
          Feel free to reach out to us for any queries. Our team is here to help you!
        </p>
      </div>

      {/* Contact Info Cards - Grid Layout for Responsiveness */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {/* Call Us Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-3xl text-blue-600 mr-4" /> {/* Call Icon */}
            <h3 className="text-xl font-semibold text-gray-700">Call Us - 24/7</h3>
          </div>
          <p className="text-gray-600">For any assistance, call us anytime at:</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">+91 7651806754</p>
        </div>

        {/* Email ID Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center mb-4">
            <FaEnvelope className="text-3xl text-blue-600 mr-4" /> {/* Email Icon */}
            <h3 className="text-xl font-semibold text-gray-700">Email Us</h3>
          </div>
          <p className="text-gray-600">For inquiries, you can email us at:</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">parnjals85@gmail.com</p>
        </div>

        {/* Office Address Card */}
        <div className="bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center mb-4">
            <FaMapMarkerAlt className="text-3xl text-blue-600 mr-4" /> {/* Location Icon */}
            <h3 className="text-xl font-semibold text-gray-700">Office Address</h3>
          </div>
          <p className="text-gray-600">Visit us at our office:</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">Bhojubeer, Varanasi</p>
        </div>
      </div>

      {/* Message Box */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-16">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Send Us a Message</h3>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">Your Name</label>
            <input
              type="text"
              id="name"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Your Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700">Your Message</label>
            <textarea
              id="message"
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Write your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg mt-16">
        <h3 className="text-2xl font-semibold text-gray-700 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {/* Question 1 */}
          <div className="border-b border-gray-300">
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                activeIndex === 0 ? 'text-blue-600' : 'text-gray-800'
              } rounded-md transition-colors duration-300`}
              onClick={() => toggleAnswer(0)}
            >
              <span
                className={`text-lg ${activeIndex === 0 ? 'text-blue-600' : 'text-gray-800'}`}
              >
                What types of courses are offered on your platform?
              </span>
              <span>{activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <div
              className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                activeIndex === 0 ? 'max-h-[500px]' : ''
              }`}
              style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
            >
              <p className="p-4 text-gray-700">
                We offer a wide range of courses across various categories including programming, digital marketing, design, business, personal development, and more. New courses are added regularly, so check back often for the latest offerings!
              </p>
            </div>
          </div>

          {/* Question 2 */}
          <div className="border-b border-gray-300">
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                activeIndex === 1 ? 'text-blue-600' : 'text-gray-800'
              } rounded-md transition-colors duration-300`}
              onClick={() => toggleAnswer(1)}
            >
              <span
                className={`text-lg ${activeIndex === 1 ? 'text-blue-600' : 'text-gray-800'}`}
              >
                How do I create an account on your website?
              </span>
              <span>{activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <div
              className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                activeIndex === 1 ? 'max-h-[500px]' : ''
              }`}
              style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
            >
              <p className="p-4 text-gray-700">
                To create an account, click on the "Sign Up" button on the homepage. You'll be asked to provide your name, email address, and a password. Once registered, you can start browsing and enrolling in courses.
              </p>
            </div>
          </div>

          {/* Question 3 */}
          <div className="border-b border-gray-300">
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                activeIndex === 2 ? 'text-blue-600' : 'text-gray-800'
              } rounded-md transition-colors duration-300`}
              onClick={() => toggleAnswer(2)}
            >
              <span
                className={`text-lg ${activeIndex === 2 ? 'text-blue-600' : 'text-gray-800'}`}
              >
                Can I take a course without registering?
              </span>
              <span>{activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <div
              className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                activeIndex === 2 ? 'max-h-[500px]' : ''
              }`}
              style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
            >
              <p className="p-4 text-gray-700">
                No, you need to create an account to enroll in courses and track your progress. Registration is quick and free. Once signed up, you'll have access to all your courses and progress at any time.
              </p>
            </div>
          </div>

          {/* Question 4 */}
          <div className="border-b border-gray-300">
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                activeIndex === 3 ? 'text-blue-600' : 'text-gray-800'
              } rounded-md transition-colors duration-300`}
              onClick={() => toggleAnswer(3)}
            >
              <span
                className={`text-lg ${activeIndex === 3 ? 'text-blue-600' : 'text-gray-800'}`}
              >
                Are the courses free or do they require payment?
              </span>
              <span>{activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <div
              className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                activeIndex === 3 ? 'max-h-[500px]' : ''
              }`}
              style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
            >
              <p className="p-4 text-gray-700">
                We offer both free and paid courses. Some courses are available for free, while others require a one-time payment or subscription. Course prices are clearly listed on the course page before you enroll.
              </p>
            </div>
          </div>

          {/* Question 5 */}
          <div className="border-b border-gray-300">
            <div
              className={`flex justify-between items-center p-4 cursor-pointer ${
                activeIndex === 4 ? 'text-blue-600' : 'text-gray-800'
              } rounded-md transition-colors duration-300`}
              onClick={() => toggleAnswer(4)}
            >
              <span
                className={`text-lg ${activeIndex === 4 ? 'text-blue-600' : 'text-gray-800'}`}
              >
                How do I enroll in a course?
              </span>
              <span>{activeIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}</span>
            </div>
            <div
              className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                activeIndex === 4 ? 'max-h-[500px]' : ''
              }`}
              style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
            >
              <p className="p-4 text-gray-700">
                To enroll in a course, simply browse our course catalog and click on the course you're interested in. If the course is free, you can directly enroll. If it's a paid course, you'll be prompted to complete the payment process before enrolling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
