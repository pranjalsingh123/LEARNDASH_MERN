import React from 'react';
import { FaStar } from 'react-icons/fa'; // For the star ratings

export default function Testimonials() {
  return (
    <div className="container mx-auto p-8 bg-gray-50">
      <div className="text-center mt-24">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">What Our Students Have To Say</h2>
        <p className="text-lg text-gray-600 mb-12">See how our training programs have impacted the lives of our students.</p>
      </div>

      {/* Testimonials */}
      <div className="flex flex-wrap justify-center gap-12">
        {/* Testimonial 1 */}
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                src="https://img.freepik.com/free-photo/handsome-young-indian-student-man-holding-notebooks-while-standing-street_231208-2773.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid" // Replace with actual student image
                alt="Student 1"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4">Ravi Kumar</p>
            <p className="text-gray-600 mb-6">"The courses I took really elevated my career! I gained so much knowledge, and the support I received was amazing."</p>
            <div className="flex justify-center">
              {/* Star Rating */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                src="https://img.freepik.com/free-photo/expressive-young-girl-posing-studio_176474-78630.jpg?t=st=1733974623~exp=1733978223~hmac=d54d2d454fee5bcf91d9d5897a1af1310adc1b65662a33d751f6822201100993&w=1060" alt='Student 2'
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4">Priya Sharma</p>
            <p className="text-gray-600 mb-6">"The platform is excellent for anyone wanting to upgrade their skills. The free courses are comprehensive and easy to follow."</p>
            <div className="flex justify-center">
              {/* Star Rating */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                src="https://img.freepik.com/free-photo/close-up-portrait-young-handsome-man_114579-78887.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid" // Replace with actual student image
                alt="Student 3"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4">Sanjay Verma</p>
            <p className="text-gray-600 mb-6">"LearnDash has been a game-changer for me. I can now confidently apply for higher-level jobs thanks to the skills I acquired."</p>
            <div className="flex justify-center">
              {/* Star Rating */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial 4 (Indian student) */}
        <div className="w-full sm:w-1/2 md:w-1/3 p-4">
          <div className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex justify-center mb-4">
              <img
                src="https://img.freepik.com/free-photo/indian-business-man-with-crossed-arm-dark-wall_231208-2668.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid" // Replace with actual student image
                alt="Student 4"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-500"
              />
            </div>
            <p className="text-xl font-semibold text-gray-800 mb-4">Aarav Patel</p>
            <p className="text-gray-600 mb-6">"The courses at LearnDash helped me gain the skills needed to land my dream job in software development."</p>
            <div className="flex justify-center">
              {/* Star Rating */}
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-yellow-400" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
