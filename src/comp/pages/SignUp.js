import React, { useState } from "react";
import SignupPagePic from "../Public Asset/SignupPage.jpg"

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-green-100 to-green-200">
      <div className="flex w-full max-w-7xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left Side - Agriculture Theme */}
        <div className="hidden lg:block w-1/2 bg-gradient-to-br from-green-700 via-green-600 to-green-500 p-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Welcome to Agri Shop!
          </h2>
          <p className="text-white mb-6">
            Your one-stop solution for sustainable farming. Discover tools,
            fertilizers, and expert guidance to boost your harvest and grow
            better every season.
          </p>
          <img
        src={SignupPagePic}
        alt="Agriculture Theme"
        className="rounded-lg shadow-lg"
        style={{ width: "600px", height: "500px" }}
      />

        </div>

        {/* Right Side - Sign Up Form */}
        <div className="w-full lg:w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center text-green-800">
            Create Your Account
          </h2>
          <p className="text-center text-gray-600 mb-6">
            Sign up to explore the Agri Shop and grow with us!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
              />
            </div>

            {/* Address */}
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-green-600 focus:border-green-600 sm:text-sm"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-700 text-white font-bold rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-green-800 hover:underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
