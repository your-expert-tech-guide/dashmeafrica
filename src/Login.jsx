// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import frame from "./assets/frame.png";
import logo from "./assets/logo.png";
import google from "./assets/google.png";
import apple from "./assets/apple.png";
import hide from "./assets/hide.png";
import PasswordInput from "./Input";
const Login = () => {
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
          <div className="mr-8">
            <button className="inline-block font-lg mr-8  rounded-lg border border-solid border-[#568203] p-2 w-15 text-xs font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-black-200  focus:border-#568203 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-black-200 active:text-dark:hover:bg-neutral-100 dark">
              <Link to="/Signup2">Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>

      {/* Signup Content */}
      <div className="flex">
        <div className="w-1/2 p-3 m-8">
          {/* Register with Email */}
          <h2 className="text-2xl font-semibold text-black-600 mb-6 text-center">
            Log In
          </h2>

          <div className="">
            <input
              type="email"
              name="email"
              id="email"
              required
              className=" block w-full px-4 py-2 mt-2 text-[#568302] bg-white border rounded-md focus:border-black focus:bg-[#DAF4A8]  focus:outline-none  focus:ring-opacity-40"
              placeholder="Enter your email"
            />
            
          </div>
          <div className="">
            <PasswordInput />
          </div>

          <div className="mt-6 ">
            <button className="w-full mt-8 px-4 py-2  text-white transition-colors duration-200 transform bg-[#568302] rounded-md hover:bg-black focus:outline-none ">
              Log In
            </button>
            <div className="mb-10">
              <span className="text-[#568302] float-right text-xs ">
                Forgotten your password?
              </span>
            </div>
          </div>

          <div className="my-4 mt-16 mb-10 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
            <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
              OR
            </p>
          </div>

          <button className="w-full max-w-full shadow-sm rounded-lg p-1 border-2 border-black-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
            <div className="bg-white p-1 rounded-full">
              <img
                src={google}
                alt="google Image"
                className="w-6"
                viewBox="0 0 32 32"
              />
            </div>
            <span className="ml-4">Register with Google</span>
          </button>
          <button className="w-full max-w-full  shadow-sm rounded-lg p-1 border-2 border-black-600 text-gray-800 flex items-center justify-center mb-10 transition-all duration-300 ease-in-out focus:outline hover:shadow focus:shadow-sm focus:shadow-outline mt-5">
            <div className="bg-white p-1 rounded-full">
              <img
                src={apple}
                alt="apple Image"
                className="w-6"
                viewBox="0 0 32 32"
              />
            </div>
            <span className="ml-4">Register with Apple</span>
          </button>

          {/* Footer */}
          <div className="text-center w-full p-4 ">
            <p className="text-gray-600">
              <a href="#" className=" text-[#568203] text-sm ">
                Having trouble?
              </a>
            </p>
          </div>
        </div>

        <div className="w-1/2 h-86 mb-14 rounded-md mr-8 bg-black">
          {/* Image */}
          <img
            src={frame}
            alt="Signup Image"
            className="w-full mt-48 mb-40  object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
