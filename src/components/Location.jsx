import React from "react";
import locationImg from "../image/location.jpg";
const Location = () => {
  return (
    <div className="w-100% flex h-[480px]" >
      
        <div className="mx-auto my-auto z-10 pb-14" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="skyblue"
            className="w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
        </div >
<div className="w-full bg-cover bg-center absolute h-[480px] " style={{ backgroundImage: `url(${locationImg})` }} >

</div>

      
          {/* <img className=" w-screen  container  h-[480px] absolute " src={locationImg} alt="" /> */}
       
      
    </div>
  );
};

export default Location;
