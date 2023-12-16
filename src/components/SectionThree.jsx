import React from "react";

const SectionThree = () => {
  return (
    <section className="py-7">
      <div className="  flex w-full">
        <div className=" w-10/12 mx-auto mt-10 md:flex justify-between flex-row-reverse">
          <div className=" md:w-6/12 md:flex ">
            <div className=" h-full mx-auto md:flex justify-center items-end ">
              <div>
                <hr className=" w-8 h-[3px] mb-3 bg-[#f5a637]" />
                <p className="text-[1.125rem] mb-7 font-[400]">
                  Great variety of foods you will enjoy.
                </p>
              </div>
            </div>

            <div className=" md:px-16">
              <div className="">
                <img
                  className=" mb-7"
                  src="https://yevgenysim-turkey.github.io/touche/assets/img/7.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className=" h-full mx-auto justify-center md:w-5/12 items-center text-center ">
            <h2 className="font-heading font-[400] text-[1.75rem]  text-start">
              <i>Beautiful</i> outdoor seating
            </h2>
            <div className="text-start">
              <p className="mt-5 text-[#6c757d] leading-[1.7]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                dicta eveniet, voluptatem dolorum nostrum numquam, ad officia
                distinctio magnam rem sunt nam expedita aperiam doloribus illo
                consequuntur recusandae pariatur eos!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
