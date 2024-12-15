import React from "react";
import tr from "../images/training.png";

export default function Card() {
  return (
    <div className="h-full min-h-screen w-full bg-gray-800 pt-12 p-4">
      <div className="grid gap-14 md:grid-cols-3 md:gap-5">
        {/* First Card */}
        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <svg
              viewBox="0 0 33 46"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
            >
              <path
                d="M24.75 23H8.25V28.75H24.75V23ZM32.3984 9.43359L23.9852 0.628906C23.5984 0.224609 23.0742 0 22.5242 0H22V11.5H33V10.952C33 10.3859 32.7852 9.83789 32.3984 9.43359ZM19.25 12.2188V0H2.0625C0.919531 0 0 0.961328 0 2.15625V43.8438C0 45.0387 0.919531 46 2.0625 46H30.9375C32.0805 46 33 45.0387 33 43.8438V14.375H21.3125C20.1781 14.375 19.25 13.4047 19.25 12.2188ZM5.5 6.46875C5.5 6.07164 5.80766 5.75 6.1875 5.75H13.0625C13.4423 5.75 13.75 6.07164 13.75 6.46875V7.90625C13.75 8.30336 13.4423 8.625 13.0625 8.625H6.1875C5.80766 8.625 5.5 8.30336 5.5 7.90625V6.46875ZM5.5 12.2188C5.5 11.8216 5.80766 11.5 6.1875 11.5H13.0625C13.4423 11.5 13.75 11.8216 13.75 12.2188V13.6562C13.75 14.0534 13.4423 14.375 13.0625 14.375H6.1875C5.80766 14.375 5.5 14.0534 5.5 13.6562V12.2188ZM27.5 39.5312C27.5 39.9284 27.1923 40.25 26.8125 40.25H19.9375C19.5577 40.25 19.25 39.9284 19.25 39.5312V38.0938C19.25 37.6966 19.5577 37.375 19.9375 37.375H26.8125C27.1923 37.375 27.5 37.6966 27.5 38.0938V39.5312ZM27.5 21.5625V30.1875C27.5 30.9817 26.8847 31.625 26.125 31.625H6.875C6.11531 31.625 5.5 30.9817 5.5 30.1875V21.5625C5.5 20.7683 6.11531 20.125 6.875 20.125H26.125C26.8847 20.125 27.5 20.7683 27.5 21.5625Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Actionable Training
          </h1>
          <p className="px-4 text-gray-500">
            Your goal is to clean the provided dataset by removing duplicates,
            handling missing values, and formatting the data for analysis. Once
            completed, you’ll have a clean dataset ready for analysis. This
            challenge will help you practice essential data wrangling skills
            that are crucial for any data project
          </p>
        </div>

        {/* Second Card */}
        <div
          data-aos-delay="150"
          className="rounded-xl bg-white p-6 text-center shadow-xl"
        >
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full shadow-lg bg-rose-500 shadow-rose-500/40">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
            >
              <path
                d="M12 0C11.0532 0 10.2857 0.767511 10.2857 1.71432V5.14285H13.7142V1.71432C13.7142 0.767511 12.9467 0 12 0Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M36 0C35.0532 0 34.2856 0.767511 34.2856 1.71432V5.14285H37.7142V1.71432C37.7143 0.767511 36.9468 0 36 0Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M42.8571 5.14282H37.7143V12C37.7143 12.9468 36.9468 13.7143 36 13.7143C35.0532 13.7143 34.2857 12.9468 34.2857 12V5.14282H13.7142V12C13.7142 12.9468 12.9467 13.7143 11.9999 13.7143C11.0531 13.7143 10.2856 12.9468 10.2856 12V5.14282H5.14285C2.30253 5.14282 0 7.44535 0 10.2857V42.8571C0 45.6974 2.30253 48 5.14285 48H42.8571C45.6975 48 48 45.6974 48 42.8571V10.2857C48 7.44535 45.6975 5.14282 42.8571 5.14282ZM44.5714 42.8571C44.5714 43.8039 43.8039 44.5714 42.857 44.5714H5.14285C4.19605 44.5714 3.42854 43.8039 3.42854 42.8571V20.5714H44.5714V42.8571Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M13.7142 23.9999H10.2857C9.33889 23.9999 8.57138 24.7674 8.57138 25.7142C8.57138 26.661 9.33889 27.4285 10.2857 27.4285H13.7142C14.661 27.4285 15.4285 26.661 15.4285 25.7142C15.4285 24.7674 14.661 23.9999 13.7142 23.9999Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M25.7143 23.9999H22.2857C21.3389 23.9999 20.5714 24.7674 20.5714 25.7142C20.5714 26.661 21.3389 27.4285 22.2857 27.4285H25.7143C26.6611 27.4285 27.4286 26.661 27.4286 25.7142C27.4286 24.7674 26.6611 23.9999 25.7143 23.9999Z"
                fill="#F5F5FC"
              ></path>
              <path
                d="M37.7143 23.9999H34.2857C33.3389 23.9999 32.5714 24.7674 32.5714 25.7142C32.5714 26.661 33.3389 27.4285 34.2857 27.4285H37.7143C38.6611 27.4285 39.4286 26.661 39.4286 25.7142C39.4286 24.7674 38.6611 23.9999 37.7143 23.9999Z"
                fill="#F5F5FC"
              ></path>
            </svg>
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Interesting Quizzes
          </h1>
          <p className="px-4 text-gray-500">
            This quiz goes beyond the basics to test your knowledge of complex
            Python concepts like object-oriented programming, decorators, and
            advanced data structures. Designed to challenge you with time-based
            questions, this quiz helps reinforce your understanding of Python
            fundamentals in a fun and engaging way.
          </p>
        </div>

        {/* Third Card */}
        <div
          data-aos-delay="300"
          className="rounded-xl bg-white p-6 text-center shadow-xl"
        >
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/40">
            <svg
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
            >
              <path
                d="M11.25 0C10.575 0 10 0.575 10 1.25V6.25H5.25C4.575 6.25 4 6.825 4 7.5C4 8.175 4.575 8.75 5.25 8.75H10V13.75C10 14.425 10.575 15 11.25 15C11.925 15 12.5 14.425 12.5 13.75V8.75H17.25C17.925 8.75 18.5 8.175 18.5 7.5C18.5 6.825 17.925 6.25 17.25 6.25H12.5V1.25C12.5 0.575 11.925 0 11.25 0Z"
                fill="white"
              ></path>
              <path
                d="M38.25 0C37.575 0 37 0.575 37 1.25V6.25H32.25C31.575 6.25 31 6.825 31 7.5C31 8.175 31.575 8.75 32.25 8.75H37V13.75C37 14.425 37.575 15 38.25 15C38.925 15 39.5 14.425 39.5 13.75V8.75H44.25C44.925 8.75 45.5 8.175 45.5 7.5C45.5 6.825 44.925 6.25 44.25 6.25H39.5V1.25C39.5 0.575 38.925 0 38.25 0Z"
                fill="white"
              ></path>
            </svg>
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Premium Material
          </h1>
          <p className="px-4 text-gray-500">
            This quiz goes beyond the basics to test your knowledge of complex
            Python concepts like object-oriented programming, decorators, and
            advanced data structures. Personalized Feedback: Receive in-depth
            feedback on your answers, along with expert tips and resources to
            improve your coding skills.
          </p>
        </div>
        {/*Fourth Card */}
        <div
          data-aos-delay="300"
          className="rounded-xl bg-white p-6 text-center shadow-xl"
        >
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              class="h-6 w-6 text-white"
            >
              <path
                d="M40 8H8C6.89543 8 6 8.89543 6 10V30C6 31.1046 6.89543 32 8 32H40C41.1046 32 42 31.1046 42 30V10C42 8.89543 41.1046 8 40 8ZM8 30V10H40V30H8ZM6 33C6 33.5523 6.44772 34 7 34H41C41.5523 34 42 33.5523 42 33H6Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Premium Material
          </h1>
          <p className="px-4 text-gray-500">
            This quiz goes beyond the basics to test your knowledge of complex
            Python concepts like object-oriented programming, decorators, and
            advanced data structures. Personalized Feedback: Receive in-depth
            feedback on your answers, along with expert tips and resources to
            improve your coding skills.
          </p>
        </div>
        {/* Fifth Card */}
        <div
          data-aos-delay="300"
          className="rounded-xl bg-white p-6 text-center shadow-xl"
        >
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-indigo-400 shadow-lg shadow-indigo-500/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              class="h-6 w-6 text-white"
            >
              <path
                d="M24 2C12.9543 2 4 10.9543 4 22C4 33.0457 12.9543 42 24 42C35.0457 42 44 33.0457 44 22C44 10.9543 35.0457 2 24 2ZM24 38C14.268 38 6 29.732 6 22C6 14.268 14.268 6 24 6C33.732 6 42 14.268 42 22C42 29.732 33.732 38 24 38ZM24 18C25.1046 18 26 18.8954 26 20C26 21.1046 25.1046 22 24 22C22.8954 22 22 21.1046 22 20C22 18.8954 22.8954 18 24 18ZM24 28C26.2091 28 28 29.7909 28 32C28 33.1046 27.1046 34 26 34C24.8954 34 24 33.1046 24 32C24 30.8954 24.8954 30 26 30C26.5513 30 27.0478 30.2001 27.2751 30.5383C27.5023 30.8766 27.5 31.3129 27.2751 31.6509C26.9994 32.0907 26.4998 32.3451 25.9877 32.1542C24.9747 31.6713 24 31 24 30C24 29.7909 24.8954 29 24 28Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Premium Material
          </h1>
          <p className="px-4 text-gray-500">
            This quiz goes beyond the basics to test your knowledge of complex
            Python concepts like object-oriented programming, decorators, and
            advanced data structures. Personalized Feedback: Receive in-depth
            feedback on your answers, along with expert tips and resources to
            improve your coding skills.
          </p>
        </div>

        {/* Sixt Card */}
        <div className="rounded-xl bg-white p-6 text-center shadow-xl">
          <div className="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              class="h-6 w-6 text-white"
            >
              <path
                d="M12 2C10.8954 2 10 2.89543 10 4V44C10 44.5523 10.4477 45 11 45H37C37.5523 45 38 44.5523 38 44V4C38 2.89543 37.1046 2 36 2H12ZM11 4H37V44H11V4ZM12 6V42H36V6H12Z"
                fill="white"
              />
            </svg>
          </div>
          <h1 className="text-darken mb-3 text-xl font-medium lg:px-14">
            Actionable Training
          </h1>
          <p className="px-4 text-gray-500">
            Your goal is to clean the provided dataset by removing duplicates,
            handling missing values, and formatting the data for analysis. Once
            completed, you’ll have a clean dataset ready for analysis. This
            challenge will help you practice essential data wrangling skills
            that are crucial for any data project
          </p>
        </div>
      </div>
    </div>
  );
}
