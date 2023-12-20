import React from "react";

const Newsletter = () => {
  return (
    <section className=" py-9 bg-[#e9ecef]">
      <div className=" container mx-auto mb-10">
        <div className="flex justify-center">
          <div className=" text-center md:max-w-[480px] xl:max-w-[570px] max-w-[540px]">
            <h1 className=" font-heading font-[400] text-[1.75rem] leading-[1.4] mb-2">
              Newsletter
            </h1>
            <p className=" mb-6 text-[#6c757d] leading-[1.7] ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              numquam eos perferendis itaque hic unde, ad, laudantium minima.
            </p>
          </div>
        </div>
        <div className=" w-full flex ">
          <div className=" mx-auto flex w-[540px] md:w-[720px] lg:w-[480px] xl:w-[570px] ">
            <div className=" flex-grow px-[8px]">
              <input
                className=" w-full h-full p-3 focus:outline-none border-none focus:border-yellow-300"
                type="text"
              />
            </div>
            <div className="px-[8px]">
              <button className=" border border-[#f5a637] px-[32px] py-[16px] font-[700] text-[.75rem] ">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
