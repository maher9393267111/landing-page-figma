import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="contact !z-50">
      <div class="w-[90%] mx-auto !mt-[150px] ">
        <div class=" w-full relative pb-4 bg-gradient-to-br from-[#080852 to-[#1956DC border-4 border-green-500  bg-[#080852] bg-center rounded-2xl">

          <img
            class="absolute   bottom-[3px] md:bottom-[-5%] left-[9%] md:left-[23%] !w-[80%]   md:!w-[60%]   -z-2 opacity-[0.2"
            src="/right-left.png"
          />



          <div class="grid relative z-10 py-12 grid-cols-1 lg:grid-cols-2  lg:items-center">
            <div class="p-12 h-full">
              <h3 class="text-white mb-2 font-extralight text-[35px] sm:text-[45px] md:text-[50px] w-[600px]">
                Ready to become
              </h3>
              <div class="flex items-center">
                <img class=" w-[40px] sm:w-[60px] " src="/UN.png"  />
                <span class="font-bold text-white  text-[28px] sm:text-[40px] md:text-[50px] uppercase">
                  stoppable?
                </span>
              </div>
              <p class="text-sm sm:text-[24px] text-[#FFFFFF] font-thin ">
                If you’re looking to collaborate and grow your business
                capabilities, we’d be happy to support you in with the power of
                our collective expertise.
              </p>
            </div>
            <div class="text-center mx-auto w-[100%] px-4 lg:px-0 lg:!w-auto">
              <button class="bg-[#82C809] xl:-[390px] h-[70px] py-3 rounded-md cursor-pointer px-16  flex items-center ml-10">
                <img src="/btn.png" />
                <span class="text-white">lock Potential</span>
              </button>
            </div>
          </div>
        </div>
        <div class="pt-32 pb-14 sm:pb-8">
          <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <p class="sm:flex hidde  text-[34px]  items-center font-normal  text-[#191919]  xl:text-[65px]">
              Unlock Your
              <div class="flex items-center mx-2">
                <img
                  class="xl:w-[72px] object-fit xl:h-[46px] w-[24px] h-[24px] md:ml-2 md:-mb-2"
                  src="/UN.png"
                />
                <span class="text-[#191919]  uppercase font-semibold">lmtd</span>   <span className="mx-2">Potential</span>
              </div>
              {/* Potential */}
            </p>
            {/* <img class="sm:hidden w-[90%]" src="/assets/icon-ft.png" /> */}
            <button onClick={()=>{window.scrollTo(0, 0);}} class="bg-white self-end mt-4 p-4 rounded-full text-[#080852] shadow-lg text-lg flex items-center justify-center w-10 h-10">
              ↑
            </button>
          </div>
          <div class="flex flex-col-revers sm:flex-row flex-col justify-between">
            <div class="flex flex-col gap-3">
              <p class="sm:text-[40px] mt-2 sm:mt-0 text-[20px]">
                hello@weareunlmtd.com
              </p>
              <span class="text-[18px] font-thin">
                2024 © weareunlmtd. All rights reserved
              </span>
            </div>
            <div class="flex  flex-col-revers flex-col   gap-3">
              <div class="flex gap-8  sm:text-[40px]">
                <div>LinkedIn</div>
                <div>Instagram</div>
              </div>

              <span class="text-[18px]  font-thin sm:text-right">
                <Link className=" !no-underline" href={'/privacy'}>

 Privacy
                </Link>
               <span className="px-2">|</span>
                <Link className="!no-underline" href={'/cookies'}>


  Cookie Disclaimer
</Link>


<span className="px-2 ">|</span>




<Link className=" !no-underline" href={'/privacy'}>

Terms and conditions
               </Link>





              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
