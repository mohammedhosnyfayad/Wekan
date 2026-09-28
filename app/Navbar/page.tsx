"use client";
import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { useEffect, useState } from "react";
import { motion } from "motion/react"
import Link from "next/link";
import React from 'react'
import CounterNum from "../Counter";
import { usePathname } from "next/navigation";
  const DancingScript = Dancing_Script({
    subsets: ["latin"],
  });

export default function Navbar() {
    // let number = 0;

  const pathname = usePathname();



      let [isopen , setisopen] = useState(false)
    
  return (
 <div>
  <div className="  ">

     
  {/* Navbar */}
  <nav className="fixed top-0 start-0 w-full z-20 bg-transparent">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-3 sm:py-4">

      <Link href="/" className="flex items-center">
        <img
          src="/logo.png"
          className="h-10 sm:h-12 md:h-14 lg:h-15 w-auto"
          alt="Logo"
        />
      </Link>

      <div className="flex md:order-2 items-center gap-2 sm:gap-3">

        <button 
          type="button"
          className="text-white bg-brand hover:bg-brand-strong font-medium rounded-lg text-xs sm:text-sm px-3 sm:px-4 py-2"
        >
         <Link href="./#formdata">Get Started</Link> 
        </button>

        <button onClick={()=> setisopen(!isopen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-white/10"
        >
            
          <span  className="sr-only">Open main menu</span>

          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

      </div>

<div
  className={`w-full md:w-auto md:order-1 md:flex
    ${isopen ? "translate-y-0 opacity-100 bg-[#243fb4] rounded-2xl mt-3 " : "-translate-y-full opacity-0 pointer-events-none"}
    md:translate-y-0 md:opacity-100 md:bg-transparent md:mt-0  md:pointer-events-auto
    transition-all duration-300`}
>

        <ul className="flex  flex-col md:flex-row  p-3 rounded rounded-5  items-center gap-6 lg:gap-8 font-medium">

          <li >
            <Link href="./" className={pathname === "/" ? "   hover:text-white/80 transition text-red-300" :"" }>
              Home
              
            </Link>
          </li>

          <li>
            <Link href="/about" className={pathname === "/about" ? "   hover:text-white/80 transition text-red-300" :"" }>
              About
            </Link>
          </li>

          <li>
            <Link href="/services" className={pathname  === "/services"  ? "   hover:text-white/80 transition text-red-300" :"" }>
              Services
            </Link>
          </li>

          <li>
            <Link href="/contact" className={pathname === "/contact" ? "   hover:text-white/80 transition text-red-300" :"" }>
              Contact
            </Link>
          </li>

        </ul>

      </div>

    </div>
  </nav>


  {/* Hero Content */}

</div> 

</div>

  )
}
