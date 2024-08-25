import React from "react";

export default function SectionTwo() {
  return (
    <div>
      <div class="py-16 md:py-28 bg-gradient-to-tr bg-[#080852]  relative mx-auto w-full">
        <img 
  //  src='bg-sec3.png'
   src="/Mask.png"
  
  alt="wallpaper" class="absolute inset-0 w-full h-[1000px] object-cover mix-blend-overlay"/>

        <div class="sm:w-[90%] mx-auto mt-12 !mb-28">
          <div class="flex flex-col sm:flex-row  gap-4">
            <img
              class="object-cover hidden sm:block w-[250px] h-[280px] p-4"
              src="/A_image.png"
            />
            <div class="flex gap-4 sm:hidden">
              <img
                class="object-cover w-[80px] sm:w-[150px]"
                src="/A_image.png"
              />
              <img
                class="object-cover w-[280px] h-[120px] sm:hidden"
                src="/sectionThreeTitle.png"
              />
            </div>
            <div>
              <img
                class="object-cover hidden sm:block w-1/2"
                src="/sec3td.png"
              />
              <p class="text-white p-4 sm:p-0  sm:w-1/2 text-[16px] mt-4 font-extralight">
                Give your business the <span class="font-bold">Unlmtd</span>{" "}
                advantage by leveraging diverse skills with tailored strategies
                and innovative problem-solving to address your unique
                challenges.
              </p>
            </div>
          </div>
          <div class="text-white hidden sm:flex   space-x-4 sm:space-x-24  justify-center text-center mt-10 lg:mt-24">
            <div class="space-y-16 text-end">
              <div>Strategy and Planning</div>
              <div>Marketing and Communication</div>
              <div>Experiential &amp; Events</div>
              <div>Content Production</div>
              <p>Social, Digital &amp; Performance Marketing</p>
              <div>Technology</div>
              <div>Business Coaching</div>
              <div>Business Consulting &amp; Transformation</div>
            </div>
            <div class="relative w-[30px]">
              <div class="w-[2px] h-full bg-gradient-to-b from-[rgba(255,255,255,1)] to-[rgba(255,255,255,0)]"></div>
              <img
                class="absolute top-3/4 right-4"
                src="/circle.png"
              />
            </div>
            <div class="space-y-16 mt-10 text-start">
              <div>UX/UI &amp; Web/App Design</div>
              <div>Sustainability</div>
              <div>Corporate Governance</div>
              <div>Management Consultancy</div>
              <div>PR &amp; Corporate Communications</div>
              <div>Fractional Executive Support</div>
              <div>Training &amp; Development</div>
            </div>
          </div>
          <div class="text-white  sm:hidden flex     justify-center  mt-10">
            <div class="relative w-[30px]">
              <div class="w-[2px] h-full bg-gradient-to-b  to-[rgba(255,255,255,0)] from-[rgba(255,255,255,0.5)]"></div>
              <img
                class="absolute top-[14px] right-4"
                src="/circle.png"
              />
            </div>
            <div class="space-y-8 mt-4">
              <div>Strategy and Planning</div>
              <div>Marketing and Communication</div>
              <div>Experiential &amp; Events</div>
              <div>Content Production</div>
              <p>Social, Digital &amp; Performance Marketing</p>
              <div>Technology</div>
              <div>Business Coaching</div>
              <div>Business Consulting &amp; Transformation</div>
              <div>UX/UI &amp; Web/App Design</div>
              <div>Sustainability</div>
              <div>Corporate Governance</div>
              <div>Management Consultancy</div>
              <div>PR &amp; Corporate Communications</div>
              <div>Fractional Executive Support</div>
            </div>
          </div>
        </div>

{/* <div className=" relative">
 
<img className="hidden xl:block  absolute -right-16 -top-[166px] w-[500px] h-[400px]" src="/sec-three-green.png" alt="" />

</div> */}




      </div>
    </div>
  );
}
