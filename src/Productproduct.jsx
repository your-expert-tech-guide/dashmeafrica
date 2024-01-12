//import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Jewelry from './assets/jewelry.png';

const Productproduct = () => {

return (

  <div>


<section className="py-12 sm:py-16"> 
  <div className="container mx-auto px-6 ">
    <nav className="flex gap-16 ">
        
          <div className="-m-1">
            <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">Clothes </a>
          </div>
     

  
            <div className="-m-1">
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Household Items </a>
            </div>
         
        

        
            <div className="-m-1">
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> Accessories </a>
            </div>
          
        
    
    </nav>

    <div className="lg:col-gap-12 xl:col-gap-16 w-full justify-center  grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 ">
      <div className="lg:col-span-3 lg:row-end-1">
        <div className="lg:flex lg:items-start">
          <div className="lg:order-2  w-full h-full">
          <div className="lg:order-2  w-full h-full  ">
            <div className=" overflow-hidden rounded-lg">
              <img  src = {Jewelry} className="h-full w-full  object-cover "  alt="" />
            </div>
            
          </div>
          </div>

          <div className=" w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row items-start lg:flex-col ">
              <button type="button" className="flex-0 aspect-square  h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
              </button>
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
              </button>
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
               
              </button>
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
               
              </button>
              <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
               
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2 w-full h-full">
        <h1 className=" font-bold text-gray-900 text-lg">Gold-plated Jewellery</h1>
         <p className='font-semibold mt-3'>User Profile: <span className='text-[#568302]'>badnie3</span></p>
         <p className='font-semibold mt-3 '>Availabilty: <span className='text-[#71033F] rounded-lg px-2 py-1 border border-[#71033F] text-sm'>Available</span></p>
           
        <h2 className="mt-4 font-semibold text-sm">Description:</h2>
        <p className=' text-justify text-sm mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.</p>
        <p className='mt-4'>Size:</p>
        <p className='text-sm font-semibold'>S/M/L/XL/1XL/2XL/3XL/4XL</p>
        <p className='text-[#71033F] mt-4'>N12,500.00</p>

        <div className='flex mt-2  gap-3'>
        <button className="rounded-lg  bg-[#568203] font-bold py-1 px-3 my-2 text-center text-white">Message Profile</button>
        <button className="rounded-lg p-1 border-2 border-black-600   p-1 my-2 text-center">Add to saved items</button>
        </div>
      </div>

      
    </div>
  </div>
</section>

</div>
);
};

export default Productproduct;