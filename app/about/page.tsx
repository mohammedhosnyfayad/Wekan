"use client";
import CounterNum from "../Counter";
import { motion } from "motion/react"
export default function About() {
  return (
<>
<section className="relative w-full max-w-8xl container mx-auto my-6 md:my-12 overflow-hidden rounded-3xl p-5 sm:p-8 md:p-16">
  {/* Background Dotted Flight Path */}
  <svg
    className="pointer-events-none absolute inset-0 h-full w-full stroke-gray-300"
    fill="none"
    viewBox="0 0 1000 600"
    preserveAspectRatio="none"
  >
    <path
      d="M -50,150 Q 200,650 650,450 T 1050,100"
      strokeDasharray="6 6"
      strokeWidth="1.5"
    />
  </svg>

  {/* Main Content Grid */}
  <div className="relative z-10 grid grid-cols-1 items-center gap-10 text-white sm:gap-12 lg:grid-cols-2">
    
    {/* Left Column: Text Content */}
    <motion.div className="flex flex-col items-start space-y-5 sm:space-y-6"
    
        initial={{ y: 300 , opacity:0}}
    whileInView={{ y: 0 , opacity:1 }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
    }}

    
    >
      <h2 className="text-3xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
        About Us
      </h2>

      <p className="text-sm leading-relaxed md:text-base">
        At Wekan, we don't see marketing as simply an advertisement or a temporary presence. We see it as a story built, an identity shaped, and a genuine connection created between a brand and its audience. We combine creativity with strategy to transform ideas into meaningful experiences, helping brands reach the right audience, build a stronger presence, and achieve measurable results.
      </p>

      <p className="text-sm leading-relaxed md:text-base">
        From content creation and visual identity to advertising campaigns and digital marketing, we provide integrated solutions designed to make your brand more visible, impactful, and relevant in an ever-changing market.
      </p>

      <button
        type="button"
        className="rounded-full bg-[#ff383e] px-6 py-3 text-sm font-semibold uppercase text-white shadow-md transition-colors hover:bg-[#f5141c] focus:outline-none sm:px-7"
      >
        More about
      </button>
    </motion.div>

    {/* Right Column: Layered Images */}
    <div className="relative flex h-72 w-full items-center justify-center sm:h-80 md:h-96">
      
      {/* Back Image */}
      <div className="relative z-10 h-56 w-52 overflow-hidden rounded-2xl shadow-xl sm:h-64 sm:w-60 md:h-80 md:w-72">
        <img
          src="/logowekan copy.png"
          alt="Mountain Lake"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Front Image */}
 

      {/* Paper Plane Icon */}
      <svg
        className="absolute bottom-3 left-[5%] z-20 h-7 w-7 -rotate-12 text-gray-400 opacity-70 sm:bottom-6 sm:left-[8%] sm:h-8 sm:w-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 12L3 21l18-9L3 3l3 9zm0 0h6"
        />
      </svg>
    </div>
  </div>

  {/* Bottom Row: Stats */}
  <div className="relative z-10 mt-12 grid grid-cols-2 gap-x-4 gap-y-8 border-t border-gray-100 pt-8 sm:mt-16 sm:gap-8 sm:pt-10 md:grid-cols-4"
  
  >

    <div>
      <h3 className="text-2xl font-bold text-[#243fb4] sm:text-3xl md:text-4xl">
        <CounterNum target={150} />
        <span className="text-[#ff383e]">+</span>
      </h3>
      <p className="mt-1 text-xs font-bold uppercase text-white sm:text-sm">
        Marketing Campaigns
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-[#243fb4] sm:text-3xl md:text-4xl">
        <CounterNum target={85} />
        <span className="text-[#ff383e]">%</span>
      </h3>

      <p className="mt-1 text-xs font-bold uppercase text-white sm:text-sm">
        Customer Satisfaction
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-[#243fb4] sm:text-3xl md:text-4xl">
        <CounterNum target={500} />
        <span className="text-[#ff383e]">K+</span>
      </h3>

      <p className="mt-1 text-xs font-bold uppercase text-white sm:text-sm">
        Reach
      </p>
    </div>

    <div>
      <h3 className="text-2xl font-bold text-[#243fb4] sm:text-3xl md:text-4xl">
        <CounterNum target={10} />
        <span className="text-[#ff383e]">+</span>
      </h3>

      <p className="mt-1 text-xs font-bold uppercase text-white sm:text-sm">
        Years Experience
      </p>
    </div>

  </div>








</section><div className="Apart">
  <h1 className="p-3 m-8 text-center md:text-5xl uppercase font-bold">What Sets Us Apart</h1>
<motion.div
  className="grid grid-cols-1 md:grid-cols-3"
  initial={{ y: 500, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <img src="/onesec.jpeg" alt="" />
  <img src="/twose.jpeg" alt="" />
  <img src="/threesec.jpeg" alt="" />
</motion.div>
</div>
</>    
  );
}