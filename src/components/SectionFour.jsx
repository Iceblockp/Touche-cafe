import React from "react";
import coffeeBottle from "../image/coffeeBottle.jpg";

const SectionFour = () => {
  return (
    <section className="py-7">
      <div className="relative">
        <img className="absolute" src={coffeeBottle} alt="" />
        <div className="container">
          <div className="flex justify-center items-center md:py-9">
            <div className="grid grid-cols-3 w-9/12">
              <p className="z-10 grid-cols-1 mt-32 text-slate-400">
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
