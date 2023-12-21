import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="lg:py-24 py-12  bg-black">
      <div className="xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] mx-auto">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 justify-around lg:h-[200px] md:h-[230px] h-auto">
          {/* About Us */}
          <div className=" px-6 ">
            <h2 className="text-yellow-400 font-bold text-xs mb-3 tracking-wider">
              ABOUT US
            </h2>
            <p className="text-gray-500 mb-12 leading-7 md:w-full w-[340px]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              dolorum, sint corporis nostrum, possimus unde eos vitae eius quasi
              saepe.
            </p>
          </div>

          {/* Contact Info */}
          <div className="  px-6 ">
            <h2 className="text-yellow-400 font-bold text-xs mb-3 tracking-wider">
              CONTACT INFO
            </h2>
            <ul className="mb-12">
              <li className="text-gray-500 flex   ">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="w-3.5 h-3.5 me-3 mt-2"
                />
                <p className="mb-2 leading-7 w-[270px] sm:w-auto">
                  1234 Altschul, Los Angles, CA 10027-0000
                </p>
              </li>
              <li className="text-gray-500 flex ">
                <div className=" text-gray-500">
                  <FontAwesomeIcon
                    icon={faPhoneFlip}
                    className="w-3.5 h-3.5 me-3 mt-2"
                  />
                </div>

                <p className="mb-3 leading-7">+1 987 654 3210</p>
              </li>
              <li className="text-gray-500 flex ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="w-3.5 h-3.5 me-3 mt-2"
                />
                <a className="underline text-yellow-400 mb-6 sm:mb-0 leading-7 cursor-pointer">
                  admin@domain.com
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="px-6">
            <h2 className="text-yellow-400 font-bold text-xs mb-3 leading-4 tracking-wider">
              OPENING HOURS
            </h2>
            <div className="">
              <div className="text-gray-500 uppercase mb-4 ">
                <div className="font-bold text-xs tracking-wider leading-5">
                  {" "}
                  monday - thursday
                </div>
                <div className="font-heading test-base leading-7">
                  10:00 am - 11:00 pm
                </div>
              </div>
              <div className="mb-10 text-gray-500 uppercase">
                <div className="text-xs font-bold tracking-wider leading-5">
                  {" "}
                  friday - sunday
                </div>
                <div className=" font-heading  text-base leading-7">
                  12:00 am - 03:00 am
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CopyRight */}
      </div>
      <div className="xl:w-[1140px] lg:w-[960px] md:w-[720px] sm:w-[540px] text-gray-500  flex items-center px-6 mx-auto ">
        <hr className="me-3 w-8 " />
        <p> © 2021 Touché. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
