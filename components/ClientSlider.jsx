import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation , Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import Slider from 'react-slick'

export default function ClientSlider({  }) {
const product = true


 
const products = [

    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },

    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },
    { id: 1, image: "/Done/apple.png" },

]


const settings = {
  className: "center",
  // centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 1,
  slidesToScroll: 1,
  dots:true,
  speed: 500,
 // rows: 2,
    
    rows: 3,
   slidesPerRow:1 ,

  responsive: [
    {
      breakpoint: 1700,
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: true,
        dots: true,

      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: true,
        dots: true,

      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 2,
        dots:true
    
      
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots:true
 
        
      }
    }
  ]
};




  return (
    product && (
      <>
        {/* <h5 className="text-center py-5 text-xl font-semibold">
          پیشنهاد دیجی‌کالا
        </h5> */}

<img 
  //  src='bg-sec3.png'
   src="/Mask.png"
  
  alt="wallpaper" class="absolute inset-0 w-full h-[1000px] object-cover mix-blend-overlay"/>


        <div className="w-full cursor-pointer mb-5">

        <Slider {...settings}>


        {products
            
            .map((product, index) => {
              return (
              //   <Fragment key={index}>
             
                    <div key={index}>
                       <img class="w-[250px] object-cover h-[250px]" src={product?.image}/>
                  </div>
                
              //   </Fragment>
              );
            })}



        </Slider>




          <Swiper


autoplay={true}

            slidesPerView="auto"
            pagination={true}
            grid={{
                cols: 7,
              }}
            breakpoints={{
              0: {
                slidesPerView: 2,
                grid: {
                  rows: 3,
                },
              },
              640: {
                slidesPerView: 3,
                grid: {
                  rows: 2,
                },
              },
              1200: {
                slidesPerView: 5,
                grid: {
                  rows: 3,
                },
              },
            }}
            navigation={true}
            modules={[Grid, Navigation ,Pagination]}
            
            className="suggestion w-full h-full rounded-2xl "
            
          >
            {products
            
              .map((product, index) => {
                return (
                //   <Fragment key={index}>
                    <SwiperSlide>
                      <div>
                         <img class="w-[250px] h-[250px]" src={product?.image}/>
                    </div>
                    </SwiperSlide>
                //   </Fragment>
                );
              })}
          </Swiper>
        </div>
      </>
    )
  );
}