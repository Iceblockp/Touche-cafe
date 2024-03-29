import React from "react";
import img26 from "../../image/26.jpg";
import img27 from "../../image/27.jpg";
import img28 from "../../image/28.jpg";
import img29 from "../../image/29.jpg";
import img30 from "../../image/30.jpg";
import img31 from "../../image/31.jpg";

const Menu = () => {
  return (
    <section className="  py-7 border-b border-b-gray-300">
      <div className="  mx-auto mb-10">
        <div className="flex justify-center">
          <div className=" text-center max-w-[540px] px-[16px] ">
            <h1 className=" font-heading font-[400] text-[1.75rem] leading-[1.4] mb-2">
              Menu options
            </h1>
            <p className=" mb-6 text-[#6c757d] leading-[1.7] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              numquam eos perferendis itaque hic unde, ad, laudantium minima.
            </p>
          </div>
        </div>
        {/* //category */}
        <div className="flex justify-center mb-12 ">
          <div className=" font-[900] text-[.75rem] text-[#6c757d] tracking-[0.05em] ">
            <button className="  py-[8px]} px-[16px] text-black">
              <div className="border-b-[4px] py-[10px] border-b-[#f5a637]">
                MAINS
              </div>
            </button>
            <button className=" hover:text-black py-[8px]} px-[16px]">LUNCH</button>
            <button className=" hover:text-black py-[8px]} px-[16px]">DINNER</button>
            <button className=" hover:text-black py-[8px]} px-[16px]">DRINKS</button>
          </div>
        </div>

        {/* food item */}
        <div className=" ">
          <div className=" grid grid-cols-1 max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto md:grid-cols-2 gap-4">
            <div className=" font-[400] border-b border-b-gray-300">
              <div className=" grid grid-cols-12 gap-3">
                <div className=" col-span-3 flex justify-center items-center p-2 ">
                  <img
                    className=" aspect-square object-cover"
                    src={img26}
                    alt="img"
                  />
                </div>
                <div className=" col-span-7">
                  <h2 className=" font-heading leading-[1.4] text-[1.187em] ">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className=" leading-[1.7] text-[#6c757d] ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, obcaecati! Sapiente laudantium.
                  </p>
                </div>
                <div className=" col-span-2">
                  <div className=" font-heading text-[1.375rem] ">$15</div>
                </div>
              </div>
            </div>

            <div className=" font-[400] border-b border-b-gray-300">
              <div className=" grid grid-cols-12 gap-3">
                <div className=" col-span-3 flex justify-center items-center p-2 ">
                  <img
                    className=" aspect-square object-cover "
                    src={img27}
                    alt="img"
                  />
                </div>
                <div className=" col-span-7">
                  <h2 className=" font-heading leading-[1.4] text-[1.187em] ">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className=" leading-[1.7] text-[#6c757d] ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, obcaecati! Sapiente laudantium.
                  </p>
                </div>
                <div className=" col-span-2">
                  <div className=" font-heading text-[1.375rem] ">$23</div>
                </div>
              </div>
            </div>

            <div className=" font-[400] border-b border-b-gray-300">
              <div className=" grid grid-cols-12 gap-3">
                <div className=" col-span-3 flex justify-center items-center p-2 ">
                  <img
                    className=" aspect-square object-cover "
                    src={img28}
                    alt="img"
                  />
                </div>
                <div className=" col-span-7">
                  <h2 className=" font-heading leading-[1.4] text-[1.187em] ">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className=" leading-[1.7] text-[#6c757d] ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, obcaecati! Sapiente laudantium.
                  </p>
                </div>
                <div className=" col-span-2">
                  <div className=" font-heading text-[1.375rem] ">$16</div>
                </div>
              </div>
            </div>

            <div className=" font-[400] border-b border-b-gray-300">
              <div className=" grid grid-cols-12 gap-3">
                <div className=" col-span-3 flex justify-center items-center p-2 ">
                  <img
                    className=" aspect-square object-cover "
                    src={img29}
                    alt="img"
                  />
                </div>
                <div className=" col-span-7">
                  <h2 className=" font-heading leading-[1.4] text-[1.187em] ">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className=" leading-[1.7] text-[#6c757d] ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, obcaecati! Sapiente laudantium.
                  </p>
                </div>
                <div className=" col-span-2">
                  <div className=" font-heading text-[1.375rem] ">$15</div>
                </div>
              </div>
            </div>

            <div className=" font-[400] border-b border-b-gray-300">
              <div className=" grid grid-cols-12 gap-3">
                <div className=" col-span-3 flex justify-center items-center p-2 ">
                  <img
                    className=" aspect-square object-cover "
                    src={img30}
                    alt="img"
                  />
                </div>
                <div className=" col-span-7">
                  <h2 className=" font-heading leading-[1.4] text-[1.187em] ">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className=" leading-[1.7] text-[#6c757d] ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, obcaecati! Sapiente laudantium.
                  </p>
                </div>
                <div className=" col-span-2">
                  <div className=" font-heading text-[1.375rem] ">$23</div>
                </div>
              </div>
            </div>

            <div className=" font-[400] border-b border-b-gray-300">
              <div className=" grid grid-cols-12 gap-3">
                <div className=" col-span-3 flex justify-center items-center p-2 ">
                  <img
                    className=" aspect-square object-cover "
                    src={img31}
                    alt="img"
                  />
                </div>
                <div className=" col-span-7">
                  <h2 className=" font-heading leading-[1.4] text-[1.187em] ">
                    Lorem ipsum dolor sit amet
                  </h2>
                  <p className=" leading-[1.7] text-[#6c757d] ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, obcaecati! Sapiente laudantium.
                  </p>
                </div>
                <div className=" col-span-2">
                  <div className=" font-heading text-[1.375rem] ">$16</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
