import React, { useState } from "react";

const TopHeader = () => {
  const [start, setStart] = useState(true);

  addEventListener("scroll", () => {
    scrollY > 20 ? setStart(false) : setStart(true);
  });

  return (
    <div className=" fixed -top-8 z-50 w-full left-0">
      <div
        className={`fixed w-full bg-white duration-300 -top-8 z-40 h-[100px] ${
          start && "-translate-y-20"
        }`}
      ></div>
      <div
        className={`flex z-50 w-10/12 mx-auto relative ${
          start ? "text-white" : "text-black"
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
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg lg:hidden"
          aria-controls="navbar-sticky"
          aria-expanded="false"
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
        className="items-center justify-between hidden w-screen bg-white md:hidden md:w-auto md:order-1"
        id="navbar-sticky"
      >
        <ul className="flex w-10/12 mx-auto flex-col p-4 md:p-0 font-[700] text-[0.75rem] border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white ">
          <li>
            <a
              href="#"
              className="block hover:text-yellow-400 py-2 px-3 text-black bg-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
              aria-current="page"
            >
              ABOUT US
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              MENU
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              RESERVATION
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              NEWS & EVENTS
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
            >
              GALLERY
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block hover:text-yellow-400 py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
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
