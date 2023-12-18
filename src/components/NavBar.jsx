import React from "react";
import Header from "./Header";
import heroImg from "../image/hero.jpg";


const NavBar = () => {


  return (
    <div className=" w-screen">
      <div
        className="bg-cover h-screen bg-center relative"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className=" w-full h-full bg-[rgba(0,0,0,0.5)]">
          <Header/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
