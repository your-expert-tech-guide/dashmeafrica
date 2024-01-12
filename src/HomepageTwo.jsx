//import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Tik from './assets/tik.png';
import Instagram from './assets/instagram.png';
import Twitter from './assets/twitter.png';
import Facebook from './assets/facebook.png';
import Dashcart from './assets/dashcart.png'
import logo from './assets/logo.png';
import search from './assets/search.png';
import heart from './assets/heart.png';
import email from './assets/email.png';
import dropdown from './assets/dropdown.png';
import notification from './assets/notification.png';
import Productproduct from './Productproduct';
import Shirt from './assets/shirt.png';
import Shoe from './assets/shoe.png';
import Singlet from './assets/singlet.png';
import Jean from './assets/jean.png';
import Woodchair from './assets/woodchair.png';
import Jewelry from './assets/jewelry.png';
import Iheart from './assets/iheart.png';
import Customer from './assets/customer.png';


const HomepageTwo = () => {

return (

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
            src={Customer}
            alt="customer icon"
            className="w-5 h-5 "
          />
          <span className=' flex gap-6' >
          <p className=''>Upload</p>
          <p> <Link to="/Signup2">Signup</Link></p>
          <div className="flex"><p>EN</p> <img
            src={dropdown}
            alt="dropdown icon"
            className="w-2 h-2 mt-2.5 "
          />
          
          </div>
          </span>
            </div>
        
        </nav>
 {/* PRODUCT PAGE  */}
 <Productproduct/>
  {/* Other items from badnie3  */}
 <div className="m-6 ">
        <div className="flex justify-between mb-4 font-bold ">
          <p className=''>Other items from badnie3</p>
          <p className="text-[#568302]"> See All </p>
        </div>
        <div className=" flex flex-row shrink-0 gap-3">
         
          <div className="  bg-white dark:bg-gray-800  ">
          <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>badnie3</span></div>
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
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>badnie3</span></div>
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
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>badnie3</span></div>
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
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>badnie3</span></div>
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
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>badnie3</span></div>
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
            <div className='flex mb-1'> <img src={Customer} alt="customer icon" className="w-4 mr-3 mb-1" /> <span>badnie3</span></div>
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
 {/* SIMILAR ITEMS  */}
            <div className="m-10 ">
        <div className="flex justify-between mb-4 font-bold mt-16">
          <p className=''>Similar Items</p>
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
      {/*FOOTER */}
<div className="mt-20">
            <p className='text-center mt-8 font-medium text-md'>WANT TO PUT A SMILE ON SOMEONE’S FACE?</p>
        <div className="flex justify-center mt-8">
            <button
        
        className="inline-block font-lg mr-2 text-white rounded-lg border text-center border-solid bg-[#568203]  w-44 text-xs font-medium leading-normal text-black transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-black-200  focus:border-#568203 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-black-200 active:text-dark:hover:bg-neutral-100 dark"
      >
        <Link to="/Signup2">Sell</Link>
      </button>

      <button
        
            className="inline-block font-lg text-[#568203] rounded-lg border border-solid border-[#568203] w-44 text-xs p-1 font-sm leading-normal text-[#568203] transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-black-200  focus:border-#568203 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-black-200 active:text-dark:hover:bg-neutral-100 dark"
          >
            <Link to="/Signup2">Donate</Link>
          </button>
      </div>
      <h2 className='text-center font-medium text-xs mt-8'><span className='text-[#568302]'>SIGN UP</span>   TO RECEIVE WEEKEND DISCOUNT OFFERS</h2>
       
      
       
       <footer className="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="">
        <div className="cart flex">
            
            {/* Image */}
          <img
            src={Dashcart}
            alt="cart image"
            className="w-44 mt-8 ml-12"
          />
          
          </div>
          <div className="socials flex gap-6 ml-16 mt-6">
            {/* Image */}
          <a href="" target="_blank" rel="noreferrer">
          <img
            src={Facebook}
            alt="facebook icon"
            className="w-6  "
/>
          </a>
          
          {/* Image */}
          <a href="https://x.com/dashmeafrica/" target="_blank" rel="noreferrer">
          <img
            src={Twitter}
            alt="Twitter icon"
            className="w-6"
          />
          </a>
          <a href="https://tiktok.com/@dashme.africa" target="_blank" rel="noreferrer">
          <img
            src={Tik}
            alt="Tiktok"
            className="w-6"
          />
          </a>

          <a href="https://www.instagram.com/dashmeafrica?utm_source=qr" target="_blank" rel="noreferrer">
          <img
            src={Instagram}
            alt="Instagram icon"
            className="w-6"
          />
          </a>
          {/* Image */}
          
          </div>
		</div>
		<div className="  lg:w-2/3  flex gap-4">
			<div className="space-y-3  mt-16 w-33">
				<h3 className=" dark:text-gray-50 font-semibold">Our Mission</h3>
				<p className=" space-y-1 text-xs  ">
                To become the leading online <br /> marketplace where we help you  <br /> donate and/or sell
                 your used <br /> items at giveaway prices, <br /> thereby reducing CO2 emission <br /> through our platform.
				</p>
			</div>
			<div className="space-y-3 ml-10 mt-16 w-33">
				<h3 className=" dark:text-gray-50 font-semibold">Nigeria</h3>
				<div className="space-y-1 text-xs ">
               <p className='mb-8'>No. 4B Wonodi Crescent <br /> by Stadium Road, Port Harcourt.</p>  
                <span className='text-[#71033F] text-xs'>+234 703 675 6184 <br />help@dashme.africa</span>



				</div>
			</div>
			<div className="space-y-3 ml-8 mt-16 w-33">
				<h3 className="uppercase dark:text-gray-50 font-semibold">UK</h3>
				<div className="space-y-1 text-xs ">
				<p className='mb-8'>Andrexa Global Logistics, <br /> 8 Bromborough Avenue, <br />Wirral, Liverpool CH62 7AW.

</p>	
<span className='text-[#71033F] text-xs'>+447 799 178 814 <br />
help@dashme.africa</span>
				</div>
			</div>
			
		</div>
	</div>
	
</footer>
        </div>
      </div>
      );
    };

export default HomepageTwo;