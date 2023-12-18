// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import frame from "./assets/frame.png";
import logo from "./assets/logo.png";
import hide from "./assets/hide.png";
import google from "./assets/google.png";
import PasswordConfirm from "./Confirmpassword";
import apple from "./assets/apple.png";
const Signup2 = () => {
  const [activeTab, setActiveTab] = useState("login");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

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
          <div className="mr-10">
            <button className="inline-block font-lg mr-8 rounded-lg border border-solid border-[#568203] p-2 w-15 text-xs font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-black-200  focus:border-#568203 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-black-200 active:text-dark:hover:bg-neutral-100 dark">
              <Link to="/Signup2">Sign Up</Link>
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        <div className="w-1/2 p-8">
          <h2 className="text-xl font-semibold text-black-300 mb-4 text-center">
            Register with email
          </h2>
          <form className="mt-6">
            <div className="mb-2">
              <input
                type="text"
                className="block w-full px-4 py-2 mt-5 text-purple-700 bg-white border border-gray-300 rounded-md focus:border-[#568302] focus:ring-[#568302] focus:bg-green-200 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Full name"
                required
              />
              <span>
                <small>Your full name will not be publicly visible </small>
              </span>
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="block w-full px-4 py-2 mt-5 text-purple-700 bg-white border border-gray-300 rounded-md focus:border-[#568302] focus:ring-[#568302] focus:bg-green-200 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
                required
              />
              <p className="text-xs leading-3 mb-4">
                Please use only letters and numbers. Pick something you like -
                usernames can’t be changed later.
              </p>
            </div>
            <div className="mb-2"></div>
            <div className="">
              <input
                className="block w-full px-4 py-2 mt-5 peer text-[#568302] bg-white border rounded-md focus:border-[#568302] focus:bg-green-200 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
                required
              />
            </div>
            <div className="mb-2">
              <PasswordConfirm />
            </div>
            <div class="flex items-start items-center mb-4">
              <input
                id="checkbox-3"
                aria-describedby="checkbox-3"
                type="checkbox"
                class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              />
              <label
                for="checkbox-3"
                class="text-xs ml-3  leading-3 font-small text-gray-900"
              >
                I’d like to receive personalised offers and be the first to
                receive updates about latest Dashme Africa.
              </label>
            </div>
            <div class="flex items-start items-center mb-4">
              <input
                id="checkbox-3"
                aria-describedby="checkbox-3"
                type="checkbox"
                class="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded"
              />
              <label
                for="checkbox-3"
                class="text-xs leading-3 ml-3 font-small text-gray-900"
              >
                By registering, I confirm that I accept Dashme Africa’s Terms
                and Conditions, and I have read the Privacy Policy, and that I’m
                at least 18 years old.
              </label>
            </div>

            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#568302] rounded-md hover:bg-black focus:outline-none focus:bg-purple-600">
                Register
              </button>
            </div>
          </form>
          {/* Footer */}
          <div className="text-center w-full p-4">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a href="#" className="text-[#568203]">
                Log in
              </a>
              <p>
                <a href="#" className="text-[#568203]">
                  Having trouble?
                </a>{" "}
              </p>
            </p>
          </div>
        </div>
        <div className="w-1/2 h-86 mb-12 rounded-md p-8 mr-8 bg-black">
          {/* Image */}
          <img
            src={frame}
            alt="Signup Image"
            className="w-full mt-48  object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default Signup2;
