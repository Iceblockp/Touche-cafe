import React from "react";
import Title from "./Title";

const Header = () => {
  return (
    <div id="header" className=" w-10/12 mx-auto relative">
     
        <div className="flex items-center justify-between pt-5">
          <div className=" flex  gap-4 mr-52 font-bold text-white text-sm">
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
            className=" font-heading p-4 font-bold text-white text-5xl hover:text-yellow-400"
            href="#Touche"
          >
            Touché
          </a>
          <div className=" flex  gap-4 ml-52 font-bold text-white text-sm ">
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
        </div>
        
        <div className=" text-white">
          <Title />
        </div>
    
    </div>
  );
};

export default Header;
