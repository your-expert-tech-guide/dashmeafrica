//import React, { useState } from 'react';
import Jewelry from './assets/jewelry.png';

const Productpage = () => {

return (

  <div>
     {/* NAV SECTION  */}
    
<section className="py-12 flex sm:py-16"> 
  <div className="container mx-auto px-4">
    <nav className="flex">
      <ol role="list" className="flex gap-4 items-center justify-between">
        <li className="text-left">
          <div className="-m-1">
            <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Clothes </a>
          </div>
        </li>

        <li className="text-left">
          <div className="flex items-center">
            <span className="mx-2 text-gray-400">/</span>
            <div className="-m-1">
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"> Household Items  </a>
            </div>
          </div>
        </li>

        <li className="text-left">
          <div className="flex items-center">
      
            <div className="-m-1">
              <a href="#" className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800" aria-current="page"> Coffee </a>
            </div>
          </div>
        </li>
      </ol>
    </nav>



    <div className=" mt-6 grid grid-cols-1 gap-12  lg:grid-cols-5 lg:gap-16">
    
      <div className="lg:col-span-3  lg:row-end-1 ">
     
        <div className="lg:flex lg:items-start">
          
          <div className="lg:order-2  mt-2 w-full h-full ">
            <span className=" overflow-hidden rounded-lg">
              <img  src = {Jewelry} className="h-full w-full  object-cover "  alt="" />
            </span>
            
          </div>
          

          <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
            <div className="flex flex-row ml-8 items-start lg:flex-col">
            <button type="button" className="flex-0 aspect-square mb-2 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
              </button>
              <button type="button" className="flex-0 aspect-square mb-2 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
              </button>
              <button type="button" className="flex-0 aspect-square mb-2 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
              </button>
              <button type="button" className="flex-0 aspect-square mb-2 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
              </button>
              <div className='relative '>
              <button type="button" className="flex-0 aspect-square mb-2 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
              <img  src = {Jewelry} className="h-full w-full max-w-full object-cover"  alt="" />
              </button>
              <div className="absolute h-20 rounded-lg inset-0 bg-black   opacity-50"></div>
              <div className='absolute bottom-9'><p className=' text-white ml-6 text-red font-semibold'><span className=' text-lg font-semibold'> + </span>8</p></div>
              </div>
              
            </div>
          </div>
        

        <div>
       
        </div>
        
        </div>
        <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
        <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">Afro-Brazillian Coffee</h1>

       

        <h2 className="mt-8 text-base text-gray-900">Coffee Type</h2>
        

        <h2 className="mt-8 text-base text-gray-900">Choose subscription</h2>
       


        
      </div>
      </div>
     </div>
     </div>
     
    
      </section>
     
      </div>
      );
    };

export default Productpage;