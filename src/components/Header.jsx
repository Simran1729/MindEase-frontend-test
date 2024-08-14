import React from 'react'
import { SiOpenai } from "react-icons/si";

function Header() {
  return (
    <>
        <div className = "flex justify-between py-2 border-b-2 shadow-sm font-monty bg-white fixed w-full">

            <div>
               <SiOpenai className = "inline-block mx-1 text-3xl my-2 " />
               <p className = "inline-block px-1 text-xl py-1 font-semibold">MindEase</p>
            </div>
            
            <button className = "px-2 border-[1.5px] rounded-sm border-black my-1 mx-1 bg-white hover:scale-105 transition-all duration-300">Log Out</button>

        </div>
    </>
  )
}

export default Header