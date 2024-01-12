// src/components/Login.js
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import frame from './assets/frame.png';
import logo from './assets/logo.png';
import google from './assets/google.png';
import apple from './assets/apple.png';
import hide from './assets/hide.png';
const Login = () => {
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
        
            className="inline-block font-lg mr-8  rounded-lg border border-solid border-[#568203] p-2 w-15 text-xs font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-black-200  focus:border-#568203 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-black-200 active:text-dark:hover:bg-neutral-100 dark"
          >
            <Link to="/Signup2">Sign Up</Link>
          </button>
          </div>
        </div>
      </nav>

      {/* Signup Content */}
      <div className="flex">
        <div className="w-3/5 p-8">
          {/* Register with Email */}
          <h2 className="text-2xl font-semibold text-black-600 mb-8 text-center">Log In</h2>
         
          <div className="mb-2">
                        
                        <input
                            type="email"
                            className="block w-full  mb-6 px-4 py-2 mt-2 text-black bg-green opacity-6 border border-gray-300 rounded-md  focus:bg-green-200 focus:border-[#568302] focus:bg-green-450 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            placeholder='email or username'
                            
                        />
                      
                   </div>
                   <div className="mb-2">
                        
                        <input
                            type="password"
                            className="block w-full px-4 py-2 mt-2 mb-8 text-black  bg-white border rounded-md focus:bg-green-200 focus:border-[#568302] focus:ring-[#568302] focus:outline-none focus:bg-green-200 focus:ring focus:ring-opacity-40"
                            placeholder='password'
                        />
                        <span className="absolute left-10 mr-58 top-60 mt-9  end-0 grid place-content-center px-4">
                        <img
            src={hide}
            alt="apple Image"
            className="h-4 w-4 text-gray-400 mr-34  " 
          />
                        </span>
                   </div>
                   
                   <div className="mt-6">
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-[#568302] rounded-md hover:bg-black focus:outline-none ">
                            Log In
                        </button>
                        <div className='mb-8'>
                        <span className='text-[#568302] float-right text-sm '>Forgotten your password?</span>
                        </div>
                   </div>

          <div className="my-4 mt-12 mb-12 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                  OR
                </p>
              </div>

              
              <button
                className="w-full max-w-full shadow-sm rounded-lg p-1 border-2 border-black-600 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
              >
                <div className="bg-white p-1 rounded-full">
                <img
            src={google}
            alt="google Image"
            className="w-6" 
          />
          </div>
          <span className="ml-4">
                  Register with Google
                </span>
              </button>
              <button
                className="w-full max-w-full shadow-sm rounded-lg p-1 border-2 border-black-600 text-gray-800 flex items-center justify-center mb-10 transition-all duration-300 ease-in-out focus:outline hover:shadow focus:shadow-sm focus:shadow-outline mt-5"
              >
                <div className="bg-white p-1 rounded-full">
                <img
            src={apple}
            alt="apple Image"
            className="w-6"  
          />
          </div>
          <span className="ml-4">
                  Register with Apple
                </span>
              </button>

          {/* Footer */}
      <div className="text-center w-full p-4">
        <p className="text-gray-600">
          <a href="#" className="text-[#568203]">Having trouble?</a>
        </p>
      </div>
        </div>
        

        <div className="w-2/5 h-86 mb-12 rounded-md mr-8 bg-black">
          {/* Image */}
          <img
            src={frame}
            alt="Signup Image"
            className="w-full mt-44  object-cover "
          />
        </div>
      </div>

      
    </div>
  );
};

export default Login;