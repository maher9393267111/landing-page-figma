import React from "react";
import { useState, useEffect } from "react";
import { RiCloseLargeLine } from "react-icons/ri";
import { Container, Divider, SimpleGrid } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import ContactModal from "./modals/contactModal";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const handleToggleMenu = () => {
    setOpen(!open);
  };

  const bg = "https://unlimed-com.vercel.app/img/wallpaper.jpeg";

  const items = [
    { id: "1", name: "ABOUT", title: "", body: "Content for modal 1." ,section:'about' },
    {
      id: "2",
      name: "SERVICES",
      title: "Modal 2",
      body: "Content for modal 2.",
      section:"services"
    },
    {
      id: "3",
      name: "MEMBERS",
      title: "Modal 3",
      body: "Content for modal 3.",
      section:"members"
    },
    {
      id: "4",
      name: "CLIENTS",
      title: "Modal 4",
      body: "Content for modal 4.",
      section:'clients'
    },
    { id: "5", name: "CONTACT", title: "", body: "con" ,section:'contact' },
  ];

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const {  isOpen, onOpen, onClose } = useDisclosure()

  const openModal = () => {
    //  setIsOpen(true)
    console.log("ssasas");
  };

  return (
    <div className=" h-[555px]  z-50  md:h-[800px]     !overflow-x-hidden  ">
      <div
        style={{
          backgroundImage:
            "url(https://unlimed-com.vercel.app/img/wallpaper.jpeg)",
        }}

        className="bg h-[466px]   md:h-[800px]     "
      >
         

      
         

        <ContactModal isOpen={isOpen} setIsOpen={setIsOpen} />

         <div className="absolute hidden md:block !overflow-x-hidden -right-[300px] md:-right-12 top-32    ">
          <img src="/section1.png" className="w-[720px]" />
        </div> 


        <div
          className={`fixed  left-0  overflow-hidden  false  z-[9999]   w-screen ${
            isFixed ? "bg-[#080852] top-2" : " top-4"
          }`}
        >
          <div className="w-[90%] flex items-center   justify-between mx-auto">
            <div>
              {!open && (
                <img
                  className="md:w-[204px] md:h-[71px] w-[165px] h-[60px]"
                  src="/logo.png"
                />
              )}
            </div>
            <menu className="flex sm:hidden gap-4 items-center">
              <img
                className="w-[22px]  h-[22px] -z-3"
                src="https://unlimed-com.vercel.app/img/color-wheel-1.png"
              />
              <li>
                <button onClick={handleToggleMenu}>
                  <svg
                    className="w-8 h-8 mr-6 !text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                </button>
              </li>
              
            </menu>
            <ul className=" cursor-pointer z-50 hidden sm:flex gap-12 list-none items-center text-white">
              <li
                onClick={() => {
                  const element = document.getElementById("about");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                About
              </li>
              <li
                onClick={() => {
                  const element = document.getElementById("services");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Services
              </li>

              <li
                onClick={() => {
                  const element = document.getElementById("members");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Members
              </li>
              <li
                onClick={() => {
                  const element = document.getElementById("clients");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Clients
              </li>
              <li
                onClick={() => {
                  const element = document.getElementById("contact");
                  element?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact
              </li>
              <li>
                <img
                  className="w-[39px] h-[39px]"
                  src="https://unlimed-com.vercel.app/img/color-wheel-1.png"
                />
              </li>
            </ul>
          </div>
        </div>

       <div className="bg-ble-950  bg-[#080852]   !over-flow-x-hidden  z-1  bg-opacity-50 w-full h-full">

       
        <div className="flex z-50 pt-12 md:pt-2 items-center w-[90%] h-full mx-auto">
          <div>
            {/* <img src="/titleDesk.png" /> */}

            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <p class="sm: hidde cursor-pointer  text-[22px]  items-center font-normal  text-white  lg:text-[84px]">
                We Are
                <div class="flex  items-center mx-2">
                  <img
                    class="lg:w-[180px] lg:h-[115px] w-[45px]  object-center h-[30px] md:ml-2 md:-mb-2"
                    src="/btn2-big.png"
                  />

                  {/* <span class="text-white lg:text-[155px] text-[40px]  uppercase font-semibold">{text}</span>  */}

                  <span className="text-white lg:text-[155px] text-[40px] uppercase font-semibold transition-transform duration-500 ease-in-out">
                    <TypeAnimation
                      sequence={[
                        // Same substring at the start will only be typed out once, initially
                        "produc",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "Wproduce",
                        1000,
                        "produce",
                        1000,
                        "produce",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      // style={{ fontSize: '2em', display: 'inline-block' }}
                      repeat={Infinity}
                    />
                  </span>

                  {/* <span className="mx-2 text-[40px] lg-text-[155px]">Potential</span> */}
                </div>
                {/* Potential */}
              </p>
              {/* <img class="sm:hidden w-[90%]" src="/assets/icon-ft.png" /> */}
            </div>

            {/* <Button
         
            onClick={onOpen}
            // onClick={openModal}
            className="bg-white flex justify-center items-center p-4 w-[300px] text-[#080852] font-bold rounded-md mt-4">
              <span>
                <img className="w-[24px] h-[15px]" src="/btn2.png" alt="" />
              </span>
              Collbrate With Us
            </Button> */}

            <Button
              onClick={() => setIsOpen(true)}
              className="relative z-20 text-[13px]  lg:text-[22px] bg-white flex justify-center items-center p-4 w-[182px] lg:w-[300px] text-[#080852] font-bold rounded-md mt-4  "
            >
              <span>
                <img className="lg:w-[24px] w-[16px] h-[10px] lg:h-[16px]" src="/btn2.png" alt="" />
              </span>
              Collbrate With Us
            </Button>
          </div>
        </div>

</div>



        {open && (
          <div className=" !z-50 fixed top-0 right-0 left-0 bottom-0 ">
            <div className="!w-full  !max-w-screen-lg -top-[20px] !z-10 relativ absolute  ">
              <div
                className={`sm:flex flex-col h-[300px] w-[100vw] justify-between  bg-white relative !z-10 pt-20 pb-10    ${
                  open ? "block" : "hidden"
                }`}
              >
                <div className="flex items-center justify-between w-full">
                
                  <div className="flex justify-between w-full   px-12">
                    <img
                      src="https://unlimed-com.vercel.app/img/logowhite.png"
                      className="w-[165px]  h-[60px]"
                    />
                    <button onClick={handleToggleMenu}>
                      <img src="/close.png" className="w-4 h-4" alt="" />
                   
                    </button>
                  </div>
                </div>

                <Divider className="mt-10" />

                <div className=" p-7 ">
                  <div className="grid grid-cols-2 gap-40 !w-full mx-auto  md:grid-cols-5 text-black">
                 
                    <div className="flex flex-col ml-10 sm:ml-20 items-start space-y-2 md:col-span-3  ">
                      {items.slice(1, 3).map((item, index) => (
                        <button
                          key={index}
                        

                          onClick={() => {
                            const element = document.getElementById(item?.section);
                            element?.scrollIntoView({
                              behavior: "smooth",
                            }) }}


                          className="hover:text-blue-600 text-[20px]"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>

         
                    <div className="flex flex-col -ml-10 sm:ml-0 items-start space-y-2 md:col-span-2">
                      {items.slice(3).map((item, index) => (
                        <button
                          key={index}
                          onClick={() => {
                            const element = document.getElementById(item?.section);
                            element?.scrollIntoView({
                              behavior: "smooth",
                            }) }}
                     
                          className="hover:text-blue-600 text-[20px]"
                        >
                          {item.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

  
    </div>
  );
}
