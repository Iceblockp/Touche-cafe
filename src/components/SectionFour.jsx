import React from "react";
import coffeeBottle from "../image/coffeeBottle.jpg";

const SectionFour = () => {
  return (
    <section className="py-7">
      <div className="relative mb-[200px] md:mb-[300px] lg:mb-[500px] xl:mb-[600px]  ">
        <img className="absolute" src={coffeeBottle} alt="" />
        <div className="container relative bg-gradient-to-b from-white to-transparent">
          <div className="flex justify-center items-center md:py-9">
            <div className=" w-9/12 lg:mt-28">
              <hr className=" relative w-8 h-[3px] mb-3 bg-[#f5a637]" />
              <p className="z-10 relative text-[1.125rem] font-[400] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
                laborum alias aspernatur.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
