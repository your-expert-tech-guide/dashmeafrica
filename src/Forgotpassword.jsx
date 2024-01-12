// src/components/Forgotpassword
//import React, { useState } from 'react';
import { Link } from "react-router-dom";
import frame from './assets/frame.png';
import logo from './assets/logo.png';


const Forgotpassword = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  

  return (
    <div>
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-4  text-black">
        <div className="flex items-center">
          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className="mr-2 "
          />
        </div>
        <div className="flex items-center space-x-4">
          {/* Login Button with Hidden Border */}
          <button
            className={`${
              activeTab === 'login' ? 'border-b-2 border-transparent' : 'border-b-2 border-white'
            } hover:border-white focus:border-white`}
            onClick={() => handleTabChange('login')}
          >
            <Link to="/Login">Login</Link>
          </button>
          {/* Signup Button with Border */}
          <div className="mr-8">
          <button
        
            className="inline-block font-lg  mr-8 rounded-lg border border-solid border-[#568203] p-2 w-15 text-xs font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-black-200  focus:border-#568203 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-black-200 active:text-dark:hover:bg-neutral-100 dark"
          >
            <Link to="/Signup2">Sign Up</Link>
          </button>
          </div>
        </div>
      </nav>

      {/* Signup Content */}
      <div className="flex">
        <div className="w-1/2 p-8">
          {/* Register with Email */}
          <h2 className="text-2xl font-semibold text-black-600 mb-12 text-center">Forgotten your password?</h2>
         
          
            <div className="grid gap-y-4">
              <div>
                <div className="relative">
                  <input type="email" className=" w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-[#568302] font-semibold  text-gray-600 focus:outline-none text-xs mb-10 transition-all text-sm " required aria-describedby="email-error" placeholder='Enter your email'/>
                 
                </div>
                <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
              </div>
              <button type="submit" className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-[#568302] text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Continue</button>
            </div>
          
          {/* Footer */}
      <div className="text-center w-full p-4">
        <p className="text-gray-600">
          <a href="#" className="text-[#568203]">Having trouble?</a>
        </p>
      </div>
        </div>
        

        <div className="w-1/2 h-96 mr-8 rounded-md mb-4 bg-black">
          {/* Image */}
          <img
            src={frame}
            alt="Signup Image"
            className="w-full mt-20 object-cover "
          />
        </div>
      </div>

      
    </div>
  );
};

export default Forgotpassword;