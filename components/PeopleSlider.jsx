import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Fragment ,useState } from "react";
import MemberModal from "./modals/memberModal";

export default function DigiSuggestion({  }) {
const product = true
const [isOpen, setIsOpen] = useState(false);
const [member , setMember] = useState(null)
 
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

  return (
   
      <>
        {/* <h5 className="text-center py-5 text-xl font-semibold">
          پیشنهاد دیجی‌کالا
        </h5> */}
        <div className="w-full h-80 cursor-pointer mb-5">
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
                slidesPerView: 3,
                grid: {
                  rows: 2,
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
          </Swiper>

          <MemberModal isOpen={isOpen} setIsOpen={setIsOpen} member={member} />
        </div>
      </>
    
  );
}