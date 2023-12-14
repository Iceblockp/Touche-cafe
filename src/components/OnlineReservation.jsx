import React from 'react'

const OnlineReservation = () => {
  return (
    <section className=' py-9 border-b border-b-gray-300 bg-[#e9ecef]'>
        <div className='container mx-auto mb-10'>
        <div className="flex justify-center">
            <div className=" text-center max-w-md  ">
                <h1 className=' font-heading font-[400] text-[1.75rem] leading-[1.4] mb-2'>Make online reservation</h1>
                <p className=' mb-6 text-[#6c757d] leading-[1.7] '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione numquam eos perferendis itaque hic unde, ad, laudantium minima.</p>
            </div>
            </div>
            {/* form  */}
            <div>
                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 w-10/12 mx-auto">
                    <div>
                        <div className=" border m-2">
                            <input className=' w-full p-3 border focus:outline-none  focus:border-[#f5a637] ' type="text" placeholder='Full name' />
                        </div>
                        <div className=" m-2">
                            <input className=' w-full p-3 border focus:outline-none  focus:border-[#f5a637] ' type="number" placeholder='Phone number' />
                        </div>
                        <div className=" m-2">
                            <input className='w-full p-3 border focus:outline-none  focus:border-[#f5a637] ' type="email" placeholder='Email address' />
                        </div>
                    </div>
                    
                    <div className=' -mt-3 lg:mt-0'>
                    <div className=' m-2'>
                    <select name="" id="" defaultValue={2} className='w-full p-3 border focus:outline-none  focus:border-[#f5a637] '>
                        <option value="1" >1 person</option>
                        <option value="2" >2 persons</option>
                        <option value="3">3 persons</option>
                        <option value="4">4 persons</option>
                        <option value="5">5 persons</option>
                    </select>
                    </div>
                    <div className=' m-2'>
                        <input className='w-full p-3 border focus:outline-none  focus:border-[#f5a637] ' type="date" defaultValue="2021-02-12" />
                    </div>
                    <div className=' m-2'>
                        <input className='w-full p-3 border focus:outline-none  focus:border-[#f5a637] ' type="time" defaultValue="18:00" />
                    </div>
                    

                    </div>
                    <div className=' col-span-1 lg:col-span-2 flex justify-center'>
                    <div className=''>
                        <button className=' border border-[#f5a637] px-[32px] py-[16px] font-[700] text-[.75rem] '>RESERVE A TABLE</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    </section>
  )
}

export default OnlineReservation