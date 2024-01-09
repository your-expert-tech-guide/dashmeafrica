import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Tik from './assets/tik.png';
import Twitter from './assets/twitter.png';
import Facebook from './assets/facebook.png';
import Dashcart from './assets/dashcart.png'
import logo from './assets/logo.png';
import search from './assets/search.png';
import heart from './assets/heart.png';
import email from './assets/email.png';
import dropdown from './assets/dropdown.png';
import customer from './assets/customer.png';
import notification from './assets/notification.png';
import heroimage from './assets/heroimage.png';
import Productlist from './Productlist';

const HomepageOne = () => {
return(
    <div>
      {/* NAV SECTION  */}
         <nav className="header flex justify-between m-2">
            <div className="logo"> {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            className='mt-2 mr-10'
           
          />
          </div>
            <div className="search">
            <div className="relative flex flex-wrap items-stretch mb-4  mt-4">
            <input type="search" className="form-control  flex-auto  block w-80   h-10 px-3 py-2 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-[#568302] rounded-lg transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search for items" aria-label="Search" aria-describedby="button-addon2"/>
      <button className="btn  absolute pr-10 h-10 ml-60 px-6 py-3 bg-[#568302] text-white font-medium text-xs leading-tight uppercase rounded-r-lg shadow-md  hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
        {/* Image */}
        <img
            src={search}
            alt="Signup Image"
            className="w-5 h-5 "
          />
      
    </button>
  </div>
            </div>
            <div className="icons flex mt-8 mr-10 gap-6">
            <img
            src={email}
            alt="email icon"
            className="w-5 h-5 "
          />
          <img
            src={notification}
            alt="notification icon"
            className="w-4 h-6 "
          />
          <img
            src={heart}
            alt="heart icon"
            className="w-5 h-5 "
          />
          <img
            src={customer}
            alt="customer icon"
            className="w-5 h-5 "
          />
          <span className=' flex gap-6' >
          <p className=''>Upload</p>
          <p>Sign Up</p>
          <div className="flex"><p>EN</p> <img
            src={dropdown}
            alt="dropdown icon"
            className="w-2 h-2 mt-2.5 "
          />
          
          </div>
          </span>
            </div>
        
        </nav>
        </div>
)

};
export default HomepageOne;