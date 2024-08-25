import React from "react";

export default function SectionOne() {
  return (
    <div id="about" className="bg-[#f5f5f5]  relative   w-full">


{/* <div className="bg-[#f5f5f5] -z- opacity-9 -right-12  !w-full !h-full   bg-[url('/clip-path-group.png')] bg-contai">

</div> */}

<img 
    src='/clip-path-group.png' 
    alt='un background' 
    className='absolute right-0  bg-cover -top-[96] transform -translate-y-1/2 w-full lg:w-1/2 h-full mt-96 max-w-full'
  />

<div className=" w-full h-full">

      
      <div className=" bg-mask flex items-center relative    h-[600px]">
        <div className="w-[90%] mx-auto">
          <div className="flex flex-col">
            <div className="">
              <img src="/sectionOneTitle.png" className="w-[90%] sm:w-[50%]" />
            </div>
            <div className="flex flex-col-reverse gap-4  sm:flex-row sm:gap-40 mt-8 ">
              <div className="flex  gap-8 md:w-[60%] justify-center">
                <div className="flex  flex-col w-1/2">
                  <span className="lg:w-1/2 text-[#82C809] font-medium text-[40px]">
                    30
                  </span>
                  <span className="text-[15px]">Years&nbsp;on the market</span>
                </div>
                <div className="  flex flex-col w-1/2">
                  <span className="lg:w-1/2 text-[#82C809] font-medium text-[40px]">
                    300
                  </span>
                  <span className="text-[15px]">Satisfied Customers</span>
                </div>
              </div>
              <div className="    sm:w-1/4 text-[14px] items-center">
                At <span className="font-bold">Unlmtd</span>, our collective
                success starts with you. We work with top independent agencies
                and industy experts to unlock growth, innovation and strategic
                business opportunities that enable you to excel in the
                competitive global marketplace.
              </div>
            </div>
          </div>



{/* <div className="bg-[#f5f5f5] -z-1 opacity-6 top-0 left-2 w-full h-full absolute  bg-[url('/clip-path-group.png')] bg-contain ">

</div> */}


        </div>
      </div>

</div>


    </div>
  );
}
