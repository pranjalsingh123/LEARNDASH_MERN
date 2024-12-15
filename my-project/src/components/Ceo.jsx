import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import dropdown icon
import Co from '../images/ceo.png';

export default function Ceo() {
  const [activeIndex, setActiveIndex] = useState(null); // For toggling FAQ answers

  // Toggle function for FAQ answer visibility
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto p-8 bg-white"> {/* Added bg-white here to make the entire background white */}
      <div className="text-center mt-24">
        <h1 className="font-bold text-3xl">Be in Demand with Our Professional Training</h1>
        <br />
        <span>"Join our comprehensive training programs designed to equip you with the skills you need for success in today's fast-paced world. Whether you're looking to upskill, reskill, or start a new career, our expert-led courses will provide you with the knowledge and confidence to thrive in any industry."
        </span>
      </div>

      {/* Container for Image and FAQ */}
      <div className="flex flex-col md:flex-row mt-16 space-x-0 md:space-x-8">
        {/* Image Section - Left Side */}
        <div className="w-full md:w-1/3 mb-8 md:mb-0">
          <img
            src={Co} // Replace with the actual image path
            alt="Training"
            className="w-full h-full object-cover rounded-lg shadow-lg" // Removed border class
          />
          {/* Founder & CEO Text */}
          <div className="mt-4 text-center text-lg font-semibold text-gray-700 border-t border-gray-300 pt-2">
            Dr. John Smith — Founder & CEO
          </div>
        </div>

        {/* FAQ Section - Right Side */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-2xl mt-8 mb-8"> {/* Added margin to top and bottom of FAQ section */}
          <div className="bg-slate-50 text-center">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-300">
              <div
                className={`flex justify-between items-center p-4 cursor-pointer ${
                  activeIndex === 0 ? 'text-blue-600' : 'text-gray-800'
                } rounded-md transition-colors duration-300`} // Only text color changes
                onClick={() => toggleAnswer(0)}
              >
                <span className={`text-lg ${activeIndex === 0 ? 'text-blue-600' : 'text-gray-800'}`}>What is professional training?</span>
                <span>{activeIndex === 0 ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              <div
                className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                  activeIndex === 0 ? 'max-h-[500px]' : ''
                }`}
                style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
              >
                <p className="p-4 text-gray-700">
                  Professional training refers to programs designed to enhance specific skills and knowledge needed for career growth.
                </p>
              </div>
            </div>

            <hr />

            {/* FAQ Item 2 */}
            <div className="border-b border-gray-300">
              <div
                className={`flex justify-between items-center p-4 cursor-pointer ${
                  activeIndex === 1 ? 'text-blue-600' : 'text-gray-800'
                } rounded-md transition-colors duration-300`} // Only text color changes
                onClick={() => toggleAnswer(1)}
              >
                <span className={`text-lg ${activeIndex === 1 ? 'text-blue-600' : 'text-gray-800'}`}>How can this training help me?</span>
                <span>{activeIndex === 1 ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              <div
                className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                  activeIndex === 1 ? 'max-h-[500px]' : ''
                }`}
                style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
              >
                <p className="p-4 text-gray-700">
                  Our training equips you with in-demand skills, preparing you for success in various industries.
                </p>
              </div>
            </div>

            <hr />

            {/* FAQ Item 3 */}
            <div className="border-b border-gray-300">
              <div
                className={`flex justify-between items-center p-4 cursor-pointer ${
                  activeIndex === 2 ? 'text-blue-600' : 'text-gray-800'
                } rounded-md transition-colors duration-300`} // Only text color changes
                onClick={() => toggleAnswer(2)}
              >
                <span className={`text-lg ${activeIndex === 2 ? 'text-blue-600' : 'text-gray-800'}`}>Is certification provided?</span>
                <span>{activeIndex === 2 ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              <div
                className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                  activeIndex === 2 ? 'max-h-[500px]' : ''
                }`}
                style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
              >
                <p className="p-4 text-gray-700">
                  Yes, upon completion, you will receive a certification that can enhance your career prospects.
                </p>
              </div>
            </div>

            <hr />

            {/* FAQ Item 4 - New FAQ */}
            <div className="border-b border-gray-300">
              <div
                className={`flex justify-between items-center p-4 cursor-pointer ${
                  activeIndex === 3 ? 'text-blue-600' : 'text-gray-800'
                } rounded-md transition-colors duration-300`} // Only text color changes
                onClick={() => toggleAnswer(3)}
              >
                <span className={`text-lg ${activeIndex === 3 ? 'text-blue-600' : 'text-gray-800'}`}>What are the course prerequisites?</span>
                <span>{activeIndex === 3 ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              <div
                className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                  activeIndex === 3 ? 'max-h-[500px]' : ''
                }`}
                style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
              >
                <p className="p-4 text-gray-700">
                  There are no specific prerequisites for most courses. However, certain advanced courses may require basic knowledge in related subjects.
                </p>
              </div>
            </div>

            <hr />

            {/* FAQ Item 5 - Another New FAQ */}
            <div className="border-b border-gray-300">
              <div
                className={`flex justify-between items-center p-4 cursor-pointer ${
                  activeIndex === 4 ? 'text-blue-600' : 'text-gray-800'
                } rounded-md transition-colors duration-300`} // Only text color changes
                onClick={() => toggleAnswer(4)}
              >
                <span className={`text-lg ${activeIndex === 4 ? 'text-blue-600' : 'text-gray-800'}`}>How long does the training take?</span>
                <span>{activeIndex === 4 ? <FaChevronUp /> : <FaChevronDown />}</span>
              </div>
              <div
                className={`overflow-hidden max-h-0 transition-all duration-700 ease-in-out ${
                  activeIndex === 4 ? 'max-h-[500px]' : ''
                }`}
                style={{ paddingLeft: '1rem', paddingRight: '1rem' }}
              >
                <p className="p-4 text-gray-700">
                  The duration of the training varies depending on the course. However, most courses are designed to be completed at your own pace.
                </p>
              </div>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
