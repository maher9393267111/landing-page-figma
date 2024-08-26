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


 
const products= [
  { id: 1, image: '/Done/cocacola.png' },

  { id: 3, image: '/Done/visa.png' },
  { id: 4, image: '/Done/alafya.png' },
  { id: 5, image: '/Done/bupa.png' },
  { id: 6, image: '/Done/cbd.png' },
  { id: 7, image: '/Done/cr7.png' },
  { id: 8, image: '/Done/economicdb.png' },
  { id: 9, image: '/Done/dubai.png' },
  { id: 10, image: '/Done/doct.png' },
  { id: 11, image: '/Done/emirates.png' },
  { id: 12, image: '/Done/ford.png' },
  { id: 13, image: '/Done/geely.png' },
  { id: 14, image: '/Done/google.png' },
  { id: 15, image: '/Done/bk.png' },
  { id: 16, image: '/Done/bat.png' },
  { id: 17, image: '/Done/dcf.png' },
  { id: 18, image: '/Done/audi.png' },
  { id: 19, image: '/Done/dubai.png' },
  { id: 20, image: '/Done/ikea.png' },
  { id: 21, image: '/Done/jaguar.png' },
  { id: 22, image: '/Done/loreal.png' },
  { id: 23, image: '/Done/landrover.png' },
  { id: 24, image: '/Done/mashreq.png' },
  { id: 25, image: '/Done/mf.png' },
  { id: 26, image: '/Done/mf2.png' },
  { id: 27, image: '/Done/michelin.png' },
  { id: 28, image: '/Done/mondelez.png' },
  { id: 29, image: '/Done/motn.png' },
  { id: 30, image: '/Done/neom.png' },
  { id: 31, image: '/Done/nestle.png' },
  { id: 32, image: '/Done/netflix.png' },
  { id: 33, image: '/Done/nfi.png' },
  { id: 34, image: '/Done/op.png' },
  { id: 35, image: '/Done/pandg.png' },
  { id: 36, image: '/Done/renault.png' },
  { id: 37, image: '/Done/pepsi.png' },
  { id: 38, image: '/Done/qasrwatan.png' },
  { id: 39, image: '/Done/un.png' },
  { id: 40, image: '/Done/turkishal.png' },
  { id: 41, image: '/Done/unilever.png' },
  { id: 42, image: '/Done/watania.png' },
  { id: 43, image: '/Done/wb.png' },
  { id: 44, image: '/Done/wujha.png' },
  { id: 45, image: '/Done/yap.png' },
  { id: 46, image: '/Done/yas.png' },
  { id: 47, image: '/Done/zain.png' },
  { id: 48, image: '/Done/zm.png' },
  { id: 49, image: '/Done/alafya.png' },
  { id: 50, image: '/Done/alitalia.png' },
  { id: 51, image: '/Done/almarai.png' },
  { id: 52, image: '/Done/anghami.png' },
  { id: 53, image: '/Done/americana.png' },
  { id: 54, image: '/Done/bloomingg.png' },
  { id: 55, image: '/Done/flydubai.png' }, 
   { id: 56, image: '/Done/ikea.png' },
   { id: 57, image: '/Done/hershey.png' },
];


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
    
    rows: 4,
   slidesPerRow:1 ,

  responsive: [
    {
      breakpoint:2500,
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
      <div id="clients">
        {/* <h5 className="text-center py-5 text-xl font-semibold">
          پیشنهاد دیجی‌کالا
        </h5> */}

<img 
  //  src='bg-sec3.png'
   src="/Mask.png"
  
  alt="wallpaper" class="absolute inset-0 w-full h-[1000px] object-cover mix-blend-overlay"/>


        <div className="w-full cursor-pointer mb-5 mt-16">

        <Slider {...settings}>


        {products
            
            .map((product, index) => {
              return (
              //   <Fragment key={index}>
             
                    <div key={index}>
                       <img class="md:w-[120px] py-2 object-cover md:h-[120px]  w-[77px] h-[77px]" src={product?.image}/>
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
      </div>
    )
  );
}