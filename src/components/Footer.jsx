import React from "react";

const Footer = () => {
  return (
    <div className="py-28 md:py-20  bg-black">
      <div className="lg:w-[1180px] md:w-[900px] sm:w-[600px] w-[400px ] px-4 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3  gap-4 justify-around  ">
          <div className=" px-7 md:px-9 ">
            <h2 className="text-yellow-400 font-bold text-xs mb-4">ABOUT US</h2>
            <p className="text-gray-500 mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              odio expedita debitis aut voluptatem a dignissimos numquam itaque
              saepe .
            </p>
          </div>
          <div className="  px-7 ">
            <h2 className="text-yellow-400 font-bold text-xs mb-4">CONTACT INFO</h2>
            <div className="text-gray-500  flex gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor
            "
                class="w-4 h-6 "
              >
                <path
                  fill-rule="evenodd"
                  d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="mb-3">1234 Altschul, Los Angles, CA 10027-0000</p>
            </div>
            <div className="text-gray-500 flex gap-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-4 h-6 "
              >
                <path
                  fill-rule="evenodd"
                  d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                  clip-rule="evenodd"
                />
              </svg>

              <p className="mb-3">+1 987 654 3210</p>
            </div>
            <div className="text-gray-500  flex gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-6 absolute ">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
</svg>
              <a className="underline text-yellow-400 ml-7 mb-6">admin@domain.com</a>
            </div>
          </div>
          <div className="  px-7 ">
            <h2 className="text-yellow-400 font-bold text-xs mb-4">
              OPENING HOURS
            </h2>
            <p className="text-gray-500  text-sm uppercase ">
              monday - thursday 
              <div className="mb-3 font-heading font-bold text-sm">
              10:000 am - 11:00 pm
              </div>
             
              friday - sunday
              <div className="mb-3 font-heading font-bold text-md">
              12:00 am -03:00 am
              </div>
            </p>
          </div>

        
        </div>
        <div className="text-gray-500 px-7 flex items-center mb-5">
          <hr className="me-3 w-10 " />
          <p> © 2021 Touché. All rights reserved.</p>
          </div>
      </div>
     
    </div>
  );
};

export default Footer;
