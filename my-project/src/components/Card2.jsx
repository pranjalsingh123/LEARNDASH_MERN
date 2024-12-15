import React, { useState } from "react";

export default function Card2() {
  const [showAll, setShowAll] = useState(false);

  // Cards data
  const cards = [
    {
      title: "Introduction to Python",
      price: "$99.99",
      image:
        "https://img.freepik.com/premium-photo/programing-python_1292885-18802.jpg?w=740",
      rating: 4,
    },
    {
      title: "Web Development Bootcamp",
      price: "$149.99",
      image:
        "https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid",
      rating: 4.5,
    },
    {
      title: "Data Science and Machine Learning",
      price: "$199.99",
      image:
        "https://img.freepik.com/free-photo/representation-user-experience-interface-design_23-2150169834.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid",
      rating: 5,
    },
    {
      title: "JavaScript Essentials",
      price: "$79.99",
      image:
        "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept-bright-vibrant-violet-isolated-illustration_335657-986.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid",
      rating: 3.5,
    },
    {
      title: "Machine Learning A-Z",
      price: "$119.99",
      image:
        "https://img.freepik.com/premium-photo/3d-illustration-robot-humanoid-reading-book-solving-math_31965-10223.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid",
      rating: 4.7,
    },
    {
      title: "Full Stack Web Development",
      price: "$149.99",
      image:
        "https://img.freepik.com/free-vector/server-room-cloud-storage-icon-datacenter-database-concept-data-exchange-process_39422-556.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid",
      rating: 4.2,
    },
    {
      title: "React JS for Beginners",
      price: "$99.99",
      image:
        "https://img.freepik.com/premium-photo/man-with-computer-with-computer-background_1129891-19195.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid",
      rating: 4.3,
    },
    {
      title: "Cloud Computing with AWS",
      price: "$199.99",
      image:
        "https://img.freepik.com/free-photo/programmer-holding-laptop-with-cloud-computing_53876-71510.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid",
      rating: 4.8,
    },
    {
      title: "Digital Marketing Masterclass",
      price: "$129.99",
      image:
        "https://img.freepik.com/free-photo/man-suit-standing-office-with-clipboard-pointing-poster-with-words_1098-17121.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid",
      rating: 4.6,
    },
  ];

  const toggleCards = () => {
    setShowAll(!showAll);
  };

  const visibleCards = showAll ? cards : cards.slice(0, 3);

  return (
    <div className="antialiased text-gray-900 flex justify-center items-center min-h-screen bg-gray-200">
      <div className="w-full max-w-7xl px-4 py-8">
        {/* Title */}
        <h2 className="text-3xl font-serif font-semibold text-center text-black mb-20">
          Our Most Popular Courses
          <br />
          <span className="text-base font-light font-serif text-orange-950">
            Looking for the best courses to boost your skills? You’re in the
            right place! Our Most Popular Courses are designed to provide
            high-quality content that learners love.
          </span>
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center transition-all duration-500 ease-in-out">
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md w-64 mx-auto transform transition duration-500 hover:scale-105"
            >
              <img
                className="h-32 w-full object-cover object-center"
                src={card.image}
                alt={card.title}
              />
              <div className="p-4">
                <h4 className="mt-2 font-semibold text-lg leading-tight truncate">
                  {card.title}
                </h4>
                <div className="mt-4 flex items-center">
                  {/* Rating System */}
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        fill={i < card.rating ? "currentColor" : "none"}
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 17.27l-5.18 3.09 1.64-6.91-5.45-4.73 6.92-.61L12 2l2.07 6.51 6.92 .61-5.45 4.73 1.64 6.91z"
                        />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-600 text-sm">{card.rating} / 5</span>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-lg font-semibold">{card.price}</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:bg-blue-600 transform hover:scale-105">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more/less button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={toggleCards}
            className="bg-blue-500 text-white px-6 py-2 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-blue-600"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </div>
    </div>
  );
}
