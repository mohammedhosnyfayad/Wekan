"use client"
import React from 'react'
import { motion } from "motion/react"
import Image from 'next/image'


export default function Services() {
  return (
<div className="container  mx-auto flex flex-col items-center gap-16 px-6 py-10">
<div className="title text-center">
  <h1 className="mt-20 text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase font-black">
    serv<span className="text-[#ff383e]">ices</span>
  </h1>

  <p className="m-2  text-base  sm:text-lg md:text-xl lg:text-2xl uppercase">
    Here, every story begins with an idea and evolves into a presence that is seen, remembered, and felt. In our marketing services, we create strategies that blend creativity with a deep understanding of your audience, giving your brand a meaningful presence, a clear voice, and results that go beyond simply being seen
  </p>
</div>  {/* Card 1 */}
<div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-white shadow-2xl">
  <motion.div
    className="absolute left-1/2 bottom-0 h-[91.6%] w-[91.6%] -translate-x-1/2 rounded-3xl bg-[#f02a51] transition-all duration-500"
    initial={{ y: 300 }}
    whileInView={{ y: 0 }}
    transition={{
      duration: 0.2,
      ease: "easeOut",
    }}
  >
<Image
  className="mx-auto w-[40%] max-w-[300px] min-w-[120px]"
  src="/adds.png"
  alt=""
  width={300}
  height={300}
/>
    <h1 className="px-2 text-center uppercase text-[#243fb4] font-bold text-xl sm:text-2xl md:text-3xl">
      Paid advertising
    </h1>
    <p className=" text-center uppercase text-black text-[11px] leading-relaxed sm:text-sm  p-2 md:p-3 md:text-base">
    is more than simply appearing in front of an audience; it is a strategic way to deliver your message to the right people, at the right time. We build campaigns around a deep understanding of your audience and goals—from platform selection and targeting to content creation and performance analysis—turning your advertising budget into stronger visibility, smarter reach, and meaningful results
    </p>
  </motion.div>
</div>


  {/* Card 2 */}
<div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-white shadow-2xl">
  <motion.div
    className="absolute left-1/2 bottom-0 h-[91.6%] w-[91.6%] -translate-x-1/2 rounded-3xl bg-[#ec6d17] transition-all duration-500"
    initial={{ y: 300 }}
    whileInView={{ y: 0 }}
    transition={{
      duration: 0.2,
      ease: "easeOut",
    }}
  >
<Image
  className="mx-auto w-[40%] max-w-[300px] min-w-[120px]"
  src="/photoVideo.png"
  alt=""
  width={300}
  height={300}
/>
    <h1 className="px-2 text-center uppercase text-[#243fb4] font-bold text-xl sm:text-2xl md:text-3xl">
      Visual Impact
    </h1>
    <p className=" text-center uppercase text-black text-[11px] leading-relaxed sm:text-sm  p-4 md:p-3 md:text-base">
      We turn ideas into visual content that captures attention and leaves a
      lasting impression. From social media designs and logos to cinematic
      wide-format videos and engaging reels, we create cohesive visual
      content that reflects your brand identity and communicates your
      message with clarity and creativity
    </p>
  </motion.div>
</div>


  {/* Card 3 */}
<div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-white shadow-2xl">
  <motion.div
    className="absolute left-1/2 bottom-0 h-[91.6%] w-[91.6%] -translate-x-1/2 rounded-3xl bg-green-300 transition-all duration-500"
    initial={{ y: 300 }}
    whileInView={{ y: 0 }}
    transition={{
      duration: 0.2,
      ease: "easeOut",
    }}
  >
<Image
  className="mx-auto w-[40%] max-w-[300px] min-w-[120px]"
  src="/site.png"
  alt=""
  width={300}
  height={300}
/>
    <h1 className="px-2 text-center uppercase text-[#243fb4] font-bold text-xl sm:text-2xl md:text-3xl">
      Website Design & Development
    </h1>
    <p className=" text-center uppercase text-black text-[11px] leading-relaxed sm:text-sm  p-4 md:p-3 md:text-base">
We create websites that do more than look beautiful—they are built to make an impression and achieve a purpose. By combining modern design, seamless user experience, and powerful development, we deliver fast, responsive websites that reflect your brand and elevate your digital presence.    </p>
  </motion.div>
</div>

  {/* Card 4 */}
<div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-white shadow-2xl">
  <motion.div
    className="absolute left-1/2 bottom-0 h-[91.6%] w-[91.6%] -translate-x-1/2 rounded-3xl bg-[#2F6268] transition-all duration-500"
    initial={{ y: 300 }}
    whileInView={{ y: 0 }}
    transition={{
      duration: 0.2,
      ease: "easeOut",
    }}
  >
<Image
  className="mx-auto w-[40%] max-w-[300px] min-w-[120px]"
  src="/write.png"
  alt=""
  width={300}
  height={300}
/>
    <h1 className="px-2 text-center uppercase text-[#243fb4] font-bold text-xl sm:text-2xl md:text-3xl">
      Content Writing
    </h1>
    <p className=" text-center uppercase text-wihte text-[11px] leading-relaxed sm:text-sm  p-4 md:p-3 md:text-base">
We create content that is more than just words—it is a message with purpose and a voice that represents your brand. We understand your audience and shape your ideas into clear, engaging, and creative content that captures attention, builds trust, and leaves a lasting impression.
</p>
  </motion.div>
</div>
  {/* Card 5 */}
<div className="relative mx-auto aspect-square w-full max-w-[600px] overflow-hidden rounded-3xl bg-white shadow-2xl">
  <motion.div
    className="absolute left-1/2 bottom-0 h-[91.6%] w-[91.6%] -translate-x-1/2 rounded-3xl bg-[#D94A4A] transition-all duration-500"
    initial={{ y: 300 }}
    whileInView={{ y: 0 }}
    transition={{
      duration: 0.2,
      ease: "easeOut",
    }}
  >
<Image
  className="mx-auto w-[40%] max-w-[300px] min-w-[120px]"
  src="/podcaste.png"
  alt=""
  width={300}
  height={300}
/>
    <h1 className="px-2 text-center uppercase text-[#243fb4] font-bold text-xl sm:text-2xl md:text-3xl">
      Content Writing
    </h1>
    <p className=" text-center uppercase text-black text-[11px] leading-relaxed sm:text-sm  p-4 md:p-3 md:text-base">
We create content that is more than just words—it is a message with purpose and a voice that represents your brand. We understand your audience and shape your ideas into clear, engaging, and creative content that captures attention, builds trust, and leaves a lasting impression.
</p>
  </motion.div>
</div>


</div>
 )
}
