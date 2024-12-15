import React, { useState } from 'react';

export default function MyAccount() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and signup views

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-teal-500">
      <div className="w-full max-w-lg bg-white p-12 rounded-3xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          {isLogin ? 'Login to Your Account' : 'Create a New Account'}
        </h2>

        {/* Toggle Button for Login / Sign Up */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-8 py-3 w-1/2 rounded-l-3xl text-lg font-semibold transition-all duration-300 ease-in-out ${
              isLogin ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-8 py-3 w-1/2 rounded-r-3xl text-lg font-semibold transition-all duration-300 ease-in-out ${
              !isLogin ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {isLogin ? (
          <form>
            <div className="mb-6">
              <label htmlFor="loginEmail" className="block text-gray-700 text-sm font-semibold">Email</label>
              <input
                type="email"
                id="loginEmail"
                className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="loginPassword" className="block text-gray-700 text-sm font-semibold">Password</label>
              <input
                type="password"
                id="loginPassword"
                className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              Login
            </button>
          </form>
        ) : (
          // Sign Up Form (with fewer fields)
          <form>
            <div className="mb-6">
              <label htmlFor="username" className="block text-gray-700 text-sm font-semibold">Username</label>
              <input
                type="text"
                id="username"
                className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                placeholder="Choose a username"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold">Email</label>
              <input
                type="email"
                id="email"
                className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold">Password</label>
              <input
                type="password"
                id="password"
                className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                placeholder="Create a password"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-gray-700 text-sm font-semibold">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                className="w-full p-4 mt-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md"
                placeholder="Confirm your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 px-6 rounded-xl hover:bg-gradient-to-r hover:from-green-600 hover:to-green-700 transition-all duration-300"
            >
              Sign Up
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
