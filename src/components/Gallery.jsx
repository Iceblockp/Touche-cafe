import React from "react";
import GalleryTitle from "./GalleryTitle";
import GalleryPhotos from "./GalleryPhotos";

const Gallery = () => {
  return (
    <div className=" container mx-auto py-[6rem] max-w-[1140px]">
      <div className="flex justify-content-center items-center ">
        <GalleryTitle />
      </div>

      <GalleryPhotos />
    </div>
  );
};

export default Gallery;
