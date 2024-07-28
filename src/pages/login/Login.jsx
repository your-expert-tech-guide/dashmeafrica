import React, { useState } from "react";
import { Link } from "react-router-dom";
import frame from "../../assets/images/signup2/Frame.png";
import hide from "../../assets/images/signup2/hide.png";
import Logo from "../../assets/images/logo.png";
import google from "../../assets/images/signup/google.png";
import apple from "../../assets/images/signup/apple.png";

const Login = () => {
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

  return (
    <div className="mb-5">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between pr-6 sm:pr-10 sm:px-4 text-black">
        <div className="flex items-center">
          {/* Logo */}
          <img src={Logo} alt="Logo" className="mr-2" />
        </div>
        <div className="flex items-center space-x-4 md:space-x-10">
          {/* Login Button with fixed border */}
          <button
            className="inline-block font-lg rounded-lg border border-solid border-[#568203] p-1 sm:text-lg font-medium leading-normal text-black transition duration-150 ease-in-out hover:text-gray-500 focus:text-gray-500 hover:border-black-100 hover:bg-gray-200 focus:border-[#568203] focus:outline-none focus:ring-0 active:border-black-200 active:text-dark"
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
        <div className="p-8">
          <h2 className="text-xl font-semibold text-black-300 mb-4 text-center">
            Log In
          </h2>
          <form className="mt-6 max-w-[584px]">
            <InputField type="text" placeholder="Email or Username" />
            <InputField type="password" placeholder="Password" />
            <div className="mt-10">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#568302] rounded-md hover:scale-95 focus:outline-none focus:bg-purple-600 font-medium text-lg">
                Log In
              </button>
              <p className="text-end text-[#568302] mt-2">
                <Link to="forgot-password">Forgotten your password?</Link>
              </p>
            </div>
          </form>
          <div>
            {/* OR Divider */}
            <div className="my-4 mt-12 mb-12 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
              <p className="mx-4 mb-0 text-center font-semibold text-black">
                OR
              </p>
            </div>

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
          </div>
          <div className="text-center w-full p-4">
            <p className="text-gray-600 mt-5">
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

export default Login;
