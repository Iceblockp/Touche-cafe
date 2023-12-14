import React from 'react'
import GalleryTitle from './GalleryTitle'
import GalleryPhotos from './GalleryPhotos'

const Gallery = () => {
  return (
  <div className=" container mx-auto py-7 max-w-[80%] mb-20">
   <div  className="flex justify-content-center items-center">
   < GalleryTitle />
   </div>
     
    < GalleryPhotos />
  </div>
  )
}

export default Gallery