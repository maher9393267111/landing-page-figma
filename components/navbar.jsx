import React from "react";
import {useState ,useEffect} from 'react'
import { RiCloseLargeLine } from "react-icons/ri";
import { Container, Divider, SimpleGrid } from "@chakra-ui/react";

// side
// https://unlimed-com.vercel.app/img/Group%206.png

// bg

export default function Navbar() {

const [open ,setOpen]  = useState(false)

const handleToggleMenu = ()=>{

setOpen(!open)


}



  const bg = "https://unlimed-com.vercel.app/img/wallpaper.jpeg";


  const items = [
    { id: '1', name: 'ABOUT', title: '', body: 'Content for modal 1.' },
    { id: '2', name: 'SERVICES', title: 'Modal 2', body: 'Content for modal 2.' },
    { id: '3', name: 'MEMBERS', title: 'Modal 3', body: 'Content for modal 3.' },
    { id: '4', name: 'CLIENTS', title: 'Modal 4', body: 'Content for modal 4.' },
    { id: '5', name: 'CONTACT', title: '', body: "con" },
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  return (
    <div className="hero-overla h-[555px]   md:h-[800px]  ">
      <div
      
        style={{
          backgroundImage:
            "url(https://unlimed-com.vercel.app/img/wallpaper.jpeg)",
        }}
        className="bg h-[466px]   md:h-[800px]   relative"
      >

{/* 
 <div className="absolute bg-gradient-to-tr from-[rgb(75,100,137)] to-[hsl(262,36%,42%)] right-0 top-0 left-0 bottom-0">
          <img src="/section1.jpg" className="w-full h-full" />
        </div>  */}


        <div className="absolute -right-[300px] md:-right-12 top-32    ">
         <img src="/section1.png" className="w-[720px]" /> 
        </div>
        <div className={`fixed  left-0  overflow-hidden  false  z-[9999]   w-screen ${isFixed ? 'bg-[#080852] top-2' : ' top-4'}`}>
          <div className="w-[90%] flex items-center   justify-between mx-auto">
            <div>
            {!open && 
              <img
                className="md:w-[204px] md:h-[71px] w-[165px] h-[60px]"
                src="/logo.png"
              />
            }
            </div>
            <menu className="flex sm:hidden gap-4 items-center">
              <img
                className="w-[22px]  h-[22px] -z-3"
                src="https://unlimed-com.vercel.app/img/color-wheel-1.png"
              />
               <li>
               <button onClick={handleToggleMenu}
              
              >
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
              {/* <img className="cursor-pointer" src="/section1.png" /> */}
            </menu>
            <ul className=" hidden sm:flex gap-12 list-none items-center text-white">
              <li>About</li>
              <li>Services</li>
              <li>Members</li>
              <li>Clients</li>
              <li>Contact</li>
              <li>
                <img className="w-[39px] h-[39px]" src="https://unlimed-com.vercel.app/img/color-wheel-1.png" />
              </li>

             

            </ul>








          </div>
        </div>
        <div className="flex pt-12 md:pt-2 items-center w-[90%] h-full mx-auto">
          <div>
            <img src="/titleDesk.png" />
            <button className="bg-white p-4 w-[300px] text-[#080852] rounded-md mt-4">
              Collbrate With Us
            </button>
          </div>
        </div>


        {open && <div className=" !z-50 fixed top-0 right-0 left-0 bottom-0 ">
    
            <div className="!w-full  !max-w-screen-lg -top-[20px] !z-10 relativ absolute  ">
        <div
          className={`sm:flex flex-col h-[300px] w-[100vw] justify-between  bg-white relative !z-10 pt-20 pb-10    ${
            open ? "block" : "hidden"
          }`}
        >





<div className="flex items-center justify-between w-full">
          
          {/* ----------images div--------------- */}
          <div className="flex justify-between w-full   px-12">
            <img
              src="https://unlimed-com.vercel.app/img/logowhite.png"
             
              className="w-[165px]  h-[60px]"
            />
          <button onClick={handleToggleMenu} >
            
            <img src="/close.png" className="w-4 h-4" alt="" />
          {/* <RiCloseLargeLine onClick={handleToggleMenu}  className=" text-black text-4xl flex hover:text-blue-600"/> */}
          </button>
      </div>
      </div>


<Divider className="mt-10"/>

<div className=" p-7 ">
      
        <div className="grid grid-cols-2 gap-40 !w-full mx-auto  md:grid-cols-5 text-black">
          
          {/* Left column (2words) */}
          <div className="flex flex-col ml-10 sm:ml-20 items-start space-y-2 md:col-span-3  ">
            
            

            
            
            
        
            
            
            
            {items.slice(1, 3).map((item, index) => (
              <button 
              key={index}
            //   onClick={() => onOpenModal(item.id)}
              className="hover:text-blue-600 text-[20px]"
              >
                {item.name}
                </button>
            ))}
          </div>

          {/* Right column (2 words) */}
          <div className="flex flex-col -ml-10 sm:ml-0 items-start space-y-2 md:col-span-2">
            {items.slice(3).map((item, index) => (
               <button 
               key={index}
            //    onClick={() => onOpenModal(item.id)}
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
   
    
    </div>}


      </div>
    </div>
  );
}
