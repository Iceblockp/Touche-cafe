import React from "react";
import gallery1 from "../image/gallery1.jpg";
import gallery2 from "../image/gallery2.jpg";
import gallery3 from "../image/gallery3.jpg";
import gallery4 from "../image/gallery4.jpg";
import gallery5 from "../image/gallery5.jpg";
import gallery6 from "../image/gallery6.jpg";

import gallery7 from "../image/gallery7.jpg";
import gallery8 from "../image/gallery8.jpg";

const GalleryPhotos = () => {
  return (
    <div className="grid md:grid-cols-3  sm:grid-cols-2  gap-4 ">
      <div className="sm:mb-4">
        <img
          src={gallery1}
          alt=""
          className=" cursor-pointer
        "
        />
      </div>
      <div className=" row-span-2">
        <img src={gallery2} alt="" className=" cursor-pointer" />
      </div>
      <div className="md:mt-0 sm:-mt-20 ">
        <img src={gallery3} alt="" className=" cursor-pointer" />
      </div>
      <div className="lg:-mt-10 md:-mt-6 sm:-mt-16">
        <img src={gallery4} alt="" className=" cursor-pointer" />
      </div>
      <div className="">
        <img src={gallery5} alt="" className=" cursor-pointer" />
      </div>
      <div className="lg:-mt-20 md:-mt-12 sm:-mt-[90px] ">
        <img src={gallery6} alt="" className=" cursor-pointer" />
      </div>
      <div className="">
        <img src={gallery7} alt="" className=" cursor-pointer" />
      </div>
      <div className="md:mt-0 sm:-mt-[88px] ">
        <img src={gallery8} alt="" className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default GalleryPhotos;
