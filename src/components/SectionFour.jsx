import React from "react";
import coffeeBottle from "../image/coffeeBottle.jpg";

const SectionFour = () => {
  return (
    <section className="py-7  ">
      <div className="relative ">
        {/* <img
          className="absolute w-full h-[780px] md:h-[580px] "
          src={coffeeBottle}
          alt=""
        /> */}
        <div className=" z-30 w-full absolute bg-gradient-to-b from-white to-transparent">
          <div className="flex items-center md:py-9">
            <div className=" xl:w-[1140px] lg:w-[960px] md:w-[720px] w-[540px] mx-auto pl-4 mt-10 ">
              <hr className=" relative w-8 h-[3px] mb-3 bg-[#f5a637]" />
              <p className="z-10 relative text-[1.125rem] font-[400] lg:w-4/12 md:w-6/12">
                Enjoy our specialty coffees and award winning doughnuts in a
                friendly atmosphere.
              </p>
            </div>
          </div>
        </div>
        <div
          className=" relative w-full h-[480px] bg-cover bg-no-repeat  "
          style={{
            backgroundImage: `url(${coffeeBottle})`,
            backgroundPosition: "50% 60%",
          }}
        ></div>
      </div>
    </section>
  );
};

export default SectionFour;
