//import React, { useState } from 'react';
import Shirt from './assets/shirt.png';
import Shoe from './assets/shoe.png';
import Singlet from './assets/singlet.png';
import Top from './assets/top.png';
import Jean from './assets/jean.png';
import Wig from './assets/wig.png';
import Chair from './assets/chair.png'
import Woodchair from './assets/woodchair.png';
import Jewelry from './assets/jewelry.png';
import Iheart from './assets/iheart.png';
import Customer from './assets/customer.png';

const Productlist = () => {
    return(
        <div>
          {/* PRODUCT LIST  */}
 {/* Recommended */}
          <div className="m-8 ">
        <div className="flex justify-between mb-4 font-bold">
          <p>Recommended for you</p>
          <p className="text-[#568302]"> See All </p>
        </div>
        <div className=" flex flex-row shrink-0 gap-3">
         
          <div className="  bg-white dark:bg-gray-800  ">
            <img src={Wig} alt="Shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Brown colored wig
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N7,500</span>
              </div>
              <small className='font-normal'>Abraka, Delta State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <img src={Shirt} alt="Shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">White printed blouse 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>Donation</span>
              </div>
              <small className='text-xs'>Oyigbo, Rivers State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <img src={Wig} alt="wig" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Brown colored wig
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N7,500</span>
              </div>
              <small className='text-xs'>Abraka, Delta State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <img src={Shirt} alt="Shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">White printed blouse 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>Donation</span>
              </div>
              <small className='text-xs'>Oyigbo, Rivers State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <img src={Wig} alt="wig" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Brown colored wig 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N7,500</span>
              </div>
              <small className='text-xs'>Abraka, Delta State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <img src={Shirt} alt="Shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">White printed blouse 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>Donation</span>
              </div>
              <small className='text-xs'>Oyigbo, Rivers State</small>
            </div>
            </div>
          
            </div>
            </div>
        {/* Explore  */}
            <div className="m-10 ">
        <div className="flex justify-between mb-4 font-bold mt-16">
          <p className=''>Explore Profiles</p>
          <p className="text-[#568302]"> See All </p>
        </div>
        <div className=" flex flex-row shrink-0 gap-3">
         
        <div className='flex flex-row w-48  '>
              <div className='absolute'> 
            <img src={Chair} alt="chair" className=" w-full h-full mb-2" />
            </div>
            <div className='relative mb-1 left-20 h-42 mt-4 '>
             <img src={Top} className=" w-16 h-40    "/>
             
             <div className="absolute   inset-0 bg-black opacity-80"></div>
             
             
           </div>
           <div><p className='absolute  mt-20 ml-8 text-white font-semibold'><span className=' text-lg font-semibold'> + </span>8</p></div>
           </div>
           <div className='flex flex-row w-48  '>
              <div className='absolute'> 
            <img src={Chair} alt="chair" className=" w-full h-full mb-2" />
            </div>
            <div className='relative mb-1 left-20 h-42 mt-4 '>
             <img src={Top} className=" w-16 h-40   "/>
             
             <div className="absolute   inset-0 bg-black opacity-80"></div>
             
             
           </div>
           <div><p className='absolute  mt-20 ml-8 text-white font-semibold'><span className=' text-lg font-semibold'> + </span>8</p></div>
           </div>
           <div className='flex flex-row w-48  '>
              <div className='absolute'> 
            <img src={Chair} alt="chair" className=" w-full h-full mb-2" />
            </div>
            <div className='relative mb-1 left-20 h-42 mt-4 '>
             <img src={Top} className=" w-16 h-40   "/>
             
             <div className="absolute   inset-0 bg-black opacity-80"></div>
             
             
           </div>
           <div><p className='absolute  mt-20 ml-8 text-white font-semibold'><span className=' text-lg font-semibold'> + </span>8</p></div>
           </div>
           <div className='flex flex-row w-48  '>
              <div className='absolute'> 
            <img src={Chair} alt="chair" className=" w-full h-full mb-2" />
            </div>
            <div className='relative mb-1 left-20 h-42 mt-4 '>
             <img src={Top} className=" w-16 h-40   "/>
             
             <div className="absolute   inset-0 bg-black opacity-80"></div>
             
             
           </div>
           <div><p className='absolute  mt-20 ml-8 text-white font-semibold'><span className=' text-lg font-semibold'> + </span>8</p></div>
           </div>
           <div className='flex flex-row w-48  '>
              <div className='absolute'> 
            <img src={Chair} alt="chair" className=" w-full h-full mb-2" />
            </div>
            <div className='relative mb-1 left-20 h-42 mt-4 '>
             <img src={Top} className=" w-16 h-40    "/>
             
             <div className="absolute   inset-0 bg-black opacity-80"></div>
             
             
           </div>
           <div><p className='absolute  mt-20 ml-8 text-white font-semibold'><span className=' text-lg font-semibold'> + </span>8</p></div>
           </div>
           <div className='flex flex-row w-48  '>
              <div className='absolute'> 
            <img src={Chair} alt="chair" className=" w-full h-full mb-2" />
            </div>
            <div className='relative mb-1 left-20 h-42 mt-4 '>
             <img src={Top} className=" w-16 h-40   "/>
             
             <div className="absolute   inset-0 bg-black opacity-80"></div>
             
             
           </div>
           <div><p className='absolute  mt-20 ml-8 text-white font-semibold'><span className=' text-lg font-semibold'> + </span>8</p></div>
           </div>
          
            </div>
            </div>
       {/* User feed  */}
            <div className="m-10 ">
        <div className="flex justify-between mb-4 font-bold mt-16">
          <p className=''>User feed</p>
          <p className="text-[#568302]"> See All </p>
        </div>
        <div className=" flex flex-row shrink-0 gap-3">
         
          <div className="  bg-white dark:bg-gray-800  ">
          <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>taznn61</span></div>
            <img src={Singlet} alt="Lace bralettes" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
            <p className="text-xs flex items-center justify-between font-semibold">Lace bralettes
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N2,500</span>
              </div>
              <small className='font-normal'>Lekki, Lagos State</small>
         
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>but44rr</span></div>
            <img src={Jewelry} alt="Jewelry" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Gold-plated jewellery 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N12,500</span>
              </div>
              <small className='text-xs'>Awka, Anambra State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>omach33</span></div>
            <img src={Shirt} alt="Shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">White printed blouse
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>Donation</span>
              </div>
              <small className='text-xs'>Oyigbo, Rivers State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>sleazy66</span></div>
            <img src={Shoe} alt="Shoe" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Birkenstock sandals 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N10,000</span>
              </div>
              <small className='text-xs'>Benin, Edo State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>mobani5</span></div>
            <img src={Jean} alt="jean shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Jean Shirt
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>Donation</span>
              </div>
              <small className='text-xs'>Sango, Ogun State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>arita90</span></div>
            <img src={Woodchair} alt="woodchair" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Single armchair
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N25,000</span>
              </div>
              <small className='text-xs'>Elekahia, Rivers State</small>
            </div>
            </div>
          
            </div>
            </div>
            <div className='mt-20'>
            <div className=" flex flex-row shrink-0 gap-3 m-10">
         
          <div className="  bg-white dark:bg-gray-800  ">
          <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>taznn61</span></div>
            <img src={Singlet} alt="Lace bralettes" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Lace bralettes
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N2,500</span>
              </div>
              <small className='font-normal'>Lekki, Lagos State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>but44rr</span></div>
            <img src={Jewelry} alt="Jewelry" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Gold-plated jewellery 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N12,500</span>
              </div>
              <small className='text-xs'>Awka, Anambra State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>omach33</span></div>
            <img src={Shirt} alt="Shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">White printed blouse
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>Donation</span>
              </div>
              <small className='text-xs'>Oyigbo, Rivers State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>sleazy66</span></div>
            <img src={Shoe} alt="Shoe" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Birkenstock sandals 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N10,000</span>
              </div>
              <small className='text-xs'>Benin, Edo State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>mobani5</span></div>
            <img src={Jean} alt="Shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Jean Shirt
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>Donation</span>
              </div>
              <small className='text-xs'>Sango, Ogun State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>arita90</span></div>
            <img src={Woodchair} alt="woodchair" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Single armchair
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N25,000</span>
              </div>
              <small className='text-xs'>Elekahia, Rivers State</small>
            </div>
            </div>
          
            </div>
            </div>
            <div className='mt-20'>
            <div className=" flex flex-row shrink-0 gap-3 m-10">
         
          <div className="  bg-white dark:bg-gray-800  ">
          <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>taznn61</span></div>
            <img src={Singlet} alt="Lace bralettes" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Lace bralettes
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N2,500</span>
              </div>
              <small className='font-normal'>Lekki, Lagos State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>but44rr</span></div>
            <img src={Jewelry} alt="Jewelry" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Gold-plated jewellery 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N12,500</span>
              </div>
              <small className='text-xs'>Awka, Anambra State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>omach33</span></div>
            <img src={Shirt} alt="Shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">White printed blouse
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>Donation</span>
              </div>
              <small className='text-xs'>Oyigbo, Rivers State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>sleazy66</span></div>
            <img src={Shoe} alt="Shoe" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Birkenstock sandals 
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N10,000</span>
              </div>
              <small className='text-xs'>Benin, Edo State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>mobani5</span></div>
            <img src={Jean} alt="Shirt" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Jean Shirt
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>Donation</span>
              </div>
              <small className='text-xs'>Sango, Ogun State</small>
            </div>
            </div>
            <div className="  bg-white dark:bg-gray-800  ">
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>arita90</span></div>
            <img src={Woodchair} alt="wood chair" className="w-48 object-cover mb-2" />
            <div className=" w-36 ">
              
              <p className="text-xs flex items-center justify-between font-semibold">Single armchair
              
              <span><img src={Iheart} alt="heart icon" className="w-4" /></span>
              </p>
              <div>
              <span className='text-[#71033F]'>N25,000</span>
              </div>
              <small className='text-xs'>Elekahia, Rivers State</small>
            </div>
            </div>
          
            </div>
            </div>
         </div>
    
        )

};
export default Productlist;