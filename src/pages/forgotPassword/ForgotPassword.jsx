import React, { useState } from "react";
import { Link } from "react-router-dom";
import frame from "../../assets/images/signup2/Frame.png";
import hide from "../../assets/images/signup2/hide.png";
import Logo from "../../assets/images/logo.png";

const ForgotPassword = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const InputField = ({ type, placeholder, extraInfo }) => (
    <div className="mb-5 relative">
      <input
        type={type}
        className="block w-[300px] min-[400px]:w-[350px] sm:w-[450px] lg:w-[450px] xl:w-[584px] px-4 py-2 mt-2 text-purple-700 bg-white border border-gray-300 rounded-md focus:border-[#568302] focus:ring-[#568302] focus:bg-green-200 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder={placeholder}
      />
    </div>
  );

  return (
    <div className="mb-5">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between pr-6 sm:pr-10 sm:px-4 text-black">
        <div className="flex items-center">
          {/* Logo */}
          <Link to="/">
            <img src={Logo} alt="Logo" className="mr-2" />
          </Link>
        </div>
        <div className="flex items-center space-x-4 md:space-x-10">
          {/* Login Button with fixed border */}
          <button
            className={`${
              activeTab === "login"
                ? "border-b-2 border-transparent"
                : "border-b-2 border-white"
            } hover:border-white focus:border-white`}
            onClick={() => handleTabChange("signup")}
          >
            <Link to="/login">Log In</Link>
          </button>
          {/* Signup Button with conditional border */}
          <button
            className={`${
              activeTab === "login"
                ? "border-b-2 border-transparent"
                : "border-b-2 border-white"
            } hover:border-white focus:border-white`}
            onClick={() => handleTabChange("login")}
          >
            <Link
              to="/signup2"
              className="hover:text-gray-500 focus:text-gray-500 text-base sm:text-xl"
            >
              Sign Up
            </Link>
          </button>
        </div>
      </nav>

      <div className="flex justify-center gap-0">
        <div className="p-8 h-[490px] flex flex-col justify-center">
          <h2 className="text-xl font-semibold text-black-300 mb-2 text-center">
            Forgotten your password?
          </h2>
          <form className="mt-6 max-w-[584px]">
            <InputField type="email" placeholder="Enter your email address" />
            <div className="mt-16">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#568302] rounded-md hover:scale-95 focus:outline-none focus:bg-purple-600 font-medium text-lg">
                Continue
              </button>
            </div>
          </form>

          <div className="text-center w-full p-4">
            <p className="mt-20">
              <Link to="/Help" className="text-[#568203]">
                Having trouble?
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden lg:flex items-center justify-center max-w-[638px] mr-5 rounded-md bg-black">
          <img
            src={frame}
            alt="Signup Image"
            className="max-w-[638px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
