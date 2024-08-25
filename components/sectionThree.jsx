import React, { Fragment } from "react";

// import 'swiper/css/grid';
// import { SwiperSlide, Swiper ,Pagination } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

// import { Swiper, SwiperSlide, Pagination } from "swiper/react";
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
// import { Grid, Navigation } from "swiper";
import PeopleSlider from './PeopleSlider'
import CompanySlider from './CompanieSlider'

export default function SectionThree() {
  const people = [
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
  ];

  return (
    <div 
    className=" !bg-repeat"
    // style={{
    //   backgroundImage:
    //     "url(https://unlimed-com.vercel.app/img/clip-path-group.png)",
    // }}
    
    >
      <div className=" bg-[#f5f5f5] w-full  bg-[url('/clip-path-group.png')] bg-contain ">
        <img
          src="/sec-three-green.png"
          className="-mt-20 relative  hidden sm:block h-[150px] object-cover left-[87%]"
        />
        <div className="w-[90%] mx-auto pt-8 ">
          <img src="/sectt.png" className=" w-full sm:w-1/4 " />
          <p className="sm:ml-auto mt-4 sm:mt-0 sm:w-1/2">
            Choosing <b>Unlmtd</b> means working with top talent who genuinely
            care about your success. Our approachable and knowledgeable team is
            dedicated to achieving your goals with ease and confidence.
          </p>

          {/* ----------  COMPANIES SECTION ------ */}

          <div>
            <p className="text-xs ml-1 font-semibold hidden sm:block">
              Meet the collective
            </p>
            <p className="ml-1 capitalize  block mt-4 font-bold text-[16px] sm:hidden">
              our companies
            </p>

            <CompanySlider/>

            {/* <Swiper
              breakpoints={{
                340: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1536: { slidesPerView: 4 },
              }}
              spaceBetween={30}

              grid={{
                rows: 2,

              }}
              loop={true}
               slidesPerColumn={3}
               slidesPerColumnFill={"row"}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}
              modules={[Pagination, Navigation]}
              navigation
              className="h-full mt-12 "

        

            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
                (banner, index) => (
                  <SwiperSlide>
                    <div key={index} className=" flex cursor-pointer">
                      <img
                        src="/SubtractCompany.png"
                        alt="Card people"
                        className=" object-contain relative justify-start flex items-center
 
 w-[100px] h-[170px] rounded-full "
                      />
                      <div className="my-9 -ml-24">
                        <div
                          className=" bg-white   px-8 ml-4 rounded-3xl  relative h-[100px]  font-bold text-wrap   content-center  
"
                        >
                          <div className="mt-1">
                         
                            <img
                              src="/cmd.png"
                              className="object-contain w-[65px]  z-10 rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              )}
            </Swiper> */}

            {/* -----TEST-- */}

            {/* <div className="w-full h-80 cursor-pointer mb-5">
          <Swiper
            slidesPerView="auto"
            breakpoints={{
              0: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                },
              },
              640: {
                slidesPerView: 5,
                grid: {
                  rows: 2,
                },
              },
              1200: {
                slidesPerView: 6,
                grid: {
                  rows: 2,
                },
              },
            }}
            // navigation
            modules={[Grid, Navigation]}
            className="suggestion w-full h-full rounded-2xl border"
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((product, index) => {
                return (
                  <Fragment key={index}>
                    <SwiperSlide>
                    <div key={index} className=" flex cursor-pointer">
                      <img
                        src="/SubtractCompany.png"
                        alt="Card people"
                        className=" object-contain relative justify-start flex items-center
 
 w-[100px] h-[170px] rounded-full "
                      />
                      <div className="my-9 -ml-24">
                        <div
                          className=" bg-white   px-8 ml-4 rounded-3xl  relative h-[100px]  font-bold text-wrap   content-center  
"
                        >
                          <div className="mt-1">
                         
                            <img
                              src="/cmd.png"
                              className="object-contain w-[65px]  z-10 rounded-lg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                  </Fragment>
                );
              })}
          </Swiper>
        </div> */}

            {/* ------- */}

            {/* <div className="-ml-4 mt-4"><div className="swiper swiper-initialized swiper-horizontal swiper-grid">
    
    < div className="swiper-wrapper" style="width: 1441px;"><div className="swiper-slide swiper-slide-active" style="width: 240.167px;">
    <div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon1.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide swiper-slide-next" style="width: 240.167px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon2.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon3.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon4.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon5.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon6.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px; margin-top: 0px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon7.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px; margin-top: 0px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon8.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px; margin-top: 0px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon9.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px; margin-top: 0px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon10.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px; margin-top: 0px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/image 11.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div><div className="swiper-slide" style="width: 240.167px; margin-top: 0px;"><div className="flex  w-full cursor-pointer"><img className="object-contain -z-10 relative justify-start flex items-center w-[80px] h-[170px]" src="/assets/Subtract (3).png"><div className="-ml-12 my-14 bg-white flex justify-start items-start "><img src="/assets/icon12.png" className="object-contain w-[50px] sm:w-[80px] md:w-[100px] h-[60px] absolute z-10 rounded-lg bg-white"></div></div></div>
    
    
    </div>

    
    </div>
    
    </div> */}

            {/* ---------PEOPLE SECTION-------- */}

            <hr className="bg-[#82C809] h-[2px] hidden sm:block w-[90%]" />
            <p className="ml-1 capitalize  block mt-4 font-bold text-[16px] sm:hidden">
              our people
            </p>

            <PeopleSlider/>

            {/* <Swiper
              breakpoints={{
                340: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
                1536: { slidesPerView: 4 },
              }}

              loop={true}
              slidesPerColumn={3}
              grabCursor={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: true,
              }}

              navigation
              className="h-full mt-12 swiper-container-multirow"



              slidesPerView="auto"
              breakpoints={{
                0: {
                  slidesPerView: 3,
                  grid: {
                    rows: 2,
                  },
                },
                640: {
                  slidesPerView: 5,
                  grid: {
                    rows: 2,
                  },
                },
                1200: {
                  slidesPerView: 6,
                  grid: {
                    rows: 2,
                  },
                },
              }}
              navigation={true}
              modules={[Grid, Navigation]}
            >
              {people.map((banner, index) => (
                <Fragment key={index}>
                  <SwiperSlide>
                    <div>
                      <div className=" flex cursor-pointer">
                        <img
                          src="/peoopleBg.png"
                          alt="Card people"
                          className=" object-contain relative justify-start flex items-center
 
 w-[100px] h-[170px] rounded-full "
                        />
                        <div className="my-9 -ml-24">
                          <img
                            src={banner?.image}
                            className=" object-fit w-[60px] -mt-2 absolute rounded-full  z-50  
 "
                          />
                          <div
                            className=" bg-white   px-8 ml-4 rounded-3xl  relative h-[100px]  font-bold text-wrap   content-center  
"
                          >
                            <div className="mt-10">
                              Roger<div className="font-normal">Kanakri</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Fragment>
              ))}
            </Swiper> */}

          </div>
        </div>
      </div>

      {/* </div>

</div> */}
    </div>
  );
}
