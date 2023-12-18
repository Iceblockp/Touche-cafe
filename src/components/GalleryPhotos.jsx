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
    <div className="grid lg:grid-cols-3 sm:grid-cols-2  gap-4 ">
      <div className="">
        <img src={gallery1} alt="" className=" cursor-pointer" />
      </div>
      <div className=" row-span-2">
        <img src={gallery2} alt="" className=" cursor-pointer" />
      </div>
      <div className="lg:mt-0 sm:-mt-20">
        <img src={gallery3} alt="" className=" cursor-pointer" />
      </div>
      <div className="lg:-mt-10 sm:-mt-20">
        <img src={gallery4} alt="" className=" cursor-pointer" />
      </div>
      <div className="">
        <img src={gallery5} alt="" className=" cursor-pointer" />
      </div>
      <div className="lg:-mt-16 sm:-mt-28">
        <img src={gallery6} alt="" className=" cursor-pointer" />
      </div>
      <div className="">
        <img src={gallery7} alt="" className=" cursor-pointer" />
      </div>
      <div className="lg:mt-0 sm:-mt-24">
        <img src={gallery8} alt="" className=" cursor-pointer" />
      </div>
    </div>
  );
};

export default GalleryPhotos;
