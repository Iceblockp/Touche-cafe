import React from 'react'

const SectionTwo = () => {
  return (
    <section className="py-7">

      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className=" grid grid-cols-1 md:gap-8 md:grid-cols-12 w-10/12 mx-auto mt-10">
            <div className=" md:col-span-2">
              <hr className=" w-8 h-[3px] mb-3 bg-[#f5a637]" />
              <p className="text-[1.125rem] mb-7 font-[400]">
                Take a coffee break or enjoy a meal.
              </p>
            </div>
            <div className=" col-span-1 md:col-span-3">
              <div className=" relative">
                <div className="absolute border hidden md:block border-gray-200 w-full h-full  translate-x-8 translate-y-6 "></div>
                <div className=" relative mb-7">
                  <img
                    className="max-w-full"
                    src="https://yevgenysim-turkey.github.io/touche/assets/img/2.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="flex md:ms-0 lg:ms-8 col-span-1 md:col-span-7">
              <div className="flex mx-auto  text-center h-full justify-center items-center">
                <div className="text-start">
                  <h2 className="font-heading font-semi-bold text-3xl ">
                    <i>Always</i> amazing experience
                  </h2>
                  <p className="mt-3 text-start text-[#6c757d] leading-[1.7]">
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
    </div>
  </section>
  )
}

export default SectionTwo