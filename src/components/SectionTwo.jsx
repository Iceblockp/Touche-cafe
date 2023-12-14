import React from "react";

const SectionTwo = () => {
  return (
    <section className="py-7">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className=" grid grid-cols-10 w-10/12 mx-auto mt-10">
            <div className="flex col-span-1">
              <p className="text-sm font-black">
                Take a coffee break or enjoy a meal.
                <span className="text-red-900 m-10">____</span>
              </p>
            </div>
            <div className="flex col-span-4">
              <div className="px-14">
                <div className="">
                  <img
                    className="h-96 max-w-full"
                    src="https://yevgenysim-turkey.github.io/touche/assets/img/2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex col-span-5">
              <div className="flex mx-auto  text-center h-full justify-center items-center">
                <div className="text-start">
                  <h2 className="font-heading font-semi-bold text-3xl ">
                    <i>Always</i> amazing experience
                  </h2>
                  <p className="mt-3 text-start ">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Obcaecati atque quo totam sapiente in, est sit quisquam
                    quaerat tempora velit fugiat alias sed quis at deleniti
                    minus recusandae dolores aliquid officiis molestiae optio
                    iure! Quaerat itaque aspernatur est deserunt soluta!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
