import React from 'react';

export default function Industry() {
  return (
    <div className="container mx-auto p-8 bg-white">
      <div className="text-center mt-24">
        <h2 className="font-bold text-3xl mb-8">Our Esteemed Partners & Institutes</h2>
        <p className="text-lg text-gray-600">We proudly collaborate with leading institutes and industry partners to bring you top-quality training and resources.</p>
      </div>

      {/* Institutes Logos */}
      <div className="mt-16">
        <h3 className="font-semibold text-xl text-center mb-8">Institutes We Collaborate With</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Example Logos - Replace these with your actual logo URLs */}
          <div className="w-1/4 sm:w-1/5 md:w-1/6 p-4">
            <img
              src="https://img.freepik.com/premium-vector/college-logo-design-template-vector-illustration_139372-346.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid"
              alt="Institute 1"
              className="h-16 mx-auto object-contain transition-transform transform hover:scale-110"
            />
          </div>
          <div className="w-1/4 sm:w-1/5 md:w-1/6 p-4">
            <img
              src="https://img.freepik.com/premium-vector/free-vector-university-logo-silhouette_1188713-2805.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid" alt="Institute 2"
              className="h-16 mx-auto object-contain transition-transform transform hover:scale-110"
            />
          </div>
          <div className="w-1/4 sm:w-1/5 md:w-1/6 p-4">
            <img
              src="https://img.freepik.com/free-vector/hand-drawn-high-school-logo-design_23-2149608326.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid"alt="Institute 3"
              className="h-16 mx-auto object-contain transition-transform transform hover:scale-110"
            />
          </div>
          <div className="w-1/4 sm:w-1/5 md:w-1/6 p-4">
            <img
              src="https://img.freepik.com/premium-vector/education-university-college-school-academy-institute-club-logo-learning-logo-emblem-style_692083-1235.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid"
              alt="Institute 2"
              className="h-16 mx-auto object-contain transition-transform transform hover:scale-110"
            />
          </div>
          <div className="w-1/4 sm:w-1/5 md:w-1/6 p-4">
            <img
              src="https://img.freepik.com/premium-vector/education-badge-logo-design-university-high-school-emblem-vector-logo-template_441059-500.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid"
              alt="Institute 3"
              className="h-16 mx-auto object-contain transition-transform transform hover:scale-110"
            />
          </div>
          {/* Add more logos as needed */}
        </div>
      </div>

      {/* Partners Logos */}
      <div className="mt-16">
        <h3 className="font-semibold text-xl text-center mb-8">Our Industry Partners</h3>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Example Logos - Replace these with your actual logo URLs */}
          <div className="w-1/4 sm:w-1/5 md:w-1/6 p-4">
            <img
              src="https://seeklogo.com/images/L/l-oreal-logo-7AC1335186-seeklogo.com.png" alt="Partner 1"
              className="h-16 mx-auto object-contain transition-transform transform hover:scale-110"
            />
          </div>
          <div className="w-1/4 sm:w-1/5 md:w-1/6 p-4">
            <img
              src="https://images.seeklogo.com/logo-png/13/2/tata-logo-png_seeklogo-135877.png?v=638687555320000000"
              alt="Partner 2"
              className="h-16 mx-auto object-contain transition-transform transform hover:scale-110"
            />
          </div>
          <div className="w-1/4 sm:w-1/5 md:w-1/6 p-4">
            <img
              src="https://seeklogo.com/images/B/BR_petrobras-logo-55E08AB2A1-seeklogo.com.png"
              alt="Partner 3"
              className="h-16 mx-auto object-contain transition-transform transform hover:scale-110"
            />
          </div>
          {/* Add more logos as needed */}
        </div>
      </div>
    </div>
  );
}
