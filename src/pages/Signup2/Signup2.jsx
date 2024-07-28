// src/components/Signup2.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import frame from "../../assets/images/signup2/Frame.png";
import hide from "../../assets/images/signup2/hide.png";
import Logo from "../../assets/images/logo.png";

const Signup2 = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const InputField = ({ type, placeholder, extraInfo }) => (
    <div className="mb-2 relative">
      <input
        type={type}
        className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border border-gray-300 rounded-md focus:border-[#568302] focus:ring-[#568302] focus:bg-green-200 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder={placeholder}
      />
      {type === "password" && (
        <img
          src={hide}
          alt="Hide"
          className="absolute right-3 top-3 h-4 w-4 text-gray-400"
        />
      )}
      {extraInfo && <small className="text-xs">{extraInfo}</small>}
    </div>
  );

  const CheckboxField = ({ id, label }) => (
    <div className="flex items-start mb-4">
      <input
        id={id}
        aria-describedby={id}
        type="checkbox"
        className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
      />
      <label
        htmlFor={id}
        className="text-xs ml-3 leading-3 font-small text-gray-900"
      >
        {label}
      </label>
    </div>
  );

  return (
    <div className="mb-5">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between pr-6 sm:pr-10 sm:px-4 text-black">
        <div className="flex items-center">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="mr-2" />
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

      <div className="flex justify-center gap-0">
        <div className="p-8">
          <h2 className="text-xl font-semibold text-black-300 mb-4 text-center">
            Register with email
          </h2>
          <form className="mt-6 max-w-[584px]">
            <InputField
              type="text"
              placeholder="Full name"
              extraInfo="Your full name will not be publicly visible"
              className="max-w-[584px]"
            />
            <InputField
              type="text"
              placeholder="Username"
              extraInfo="Please use only letters and numbers. Pick something you like - usernames can't be changed later."
            />
            <InputField type="email" placeholder="Email" />
            <div className="mt-3">
              <InputField
                type="password"
                placeholder="Password"
                extraInfo="Please use only letters and numbers. Pick something you like - usernames can't be changed later."
              />
            </div>
            <InputField type="password" placeholder="Confirm Password" />
            <div className="mt-7 text-sm">
              <CheckboxField
                id="checkbox-1"
                label="I'd like to receive personalised offers and be the first to receive updates about latest Dashme Africa."
              />

              <CheckboxField
                id="checkbox-2"
                label="By registering, I confirm that I accept Dashme Africa's Terms and Conditions, and I have read the Privacy Policy, and that I'm at least 18 years old."
              />
            </div>
            <div className="mt-10">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#568302] rounded-md hover:scale-95 focus:outline-none focus:bg-purple-600 font-medium text-lg">
                Register
              </button>
            </div>
          </form>
          <div className="text-center w-full p-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link to="/Login" className="text-[#568203]">
                Log in
              </Link>
              <br />
              <Link to="/Help" className="text-[#568203]">
                Having trouble?
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden max-w-[638px] mr-5 lg:block h-86 rounded-md bg-black">
          <img
            src={frame}
            alt="Signup Image"
            className="max-w-[638px] mt-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup2;
