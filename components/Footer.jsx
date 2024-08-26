import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <div id="contact !z-50">
      <div className="w-[90%] mx-auto !mt-[150px] ">
        <div className=" w-full relative pb-4 bg-gradient-to-br from-[#080852 to-[#1956DC border-4 border-green-500  bg-[#080852] bg-center rounded-2xl">
          <img
            className="absolute   bottom-[3px] md:bottom-[-5%] left-[9%] md:left-[23%] !w-[80%]  md:!w-[60%]   -z-2 opacity-[0.2"
            src="/right-left.png"
          />

          <div className="grid relative z-10 py-12 grid-cols-1 lg:grid-cols-2 items-center  lg:items-center">
            <div className="px-12 pt-4 h-full">
              <h3 className="text-[30px] text-white mb-2 font-extralight md:text-[75px]">
                Ready to become
              </h3>
              <div className="flex items-center">
                <img
                  className=" w-[36px] h-[25px] md:w-[85px] md:h-[55px]"
                  src="/UN.png"
                />
                <span className="font-bold text-white text-[30px]  md:text-[75px] uppercase">
                  stoppable?
                </span>
              </div>
              <p className="text-[14px] md:text-[24px] text-[#FFFFFF] !font-thin ">
                If you’re looking to collaborate and grow your business
                capabilities, we’d be happy to support you in with the power of
                our collective expertise.
              </p>
            </div>
            <div className="text-center mx-auto w-[100%] p-12 lg:px-0 lg:!w-auto">
              <button className="bg-[#82C809] lg:w-[370px] md:h-[70px] py-3 rounded-md cursor-pointer px-16  flex items-center">
                <img src="/btn.png" />
                <span className="text-white">lock Potential</span>
              </button>
            </div>
          </div>
        </div>
        <div className="pt-32 pb-14 sm:pb-8">
          <div className="flex mb-14 md:mb-24 flex-col sm:flex-row sm:items-center sm:justify-between">
            <p className="sm:flex hidde  text-[34px]  items-center font-normal  text-[#191919]  xl:text-[65px]">
              Unlock Your
              <div className="flex items-center mx-2">
                <img
                  className="xl:w-[72px] object-fit xl:h-[46px] w-[24px] h-[24px] md:ml-2 md:-mb-2"
                  src="/UN.png"
                />
                <span className="text-[#191919]  uppercase font-semibold">
                  lmtd
                </span>{" "}
                <span className="mx-2">Potential</span>
              </div>
            </p>

            <button
              onClick={() => {
                window.scrollTo(0, 0);
              }}
              className="bg-white self-end mt-4 p-4 rounded-full text-[#080852] shadow-lg text-lg flex items-center justify-center w-10 h-10"
            >
              ↑
            </button>
          </div>

          <div className="">
            <div className="flex  flex-col-rever flex-col md:flex-row justify-between w-full   gap-3">
              <p className="sm:text-[40px] mt-2 sm:mt-0 text-[20px]">
                hello@weareunlmtd.com
              </p>

              <div className="flex gap-8  sm:text-[40px]">
                <div>LinkedIn</div>
                <div>Instagram</div>
              </div>
            </div>

            <div className="flex mt-12 flex-col-reverse flex-co md:flex-row justify-between w-full   gap-3">
              <p className="text-[18px] mt-2 sm:mt-0 ">
                2024 © weareunlmtd. All rights reserved
              </p>

              <div className="flex gap-8  text-[18px]">
                <div>
                  <Link className=" !no-underline" href={"/privacy"}>
                    Privacy
                  </Link>
                </div>
                <div>
                  <Link className=" !no-underline" href={"/cookies"}>
                    Cookie Disclaimer
                  </Link>
                </div>

                <div>
                  <Link className=" !text-black !font-thin !no-underline" href={"/terms"}>
                    Terms
                  </Link>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
