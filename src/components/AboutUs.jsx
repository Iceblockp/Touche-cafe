import React from "react";
import review1 from "../../image/21.jpg";
import review2 from "../../image/20.jpg";
import review3 from "../../image/22.jpg";

const AboutUs = () => {
  return (
    <div className=" py-7 border-b">
      <div className=" container mx-auto mb-10">
        <div className="flex justify-center">
          <div className=" text-center max-w-md  ">
            <h1 className=" font-heading font-[400] text-[1.75rem] leading-[1.4] mb-2">
              What clients say about us
            </h1>
            <p className=" mb-6 text-[#6c757d] leading-[1.7] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
        </div>
        {/* wait  */}

        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="static"
        >
          {/* Carousel wrapper */}
          <div className="relative h-[600px] overflow-hidden rounded-lg md:h-96">
            {/* Item 1 */}
            <div
              className="hidden bg-white duration-700 ease-in-out"
              data-carousel-item
            >
              <div className=" max-w-[540px]  md:max-w-[600px] lg:max-w-[800px] mx-auto">
                <div className=" md:flex flex-row-reverse  mx-auto">
                  <div className=" w-full flex justify-center items-center">
                    <div className=" lg:max-w-[285px] px-[16px]">
                      <img className=" rounded-full" src={review1} alt="" />
                    </div>
                  </div>

                  <div className=" flex items-center">
                    <div className="px-[16px]">
                      <div className=" font-heading text-[1.125rem] font-[400] leading-[1.7]  ">
                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Eos at veritatis vitae modi ex quis quibusdam
                          error repudiandae adipisci dolore perspiciatis iste,
                          vel fuga a, libero architecto ratione deleniti sequi."
                        </p>
                      </div>
                      <div>
                        <p className=" text-[#adb5bd]">- Emma Williams</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 2 */}
            <div
              className="hidden bg-white  duration-700 ease-in-out"
              data-carousel-item
            >
              <div className="  max-w-[540px]  md:max-w-[600px] lg:max-w-[800px] mx-auto">
                <div className="md:flex flex-row-reverse  mx-auto">
                  <div className=" w-full flex justify-center items-center">
                    <div className=" lg:max-w-[285px] px-[16px] max-w-[372px]">
                      <img className=" rounded-full" src={review2} alt="" />
                    </div>
                  </div>

                  <div className=" flex items-center">
                    <div>
                      <div className=" font-heading text-[1.125rem] font-[400] leading-[1.7] ">
                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Eos at veritatis vitae modi ex quis quibusdam
                          error repudiandae adipisci dolore perspiciatis iste,
                          vel fuga a, libero architecto ratione deleniti sequi."
                        </p>
                      </div>
                      <div>
                        <p className=" text-[#adb5bd]">- Emma Williams</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Item 3 */}
            <div
              className="hidden bg-white  duration-700 ease-in-out"
              data-carousel-item
            >
              <div className="  max-w-[540px]  md:max-w-[600px] lg:max-w-[800px] mx-auto">
                <div className=" md:flex flex-row-reverse  mx-auto">
                  <div className=" w-full flex justify-center items-center">
                    <div className=" lg:max-w-[285px] px-[16px]">
                      <img className=" rounded-full" src={review3} alt="" />
                    </div>
                  </div>

                  <div className=" flex items-center">
                    <div>
                      <div className=" font-heading text-[1.125rem] font-[400] leading-[1.7] ">
                        <p>
                          "Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Eos at veritatis vitae modi ex quis quibusdam
                          error repudiandae adipisci dolore perspiciatis iste,
                          vel fuga a, libero architecto ratione deleniti sequi."
                        </p>
                      </div>
                      <div>
                        <p className=" text-[#adb5bd]">- Emma Williams</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Slider indicators */}
          <div className="  absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse bg-slate-50">
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-gray-400 hover:bg-yellow-300 focus:bg-yellow-300 "
              aria-current="true"
              aria-label="Slide 1"
              data-carousel-slide-to={0}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-gray-400 focus:bg-yellow-400 hover:bg-yellow-300 "
              aria-current="false"
              aria-label="Slide 2"
              data-carousel-slide-to={1}
            />
            <button
              type="button"
              className="w-3 h-3 rounded-full bg-gray-400 focus:bg-yellow-400 hover:bg-yellow-300"
              aria-current="false"
              aria-label="Slide 3"
              data-carousel-slide-to={2}
            />
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute 
             top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
          >
            <span className="inline-flex  items-center justify-center w-10 h-10  rounded-full bg-gray-200 hover:bg-yellow-300 p-4 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black  rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
          >
            <span className="inline-flex bg-gray-200 items-center justify-center w-10 h-10 rounded-full  dark:bg-gray-800/30 hover:bg-yellow-300 dark:group-hover:bg-gray-800/60 group-focus:ring-4 p-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg
                className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
        <hr />
        {/* example  */}
      </div>
    </div>
  );
};

export default AboutUs;
