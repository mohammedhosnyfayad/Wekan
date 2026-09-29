"use client";

import Image from "next/image";
import { Dancing_Script } from "next/font/google";
import { useState } from "react";
import { motion } from "motion/react"
import FormData from "./FormData";
import Link from "next/link";

  const DancingScript = Dancing_Script({
    subsets: ["latin"],
  });

export default function Home() {

  // let [isopen , setisopen] = useState(false)
  
  return (
    <>
      <section className="min-h-screen bg-[url('/cover.jpg')] bg-cover bg-center bg-no-repeat  flex items-center justify-center text-center px-4 sm:px-6 bg-black/40">

    <motion.div className="w-full max-w-5xl"
            initial={{ opacity:0,y: 200  }} 
whileInView={{ opacity:1,y: 0}}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
    
    >

      <h1

        className={`${DancingScript.className} uppercase font-bold text-white leading-none mb-5 sm:mb-6 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]`}
      >
        marketing
      </h1>

      <p className="text-white uppercase font-bold mb-6 sm:mb-8 text-base sm:text-xl md:text-2xl lg:text-3xl">
        We create{" "}
        <span className="bg-gradient-to-r from-[#ff383e] to-[#dd2626] bg-clip-text text-transparent">
          distinction
        </span>{" "}
        for you.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-5">
    <Link href="./#page">
        <button className="bg-[#ff383e] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base hover:bg-[#f1121a] transition">
          Get Started
        </button>
</Link>
  <Link href="/services">
        <button className="bg-[#243fb4] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-medium text-sm sm:text-base uppercase hover:bg-[#3757e4] transition">
          Our Services
        </button>
</Link>
      </div>

    </motion.div>

  </section>
    <div id="page" className="">
  <div className="cards p-[15px] container mx-auto">
  <div className="title p-5 text-5xl text-center">
    <h1 className="m-[20px] uppercase font-bold">What We Create for You ?</h1>
    <span className="text-[#FF383E]">---------------------------------</span>
  </div>
<motion.div  className="content-cards flex  flex-col md:flex-row    m-5 justify-around"

  initial={{ opacity:0,y: 200  }} 
whileInView={{ opacity:1,y: 0}}
transition={{ duration: 0.6 }}
viewport={{ once: true }}
>
  <motion.div className="rounded-lg border w-full mb-3 md:mb-0  md:w-1/4 border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6">
    <span className="inline-block rounded-sm bg-[#243fb4] p-2 text-white">
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077 1.41-.513m14.095-5.13 1.41-.513M5.106 17.785l1.15-.964m11.49-9.642 1.149-.964M7.501 19.795l.75-1.3m7.5-12.99.75-1.3m-6.063 16.658.26-1.477m2.605-14.772.26-1.477m0 17.726-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205 12 12m6.894 5.785-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
</svg>

    </span>
    <Link href="/services">
      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
       We build brands that stand out.
      </h3>
    </Link>
    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
We build strong and distinctive brands that help you stand out from the competition through smart marketing strategies and a unique identity that reflects your business and connects with the right audience.
    </p>
    <Link href="/services" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more
      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        →
      </span>
    </Link>
  </motion.div>
  <div className="rounded-lg border w-full mb-3 md:mb-0  md:w-1/4 border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6">
    <span className="inline-block rounded-sm bg-[#243fb4] p-2 text-white">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
</svg>

    </span>
    <Link href="/about">
      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
       We make every campaign count.
      </h3>
    </Link>
    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    We make every campaign count through smart planning, impactful content, and precise targeting, ensuring your message reaches the right audience and delivers the best possible results for your brand.
    </p>
    <Link href="/about" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more
      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        →
      </span>
    </Link>
  </div>
  <div className="rounded-lg border w-full md:w-1/4  border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6">
    <span className="inline-block rounded-sm bg-[#243fb4] p-2 text-3xl text-white">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75h-.75v-.75ZM13.5 13.5h.75v.75h-.75v-.75ZM13.5 19.5h.75v.75h-.75v-.75ZM19.5 13.5h.75v.75h-.75v-.75ZM19.5 19.5h.75v.75h-.75v-.75ZM16.5 16.5h.75v.75h-.75v-.75Z" />
</svg>

    </span>
    <Link href="/services">
      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
       We turn attention into real results.
      </h3>
    </Link>
    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
    We turn your audience’s attention into real results through smart marketing strategies designed to increase engagement, attract potential customers, and drive consistent growth for your brand.
    </p>
    <Link href="/services" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
      Find out more
      <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
        →
      </span>
    </Link>
  </div>
</motion.div>
<motion.div className="mt-15"

initial={{ scale: 0 }} 
whileInView={{ scale: 1 }}
transition={{ duration: 0.3 }}
viewport={{ once: true }}
>
  <h1 className="p-3 text-[30px] md:text-[40px] font-bold">About Us in Brief</h1>
  <span className="text-[#FF383E] text-[23px] md:text-[30px]">---------------------------------</span>
  <div className="about-text  w-full flex flex-col md:flex-row items-center justify-around">
  
  <div className="text p-3  md:w-[70%] md:p-0">
    <p className="uppercase text-[16px]  md:text-[21px]">
At <span className="bg-[#ff383e] px-2">WEKAN</span>, we are a specialized marketing company providing integrated marketing solutions and services. We help brands build a strong presence and reach their target audience through paid advertising, visual content creation, including videos and graphic designs, as well as website design, development, and programming. With experience and passion, we turn your ideas into creative solutions and real results that help your business grow and stand out.    </p>
  </div>
  <div className="img  w-[30%]">
    <img className="hidden md:block text-center" src="/photo.png" alt="" />
  </div>
</div>

</motion.div>
</div>
<div className="mt-[50px] bg-[#161f22] ">
  <div className="cards p-[15px] container mx-auto">
  <h1 className="p-3 text-[30px] md:text-[40px] font-bold">Some of Our Clients' Reviews</h1>
  <span className="text-[#FF383E] text-[23px] md:text-[30px]">-------------------------------------------------------</span>

  <div  className="content-cards flex  flex-col md:flex-row    m-5 justify-around">
    
<div className="max-w-md md:ms-4 mb-3 lg:mb-0  bg-white rounded-2xl hover:-rotate-3 transition duration-300 p-8 shadow-sm border border-gray-100 font-sans">
  <div className="w-14 h-14 bg-blue-50/60 rounded-full flex items-center justify-center text-blue-300 text-6xl font-serif mb-3 select-none">
    “
  </div>
  <p className="text-gray-700 text-lg leading-relaxed mb-8">
    The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and <span className="text-orange-500 font-medium">challenging</span> words.
  </p>
  <div className="flex items-center gap-4">
    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80" alt="Ahmad Khan" className="w-12 h-12 rounded-full object-cover" />
    <div>
      <h4 className="font-bold text-gray-900 text-base leading-tight">Ahmad Khan</h4>
      <p className="text-gray-400 text-sm">antic_circus_76</p>
    </div>
  </div>
</div>
<div className="max-w-md md:ms-4 mb-3 lg:mb-0 bg-white rounded-2xl hover:-translate-y-3  transition duration-300 p-8 shadow-sm border border-gray-100 font-sans">
  <div className="w-14 h-14 bg-blue-50/60 rounded-full flex items-center justify-center text-blue-300 text-6xl font-serif mb-3 select-none">
    “
  </div>
  <p className="text-gray-700 text-lg leading-relaxed mb-8">
    The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and <span className="text-orange-500 font-medium">challenging</span> words.
  </p>
  <div className="flex items-center gap-4">
    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80" alt="Ahmad Khan" className="w-12 h-12 rounded-full object-cover" />
    <div>
      <h4 className="font-bold text-gray-900 text-base leading-tight">Ahmad Khan</h4>
      <p className="text-gray-400 text-sm">antic_circus_76</p>
    </div>
  </div>
</div>
<div className="max-w-md md:ms-4 mb-3 lg:mb-0 bg-white rounded-2xl hover:rotate-3 transition duration-300 p-8 shadow-sm border border-gray-100 font-sans">
  <div className="w-14 h-14 bg-blue-50/60 rounded-full flex items-center justify-center text-blue-300 text-6xl font-serif mb-3 select-none">
    “
  </div>
  <p className="text-gray-700 text-lg leading-relaxed mb-8">
    The progress tracker is fantastic. It’s motivating to see how much I’ve improved over time. The app has a great mix of common and <span className="text-orange-500 font-medium">challenging</span> words.
  </p>
  <div className="flex items-center gap-4">
    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&h=120&q=80" alt="Ahmad Khan" className="w-12 h-12 rounded-full object-cover" />
    <div>
      <h4 className="font-bold text-gray-900 text-base leading-tight">Ahmad Khan</h4>
      <p className="text-gray-400 text-sm">antic_circus_76</p>
    </div>
  </div>
</div>
</div>
</div>

</div>
</div>
    <FormData/>
    </>

);
}
