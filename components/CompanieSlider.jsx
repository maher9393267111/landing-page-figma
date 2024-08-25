import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { Fragment , useState } from "react";
import CompanyModal from "./modals/companyModal";

export default function DigiSuggestion({  }) {
const product = true
 
const [isOpen, setIsOpen] = useState(false);
const [company , setCompany] = useState(null)

const products = [

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
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },
    { id: 1, first: "maher", last: "ghanem", image: "/user.png" },

]

  return (
    product && (
      <>
        {/* <h5 className="text-center py-5 text-xl font-semibold">
          پیشنهاد دیجی‌کالا
        </h5> */}
        <div className="w-full h-80 cursor-pointer !mb-24 ">
          <Swiper


autoplay={true}

            slidesPerView="auto"
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
                  rows: 2,
                },
              },
            }}
            navigation={true}
            modules={[Grid, Navigation]}
            className="suggestion w-full h-full rounded-2xl "

            style={{
                backgroundImage:
                  "url(/Mask.png)",
              }}



          >
            {products
            
              .map((product, index) => {
                return (
                //   <Fragment key={index}>
                    <SwiperSlide>
                    <div>
                    <div key={index} className=" flex cursor-pointer">
                      <img
                      
                        src="/SubtractCompany.png"
                        alt="Card people"
                        className=" object-contain relative justify-start flex items-center
 
 w-[100px] h-[170px] rounded-full "
                      />
                      <div className="my-9 -ml-24">
                        <div
                          onClick={() =>{ setIsOpen(true) ; setCompany(product) }}
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



                    </div>
                    </SwiperSlide>
                //   </Fragment>
                );
              })}
          </Swiper>

          <CompanyModal isOpen={isOpen} setIsOpen={setIsOpen} company={company} />
        </div>


      </>
    )
  );
}