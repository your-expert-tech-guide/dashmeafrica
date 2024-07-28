import React, { useState } from "react";
import { Link } from "react-router-dom";
import google from "../../assets/images/signup/google.png";
import apple from "../../assets/images/signup/apple.png";
import cartLogo from "../../assets/images/signup/cartLogo.png";
import Logo from "../../assets/images/logo.png";

const Signup = () => {
  // useState hook to manage the active tab state
  const [activeTab, setActiveTab] = useState("login");

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between pr-6 sm:pr-10 sm:px-4 text-black">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="mr-2" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:space-x-10">
          {/* Login Button with conditional border */}
          <button
            className={`${
              activeTab === "login"
                ? "border-b-2 border-transparent"
                : "border-b-2 border-white"
            } hover:border-white focus:border-white`}
            onClick={() => handleTabChange("login")}
          >
            <Link
              to="/login"
              className="hover:text-gray-500 focus:text-gray-500 text-base sm:text-xl"
            >
              Login
            </Link>
          </button>
          {/* Signup Button with fixed border */}
          <button
            className="inline-block font-lg rounded-lg border mr-6 border-solid border-[#568203] p-2 w-15 sm:text-lg font-medium leading-normal text-black transition duration-150 ease-in-out hover:text-gray-500 focus:text-gray-500 hover:border-black-100 hover:bg-gray-200 focus:border-[#568203] focus:outline-none focus:ring-0 active:border-black-200 active:text-dark"
            onClick={() => handleTabChange("signup")}
          >
            <Link to="/signup2">Sign Up</Link>
          </button>
        </div>
      </nav>

      {/* Signup Content */}
      <div className="flex justify-center gap-10">
        <div className=" p-6">
          {/* Register Header */}
          <h2 className="text-2xl font-semibold text-black-600 mb-4 text-center">
            Register
          </h2>
          <p className="text-sm text-gray-700 mb-6 text-center">
            Join to donate or sell to anyone in Nigeria with FREE DELIVERY
          </p>
          {/* Register with Google Button */}
          <button className="w-full shadow-sm rounded-lg p-1 border-2 border-black-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out hover:border-black-700 focus:outline-none focus:border-black focus:ring-opacity-40 mt-5">
            <div className="bg-white p-1 rounded-full">
              <img src={google} alt="Google" className="w-6" />
            </div>
            <span className="ml-4">Register with Google</span>
          </button>
          {/* Register with Apple Button */}
          <button className="w-full shadow-sm rounded-lg p-1 border-2 border-black-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out hover:border-black-700 focus:outline-none focus:border-black focus:ring-opacity-40 mt-5">
            <div className="bg-white p-1 rounded-full">
              <img src={apple} alt="Apple" className="w-6" />
            </div>
            <span className="ml-4">Register with Apple</span>
          </button>

          {/* OR Divider */}
          <div className="my-4 mt-12 mb-12 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold text-black">OR</p>
          </div>

          {/* Register with Email Button */}
          <button className="w-full shadow-sm rounded-lg p-2 border-2 border-black-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out hover:border-black-700 focus:outline-none focus:border-black focus:ring-opacity-40 mt-5">
            <span className="ml-4">
              <Link to="/signup2">Register with Email</Link>
            </span>
          </button>

          {/* Footer */}
          <div className="text-center w-full p-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                to="/Login"
                className="text-[#568203] text-sm hover:text-gray-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden lg:block  h-86  rounded-md bg-black">
          {/* Image */}
          <img
            src={cartLogo}
            alt="Signup Image"
            className="w-full mt-28 mb-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
