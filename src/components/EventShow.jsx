import React, { useState } from "react";

const EventShow = () => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  const firseHandle = () => {
    setFirst(!first);
    setSecond(false);
    setThird(false);
  };
  const secondHandle = () => {
    setSecond(!second);
    setFirst(false);
    setThird(false);
  };
  const thirdHandle = () => {
    setThird(!third);
    setSecond(false);
    setFirst(false);
  };

  return (
    <div className=" py-7 border-b border-b-gray-300">
      <div className=" container mx-auto mb-10">
        <div className="flex justify-center">
          <div className=" text-center max-w-md  ">
            <h1 className=" font-heading font-[400] text-[1.75rem] leading-[1.4] mb-2">
              Upcoming events
            </h1>
            <p className=" mb-6 text-[#6c757d] leading-[1.7] ">
              Commodi rem vertatis quis eaque mollitia.
            </p>
          </div>
        </div>
      </div>

      {/* first  */}
      <div>
        <div onClick={firseHandle} className="" >
          <div className=" max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto justify-between grid grid-cols-12 py-[40px] border-b border-b-gray-300">
            <div className=" col-span-3 md:col-span-2 lg:col-span-1 px-[16px] flex justify-center items-center">
              <div className=" text-center">
              <h1 className=" font-heading text-[2.5rem] font-[700]  ">30</h1>
              <p className=" fot-[400] ">Sep</p>
              </div>
            </div>
           
              <div className=" p-5 col-span-9 md:col-span-7 lg:col-span-8">
                <p className=" font-heading font-[400] leading-[1.4] text-[1.375rem]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum voluptas, aut ea quae!
                </p>
              </div>
              <div className=" p-5 col-span-9 col-start-4 md:col-span-3 lg:col-span-3 ">
                <button className=" font-p[700] border border-[#f5a637]  hover:text-[#f5a637] text-[0.75rem] tracking-[0.05em] px-[32px] py-[16px] ">
                  RESERVE A TABLE
                </button>
              </div>
          </div>
        </div>
        {first && (
          <div
            className={` relative overflow-hidden bg-[url('https://yevgenysim-turkey.github.io/touche/assets/img/8.jpg')] bg-cover bg-center`}
          >
            <div className=" relative z-30 ">
              <div className=" max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto py-[120px] ">
               <div className=" md:max-w-[480px] lg:max-w-[400px] xl:max-w-[475px]  px-[16px]">
               <p className=" text-[0.75rem] font-[700] tracking-[0.05em] text-[#f5a637] mb-4 ">
                  SEPTEMBER 30, 2017
                </p>
                <p className=" text-white font-heading mb-4 font-[400] leading-[1.4] text-[1.75rem] ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum voluptas, aut ea quae!
                </p>
                <p className=" font-[400] text-[1rem] mb-5 leading-[1.7] text-[rgba(255,255,255,.75)] ">
                  Alias earum, labore doloremque iusto a modi et, dolorem
                  veritatis iste quis ab.facere est optio, voluptate molestias
                  aspernatur impedit perferendis odit?
                </p>

                <div>
                  <button className=" font-p[700] border border-[#f5a637] text-white  hover:text-[#f5a637] text-[0.75rem] tracking-[0.05em] px-[32px] py-[16px] ">
                    RESERVE A TABLE
                  </button>
                </div>
               </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* second  */}
      <div className="">
        <div onClick={secondHandle} className="">
        <div className=" max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto justify-between grid grid-cols-12 py-[40px] border-b border-b-gray-300">
            <div className=" col-span-3 md:col-span-2 lg:col-span-1 px-[16px] flex justify-center items-center">
              <div className=" text-center">
              <h1 className=" font-heading text-[2.5rem] font-[700]  ">29</h1>
              <p className=" fot-[400] ">Sep</p>
              </div>
            </div>
           
              <div className=" p-5 col-span-9 md:col-span-7 lg:col-span-8">
                <p className=" font-heading font-[400] leading-[1.4] text-[1.375rem]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum voluptas, aut ea quae!
                </p>
              </div>
              <div className=" p-5 col-span-9 col-start-4 md:col-span-3 lg:col-span-3 ">
                <button className=" font-p[700] border border-[#f5a637]  hover:text-[#f5a637] text-[0.75rem] tracking-[0.05em] px-[32px] py-[16px] ">
                  RESERVE A TABLE
                </button>
              </div>
          </div>
        </div>
        {second && (
          <div className=" origin-top  overflow-hidden bg-[url('https://miro.medium.com/v2/resize:fit:3840/format:webp/1*Mnl_G4C6F7vfxEqsL0X_iw.jpeg')] bg-cover bg-center">
            <div className=" relative z-30 ">
              <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto py-[120px] ">
                <div className=" md:max-w-[480px] lg:max-w-[400px] xl:max-w-[475px]  px-[16px]">

                <p className=" mt-20 text-[0.75rem] font-[700] tracking-[0.05em] text-[#f5a637] mb-4 ">
                  SEPTEMBER 29, 2017
                </p>
                <p className=" text-white font-heading mb-4 font-[400] leading-[1.4] text-[1.75rem] ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum voluptas, aut ea quae!
                </p>
                <p className=" font-[400] text-[1rem] mb-5 leading-[1.7] text-[rgba(255,255,255,.75)] ">
                  Alias earum, labore doloremque iusto a modi et, dolorem
                  veritatis iste quis ab.facere est optio, voluptate molestias
                  aspernatur impedit perferendis odit?
                </p>

                <div>
                  <button className=" font-p[700] border border-[#f5a637] text-white  hover:text-[#f5a637] text-[0.75rem] tracking-[0.05em] px-[32px] py-[16px] ">
                    RESERVE A TABLE
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* third  */}
      <div className="">
        <div onClick={thirdHandle} className="py-[40px]">
        <div className=" max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto justify-between grid grid-cols-12">
            <div className=" col-span-3 md:col-span-2 lg:col-span-1 px-[16px] flex justify-center items-center">
              <div className=" text-center">
              <h1 className=" font-heading text-[2.5rem] font-[700]  ">28</h1>
              <p className=" fot-[400] ">Sep</p>
              </div>
            </div>
           
              <div className=" p-5 col-span-9 md:col-span-7 lg:col-span-8">
                <p className=" font-heading font-[400] leading-[1.4] text-[1.375rem]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum voluptas, aut ea quae!
                </p>
              </div>
              <div className=" p-5 col-span-9 col-start-4 md:col-span-3 lg:col-span-3 ">
                <button className=" font-p[700] border border-[#f5a637]  hover:text-[#f5a637] text-[0.75rem] tracking-[0.05em] px-[32px] py-[16px] ">
                  RESERVE A TABLE
                </button>
              </div>
          </div>
        </div>
        {third && (
          <div className=" origin-top overflow-hidden bg-[url('https://yevgenysim-turkey.github.io/touche/assets/img/10.jpg?fbclid=IwAR1v-x-0W3H9CFUhfLiemsfJgzZ6LgyfAS1fLXhidsjNy12AxKtY9lyRxfI')] bg-cover bg-center">
            <div className=" relative z-30 ">
              <div className="max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px] mx-auto py-[120px] ">
                <div className=" md:max-w-[480px] lg:max-w-[400px] xl:max-w-[475px]  px-[16px]">

                <p className=" mt-20 text-[0.75rem] font-[700] tracking-[0.05em] text-[#f5a637] mb-4 ">
                  SEPTEMBER 28, 2017
                </p>
                <p className=" text-white font-heading mb-4 font-[400] leading-[1.4] text-[1.75rem] ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Dolorum voluptas, aut ea quae!
                </p>
                <p className=" font-[400] text-[1rem] mb-5 leading-[1.7] text-[rgba(255,255,255,.75)] ">
                  Alias earum, labore doloremque iusto a modi et, dolorem
                  veritatis iste quis ab.facere est optio, voluptate molestias
                  aspernatur impedit perferendis odit?
                </p>

                <div>
                  <button className=" font-p[700] border border-[#f5a637] text-white  hover:text-[#f5a637] text-[0.75rem] tracking-[0.05em] px-[32px] py-[16px] ">
                    RESERVE A TABLE
                  </button>
                </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventShow;
