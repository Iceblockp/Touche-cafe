import React from "react";

const SectionThree = () => {
  return (
    <section className="py-7">
      <div className="container">
        <div className="grid grid-cols-11 w-10/12 mx-auto mt-10">
          <div className="col-span-5 py-8 h-full mx-auto justify-center items-center text-center mt-20">
            <h2 className="font-heading font-semibold text-3xl  text-start">
              <i>Beautiful</i> outdoor seating
            </h2>
           <div className="text-start">
           <p className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              dicta eveniet, voluptatem dolorum nostrum numquam, ad officia
              distinctio magnam rem sunt nam expedita aperiam doloribus illo
              consequuntur recusandae pariatur eos!
            </p>
           </div>
          </div>
          <div className="flex col-span-1 h-full mx-auto justify-end items-end ">
            {/* <span className="text-red-900">____</span> */}
            <p className="text-sm font-black">Great variety of foods you will enjoy.</p>
          </div>
          <div className="col-span-5 px-16">
            <div className="">
              <img
                className="h-96 max-w-full"
                src="https://yevgenysim-turkey.github.io/touche/assets/img/7.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
