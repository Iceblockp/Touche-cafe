import React from "react";

const Header = () => {
  return (
    <div id="header" className=" container mx-auto">
      <div className="flex justify-between pt-5">
        <div className=" flex  gap-4 mr-52">
          <a className="  p-4 " href="">
            ABOUT US
          </a>
          <a className="  p-4 " href="#MENU">
            MENU
          </a>
          <a className="  p-4 " href="#RESERVATION">
            RESERVATION
          </a>
        </div>
        <a className=" font-heading p-4 " href="#Touche">
          Touche
        </a>
        <div className=" flex  gap-4 ml-52">
          <a className="  p-4 " href="#NEWS & EVENTS">
            NEWS & EVENTS
          </a>
          <a className="  p-4 " href="#GALLERY">
            GALLERY
          </a>
          <a className="  p-4 " href="#CONTACT">
            CONTACT
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
