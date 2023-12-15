import React from 'react'

const TopHeader = () => {
  return (
    <div 
    className=" sticky -top-8 z-50 w-full bg-white left-0">
        <div className="flex w-10/12 mx-auto relative text-black items-center justify-between pt-5">
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
            className=" font-heading p-4 font-bold text-[2rem] hover:text-yellow-400"
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
          <button className=" block lg:hidden px-1 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="black"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
  )
}

export default TopHeader