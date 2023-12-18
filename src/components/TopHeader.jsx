import React, { useState } from "react";

const TopHeader = () => {
  const [start, setStart] = useState(true);
  const [nav,setNav] = useState(false);

  addEventListener("scroll", () => {
    scrollY > 20 ? setStart(false) : setStart(true);
  });

  const navBtn = () => {
    setNav(!nav);
    
  }

  return (
    <div className=" fixed -top-8 z-50 w-full left-0">
      <div
        className={`fixed w-full bg-white duration-300 -top-8 z-40 h-[100px] ${
          start && "-translate-y-20"
        }`}
      ></div>
      <div
        className={`flex z-50 w-10/12 mx-auto relative ${
          !start || nav ? "text-black" : "text-white"
        } items-center justify-between pt-5`}
      >
        <div className=" hidden lg:flex  font-bold text-sm">
          <a className="p-4  hover:text-yellow-400" href="">
            ABOUT US
          </a>
          <a className="p-4  hover:text-yellow-400" href="#MENU">
            MENU
          </a>
          <a className="p-4  hover:text-yellow-400" href="#RESERVATION">
            RESERVATION
          </a>
        </div>
        <a
          className=" font-heading p-4 font-[400] text-[2rem] hover:text-yellow-400"
          href="#Touche"
        >
          <i>Touché</i>
        </a>
        <div className=" hidden lg:flex  gap-4 font-bold text-sm ">
          <a className="p-4 hover:text-yellow-400" href="#NEWS & EVENTS">
            NEWS & EVENTS
          </a>
          <a className="p-4 hover:text-yellow-400" href="#GALLERY">
            GALLERY
          </a>
          <a className="p-4 hover:text-yellow-400" href="#CONTACT">
            CONTACT
          </a>
        </div>
        <button
        onClick={navBtn}
          
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg lg:hidden"
         
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <div
<<<<<<< HEAD
        className="animate__animated animate__slideInDown items-center justify-between hidden w-screen bg-white  lg:w-auto lg:order-1"
        id="navbar-sticky"
      >
        <ul className="flex w-10/12 mx-auto flex-col p-4 lg:p-0 font-[700] text-[0.75rem] border border-gray-100 rounded-lg bg-gray-50 lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 lg:border-0 lg:bg-white ">
          <li>
            <a
              href="#"
              className="block hover:text-yellow-400 py-2 px-3 text-black bg-white rounded lg:bg-transparent lg:text-yellow-400 lg:p-0 lg:dark:text-blue-500"
=======
        className={`items-center justify-between top-0 z-40 pt-16 ${nav ? "":"-translate-y-full"} lg:-translate-y-full duration-300 fixed w-screen bg-white`}
       
      >
      
        
        <ul className="flex w-10/12 mx-auto flex-col p-4 font-[700] text-[0.75rem] border border-gray-100 rounded-lg bg-gray-50 rtl:space-x-reverse  ">
          <li>
            <a
              href="#"
              className="block hover:text-yellow-400 py-2 px-3 text-black bg-white rounded "
>>>>>>> 4e8505ab186f5e540d860667db9af35f03cca16a
              aria-current="page"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#"
<<<<<<< HEAD
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-yellow-400 lg:p-0 lg:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
=======
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
>>>>>>> 4e8505ab186f5e540d860667db9af35f03cca16a
            >
              MENU
            </a>
          </li>
          <li>
            <a
              href="#"
<<<<<<< HEAD
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-yellow-400 lg:p-0 lg:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
=======
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
>>>>>>> 4e8505ab186f5e540d860667db9af35f03cca16a
            >
              RESERVATION
            </a>
          </li>
          <li>
            <a
              href="#"
<<<<<<< HEAD
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-yellow-400 lg:p-0 lg:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
=======
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
>>>>>>> 4e8505ab186f5e540d860667db9af35f03cca16a
            >
              NEWS & EVENTS
            </a>
          </li>
          <li>
            <a
              href="#"
<<<<<<< HEAD
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-yellow-400 lg:p-0 lg:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
=======
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
>>>>>>> 4e8505ab186f5e540d860667db9af35f03cca16a
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              href="#"
<<<<<<< HEAD
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 lg:hover:bg-transparent lg:hover:text-yellow-400 lg:p-0 lg:dark:hover:text-yellow-400 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
=======
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 "
>>>>>>> 4e8505ab186f5e540d860667db9af35f03cca16a
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopHeader;
