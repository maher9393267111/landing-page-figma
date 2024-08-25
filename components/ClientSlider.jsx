import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation , Pagination } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";


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


]

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


        <div className="w-full h-80 cursor-pointer mb-5">
          <Swiper


autoplay={true}

            slidesPerView="auto"
            pagination={true}
            grid={{
                cols: 7,
              }}
            breakpoints={{
              0: {
                slidesPerView: 3,
                grid: {
                  rows: 3,
                },
              },
              640: {
                slidesPerView: 4,
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