import React from "react";
import Header from "./Header";
import heroImg from "../image/hero.jpg";

const NavBar = () => {
  return (
    <div className=" w-screen">
      <div
        className="bg-cover bg-center relative h-screen"
        style={{
          backgroundImage: `url(${heroImg})`,
        }}
      >
        <div className=" w-full bg-[rgba(0,0,0,0.5)] h-full">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
