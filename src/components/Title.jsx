import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faInstagram,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Title = () => {
  return (
    <div className=" h-full flex flex-col">
      <div className=" max-w-1140 flex mx-auto h-[75%]">
        <div className=" mx-auto max-w-[550px] h-full">
          <div className=" text-center mt-10 h-full flex flex-col justify-center">
            <h6 className=" text-xs mt-10">
              {" "}
              <span className=" text-yellow-400 text-xs">CAFÉ / </span>
              RESTAURANT
            </h6>
            <h1 className=" text-[5rem] font-[700] font-heading mb-4">
              Touché
            </h1>
            <p className=" mb-8 text-[rgba(225,225,225,0.75)] text-center">
              A unique café located in the heart of Los Angeles. Always fresh
              coffee and biscuits. Open for indoor dining and to-go orders.
            </p>

            <div className=" px-0.5 py-4 font-bold text-xs border border-yellow-400 w-52 mx-auto hover:text-yellow-400">
              <a href="#"> MAKE RESERVATION</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center gap-8  flex-col md:flex-row w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px]  px-4 mt-auto mx-auto">
        <div
          id="socialLinks"
          className="md:mb-14 mb-0 flex md:justify-center  gap-8 "
        >
          <div className=" hover:text-yellow-400">
            <a href="https://twitter.com/?lang=en">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
          </div>
          <div className=" hover:text-yellow-400">
            <a href="https://www.facebook.com/">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className=" hover:text-yellow-400">
            <a href="https://www.instagram.com/">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>

        <div id="address" className=" mb-14    ">
          <div className="">
            <div className=" flex gap-2 justify-center items-center text-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 pointer-events-none text-yellow-400"
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
              <div className=" text-base font-heading text-gray-300">
                1234 Dining Str., Los Angeles, CA 12345-0000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
