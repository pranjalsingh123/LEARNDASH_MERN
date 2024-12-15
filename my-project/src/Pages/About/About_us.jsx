import React from "react";
import { useEffect, useState } from "react";


const AboutUs = () => {
  const [courseCount, setCourseCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [instructorCount, setInstructorCount] = useState(0);

  const animateCount = (target, setCount) => {
    let count = 0;
    const interval = setInterval(() => {
      count += Math.ceil(target / 100); // Increment count in smaller steps
      if (count >= target) {
        clearInterval(interval); // Stop counting when target is reached
        setCount(target); // Set final count value
      } else {
        setCount(count);
      }
    }, 20); // Adjust interval speed (lower = faster)
  };

  useEffect(() => {
    // Trigger the counting animation when the component is mounted
    animateCount(500, setCourseCount);
    animateCount(10000, setStudentCount);
    animateCount(100, setInstructorCount);
  }, []);
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="container mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-4xl font-extrabold text-blue-600 mb-6">About Us</h2>
        <p className="text-xl text-gray-700 mb-12">
          Empowering students globally to unlock their potential through
          knowledge.
        </p>

        {/* Our Story Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Story
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            LearnDash Academy was born out of a passion for high-quality
            education. Over the years, we've transformed countless lives with
            our world-class instructors, flexible learning schedules, and a
            commitment to excellence. Our goal is to bridge the gap between
            traditional education and real-world career success.
          </p>
        </div>

        {/* Student Reviews Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Student Reviews
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Review Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <p className="text-lg text-gray-600 mb-4">
                "LearnDash Academy has completely transformed my career. The
                hands-on learning approach was exactly what I needed!"
              </p>
              <h4 className="font-semibold text-gray-800">Amit Sharma</h4>
              <p className="text-sm text-gray-500">Software Engineer, India</p>
            </div>

            {/* Review Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <p className="text-lg text-gray-600 mb-4">
                "I gained practical skills that helped me secure my dream job.
                The instructors are amazing and genuinely care about students'
                success!"
              </p>
              <h4 className="font-semibold text-gray-800">Priya Mehta</h4>
              <p className="text-sm text-gray-500">Data Scientist, India</p>
            </div>

            {/* Review Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transition-all duration-300">
              <p className="text-lg text-gray-600 mb-4">
                "The flexibility of LearnDash Academy allowed me to learn at my
                own pace while working. I highly recommend it to anyone looking
                to upskill."
              </p>
              <h4 className="font-semibold text-gray-800">Ravi Kumar</h4>
              <p className="text-sm text-gray-500">
                Digital Marketing Expert, India
              </p>
            </div>
          </div>
        </div>

        {/* CEO & Co-CEO Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Meet Our Leaders
          </h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-10">
            {/* CEO */}
            <div className="text-center">
              <img
                src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/about-2-free-img.jpg" // Replace with CEO image
                alt="CEO"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">Dr. John Smith</h4>
              <p className="text-sm text-gray-500">CEO & Founder</p>
            </div>

            {/* Co-CEO */}
            <div className="text-center">
              <img
                src="https://websitedemos.net/learndash-academy-02/wp-content/uploads/sites/457/2019/05/about-1-free-img.jpg" // Replace with Co-CEO image
                alt="Co-CEO"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
              Lisa Green 
              </h4>
              <p className="text-sm text-gray-500">Co-CEO</p>
            </div>
          </div>
        </div>

        {/* Instructors Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            Our Instructors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Instructor Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://img.freepik.com/free-photo/eastern-woman_1303-5251.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid" // Replace with Instructor image
                alt="Instructor"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Dr. Surabhi Singh
              </h4>
              <p className="text-sm text-gray-500">Data Science Expert</p>
            </div>

            {/* Instructor Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://img.freepik.com/premium-photo/educator-bangladesh-poses-confidently-classroom-setting-lesson-generative-ai_166669-6306.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid" // Replace with Instructor image
                alt="Instructor"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Sukesh Tripathi
              </h4>
              <p className="text-sm text-gray-500">
                Digital Marketing Specialist
              </p>
            </div>

            {/* Instructor Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://img.freepik.com/premium-photo/portrait-young-handsome-indian-businessman-city_251136-60167.jpg?ga=GA1.1.2064293371.1733377456&semt=ais_hybrid"    alt="Instructor"
                className="rounded-full w-24 h-24 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold text-gray-800">
                Vikram Patel
              </h4>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </div>
          </div>
        </div>

        {/* Numbers Speak Section */}
        <div className=" bg-slate-100 text-black py-16 px-6">
          <div className="container mx-auto text-center">
            <h3 className="text-3xl font-semibold mb-12">Number Speaks</h3>
            <div className="flex flex-wrap justify-center gap-10">
              <div className="text-center">
                <p className="text-5xl font-extrabold">{courseCount}+ </p>
                <p className="text-lg font-semibold">Courses Offered</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-extrabold">{studentCount}+ </p>
                <p className="text-lg font-semibold">Students Enrolled</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-extrabold">{instructorCount}+ </p>
                <p className="text-lg font-semibold">Certified Instructors</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
