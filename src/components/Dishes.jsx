import React from 'react'
import img26 from "../../image/26.jpg";
import img27 from "../../image/27.jpg";
import img28 from "../../image/28.jpg";
import img29 from "../../image/29.jpg";
import img30 from "../../image/30.jpg";
import img31 from "../../image/31.jpg";


const Dishes = () => {
  return (
    <section className=' py-7 '>
        <div className=' container mx-auto'>
            <div className="flex justify-center">
            <div className=" text-center max-w-md  ">
                <h1 className=' font-heading font-[400] text-[1.75rem] leading-[1.4] mb-2'> <i>Our featured</i> dishes</h1>
                <p className=' mb-6 text-[#6c757d] leading-[1.7] '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam aliquam id sint accusamus eius voluptatum explicabo quae similique, quas.</p>
            </div>
            </div>

            <div className=" overflow-auto ">
                <div className=" w-10/12 mx-auto flex gap-5">
                    {/* card */}
                <div className=" max-w-[320px]">
                    <img src={img26} alt="" />
                    <div className=' p-4 font-[400] mb-12'>
                        <div className=' grid grid-cols-12 gap-5 leading-[1.4] font-heading '>
                            <h1 className=' col-span-9 text-[1.187rem]'>Lorem ipsum dolor sit amet consectetur</h1>
                            <p className=' col-span-1'></p>
                            <h1 className=' col-span-2 text-[1.37rem] '>$15</h1>
                        </div>
                        <div className=" grid grid-cols-12 leading-[1.7]  ">
                            <p className=" col-span-10 text-[1rem] text-[#6c757d] ">In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.</p>
                        </div>
                    </div>
                </div>
                    {/* card */}
                <div className=" max-w-[320px]">
                    <img src={img27} alt="" />
                    <div className=' p-4 font-[400] '>
                        <div className=' grid grid-cols-12 gap-5 leading-[1.4] font-heading '>
                            <h1 className=' col-span-9 text-[1.187rem]'>Lorem ipsum dolor sit amet consectetur</h1>
                            <p className=' col-span-1'></p>
                            <h1 className=' col-span-2 text-[1.37rem] '>$18</h1>
                        </div>
                        <div className=" grid grid-cols-12 leading-[1.7]  ">
                            <p className=" col-span-10 text-[1rem] text-[#6c757d] ">In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.</p>
                        </div>
                    </div>
                </div>
                    {/* card */}
                <div className=" max-w-[320px]">
                    <img src={img28} alt="" />
                    <div className=' p-4 font-[400] '>
                        <div className=' grid grid-cols-12 gap-5 leading-[1.4] font-heading '>
                            <h1 className=' col-span-9 text-[1.187rem]'>Lorem ipsum dolor sit amet consectetur</h1>
                            <p className=' col-span-1'></p>
                            <h1 className=' col-span-2 text-[1.37rem] '>$23</h1>
                        </div>
                        <div className=" grid grid-cols-12 leading-[1.7]  ">
                            <p className=" col-span-10 text-[1rem] text-[#6c757d] ">In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.</p>
                        </div>
                    </div>
                </div>
                    {/* card */}
                <div className=" max-w-[320px]">
                    <img src={img29} alt="" />
                    <div className=' p-4 font-[400] '>
                        <div className=' grid grid-cols-12 gap-5 leading-[1.4] font-heading '>
                            <h1 className=' col-span-9 text-[1.187rem]'>Lorem ipsum dolor sit amet consectetur</h1>
                            <p className=' col-span-1'></p>
                            <h1 className=' col-span-2 text-[1.37rem] '>$32</h1>
                        </div>
                        <div className=" grid grid-cols-12 leading-[1.7]  ">
                            <p className=" col-span-10 text-[1rem] text-[#6c757d] ">In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.</p>
                        </div>
                    </div>
                </div>
                    {/* card */}
                <div className=" max-w-[320px]">
                    <img src={img30} alt="" />
                    <div className=' p-4 font-[400] '>
                        <div className=' grid grid-cols-12 gap-5 leading-[1.4] font-heading '>
                            <h1 className=' col-span-9 text-[1.187rem]'>Lorem ipsum dolor sit amet consectetur</h1>
                            <p className=' col-span-1'></p>
                            <h1 className=' col-span-2 text-[1.37rem] '>$15</h1>
                        </div>
                        <div className=" grid grid-cols-12 leading-[1.7]  ">
                            <p className=" col-span-10 text-[1rem] text-[#6c757d] ">In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.</p>
                        </div>
                    </div>
                </div>
                    {/* card */}
                <div className=" max-w-[320px]">
                    <img src={img31} alt="" />
                    <div className=' p-4 font-[400] '>
                        <div className=' grid grid-cols-12 gap-5 leading-[1.4] font-heading '>
                            <h1 className=' col-span-9 text-[1.187rem]'>Lorem ipsum dolor sit amet consectetur</h1>
                            <p className=' col-span-1'></p>
                            <h1 className=' col-span-2 text-[1.37rem] '>$42</h1>
                        </div>
                        <div className=" grid grid-cols-12 leading-[1.7]  ">
                            <p className=" col-span-10 text-[1rem] text-[#6c757d] ">In perspiciatis nisi dicta, aperiam magnam eaque laborum iste.</p>
                        </div>
                    </div>
                </div>


                </div>
            </div>
           
        </div>
    </section>
  )
}

export default Dishes