import React from "react";
import Title from "./Title";

const Header = () => {
  return (
    <div id="header" className=" w-10/12 mx-auto relative h-full">
      <div className=" text-white h-full">
        <Title />
      </div>
    </div>
  );
};

export default Header;
