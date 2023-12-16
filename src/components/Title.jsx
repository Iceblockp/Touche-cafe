import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Title = () => {
  
  return (
    <div className="">
      <div className=" w-10/12 flex mx-auto">
        <div className=" mx-auto max-w-[550px]">
          <div className=" text-center ">
            <h6 className=" text-xs mt-10">
              {" "}
              <span className=" text-yellow-600 text-xs">CAFÉ / </span>
              RESTAURANT
            </h6>
            <h1 className=" text-[5rem] font-[700] font-heading mb-4">Touché</h1>
            <p className=" mb-4 text-[rgba(225,225,225,0.75)]">
            A unique café located in the heart of Los Angeles. Always fresh coffee and biscuits. Open for indoor dining and to-go orders.
            </p>

            <div className=" px-2 py-4 font-bold text-xs border border-yellow-500 w-56 mx-auto  mb-24 hover:text-yellow-600">
              <a href="#"> MAKE RESERVATION</a>
            </div>
          </div>
        </div>
      </div>

      <div className=" flex justify-between items-center gap-10 flex-col lg:flex-row">

        <div id="socialLinks" className=" flex lg:mb-10 gap-8">
         <div className=" hover:text-yellow-600">
         <a href="https://twitter.com/?lang=en">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
         </div>
          <div className=" hover:text-yellow-600">
          <a href="https://www.facebook.com/">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          </div>
         <div className=" hover:text-yellow-600">
         <a href="https://www.instagram.com/">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
         </div>
        </div>

        <div id="address" className=" mb-10 ">
          <div className="font-heading ">
            <div className=" flex gap-2 justify-center items-center text-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 pointer-events-none text-yellow-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
              </div>
              <div>1234 Dining Str., Los Angeles, CA 12345-0000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
