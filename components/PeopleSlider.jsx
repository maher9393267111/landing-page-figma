import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Fragment ,useState } from "react";
import MemberModal from "./modals/memberModal";
import useWindowDimensions from "./Functions/HandleWidth";

import Slider from "react-slick";


export default function DigiSuggestion({  }) {
const product = true
const [isOpen, setIsOpen] = useState(false);
const [member , setMember] = useState(null)
const { height, width } = useWindowDimensions();
 
const products = [

    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "mohanad", last: "ghanem", image: "/user.png" },
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
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },

]


const settings = {
  className: "center",
  // centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
 // rows: 2,
    slidesPerRow: 2,
    rows: 2,
   slidesPerRow:1 ,

  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false,

      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
    
      
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
 
        
      }
    }
  ]
};

  return (
   
      <>
        {/* <h5 className="text-center py-5 text-xl font-semibold">
          پیشنهاد دیجی‌کالا
        </h5> */}
        
        <div className="w-full h-80 cursor-pointer mb-5 overflow-hidden">



        <Slider {...settings}>
    

    {products.map((product, index) => {
                  return (
                    <Fragment key={index}>
                    
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
                                onClick={() =>{ setIsOpen(true) ; setMember(product) }}
                              src={product?.image}
                              className=" object-fit w-[60px] -mt-2 absolute rounded-full  z-50  
    "
                            />
                            <div
                              className=" bg-white   px-8 ml-4 rounded-3xl  relative h-[100px]  font-bold text-wrap   content-center  
    "
                            >
                              <div className="mt-10">
                                {product?.first}<div className="font-normal">{product?.last}</div>
                              </div>
    
                          
                            </div>
                          </div>
                        </div>
                      </div>
                 
                    </Fragment>
                  )})}
                
    
    
    
          </Slider>







          {/* <Swiper
             slidesPerView={2}
            breakpoints={{
              0: {
                slidesPerView: 1,
                grid: {
                  rows: 1,
                },
              },
              640: {
                slidesPerView: 1,
                grid: {
                  rows: 1,
                },
              },
              1200: {
                slidesPerView: 4,
                grid: {
                  rows: 2,
                },
              },
            }}
            navigation={true}
            modules={[Grid, Navigation]}
            className="suggestion w-full h-full rounded-2xl "
          >
            {products
            
              .map((product, index) => {
                return (
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
                              onClick={() =>{ setIsOpen(true) ; setMember(product) }}
                            src={product?.image}
                            className=" object-fit w-[60px] -mt-2 absolute rounded-full  z-50  
 "
                          />
                          <div
                            className=" bg-white   px-8 ml-4 rounded-3xl  relative h-[100px]  font-bold text-wrap   content-center  
"
                          >
                            <div className="mt-10">
                              {product?.first}<div className="font-normal">{product?.last}</div>
                            </div>

                        
                          </div>
                        </div>
                      </div>
                    </div>
                    </SwiperSlide>
                  </Fragment>
                );
              })}
          </Swiper> */}




          <MemberModal isOpen={isOpen} setIsOpen={setIsOpen} member={member} />
        </div>
      </>
    
  );
}