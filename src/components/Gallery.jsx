import React from "react";
import GalleryTitle from "./GalleryTitle";
import GalleryPhotos from "./GalleryPhotos";

const Gallery = () => {
  return (
    <div className=" container mx-auto py-[6rem] xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px]">
      <div className="flex justify-content-center items-center ">
        <GalleryTitle />
      </div>

      <GalleryPhotos />
    </div>
  );
};

export default Gallery;
