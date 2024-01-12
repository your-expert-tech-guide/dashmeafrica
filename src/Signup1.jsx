// src/components/Signup.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import frame from "./assets/frame.png";
import logo from "./assets/logo.png";
import google from "./assets/google.png";
import apple from "./assets/apple.png";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4  text-black">
        <div className="flex items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="mr-2 " />
        </div>
        <div className="flex items-center space-x-4">
          {/* Login Button with Hidden Border */}
          <button
            className={`${
              activeTab === "login"
                ? "border-b-2 border-transparent"
                : "border-b-2 border-white"
            } hover:border-white focus:border-white`}
            onClick={() => handleTabChange("login")}
          >
            <Link to="/Login">Login</Link>
          </button>
          {/* Signup Button with Border */}
          <div className="">
            <button className="inline-block font-lg rounded-lg border mr-6 border-solid border-[#568203] p-2  w-15 text-xs font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-black-100 hover:bg-black-200  focus:border-#568203 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-black-200 active:text-dark:hover:bg-neutral-100 dark">
              <Link to="/Signup2">Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>

      {/* Signup Content */}
      <div className="flex">
        <div className="w-1/2 p-6 ml-4">
          {/* Register with Email */}
          <h2 className="text-2xl font-semibold text-black-600 mb-4 text-center">
            Register
          </h2>
          <p className="text-sm text-gray-700 mb-6 text-center ">
            Join to donate or sell to anyone in Nigeria with FREE DELIVERY
          </p>
          <button className="w-full max-w-full shadow-sm rounded-lg p-1 border-2 border-black-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none  focus:border-black focus:ring-opacity-40 mt-5">
            <div className="bg-white p-1 rounded-full">
              <img
                src={google}
                alt="google Image"
                className="w-6"
                
              />
            </div>
            <span className="ml-4">Register with Google</span>
          </button>
          <button className="w-full max-w-full shadow-sm rounded-lg p-1 border-2 border-black-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none  focus:border-black focus:ring-opacity-40 mt-5">
            <div className="bg-white p-1 rounded-full">
              <img
                src={apple}
                alt="apple Image"
                className="w-6"
                
              />
            </div>
            <span className="ml-4">Register with Apple</span>
          </button>

          <div className="my-4 mt-12 mb-12 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
              OR
            </p>
          </div>

          <button className="w-full max-w-full shadow-sm rounded-lg p-2 border-2 border-black-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none  focus:border-black focus:ring-opacity-40 mt-5">
            <span className="ml-4">
              <Link to="/Signup2">Register with Email</Link>
            </span>
          </button>

          {/* Footer */}
          <div className="text-center w-full p-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-[#568203] text-sm">
                <Link to="/Login">Login</Link>
              </a>
            </p>
          </div>
        </div>

        <div className="w-1/2 h-86 mb-12 rounded-md ml-2 mr-8 bg-black">
          {/* Image */}
          <img
            src={frame}
            alt="Signup Image"
            className="w-full mt-28 mb-20 object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
