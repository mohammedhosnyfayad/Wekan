"use client"
import React, { useState } from 'react'
import FormData from '../FormData'
import { motion } from 'motion/react';
import Sendform from '../sendform';
import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
export default function page() {
    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    phone: "",
    desiredGoal: ""
  });
  
  
  
  
  
  function handleChange(e:any) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }
  
  
  
  function handleSubmit(e:any) {
    e.preventDefault();
  
    const whatsappNumber = "201018078546";
  
    const whatsappMessage = `
  New Project Request
  
  Full Name: ${formData.fullName}
  Email: ${formData.email}
  Project Type: ${formData.projectType}
  Phone Number: ${formData.phone}
  Desired Goal: ${formData.desiredGoal}
  `;
  
    const encodedMessage = encodeURIComponent(whatsappMessage);
  
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
  
    window.open(whatsappUrl, "_blank");
  
  
  
    setFormData({
      fullName: "",
      email: "",
      projectType: "",
      phone: "",
      desiredGoal: ""
    });
  }
  
  return (

       <motion.section className="min-h-screen mt-30 py-12 px-4 md:px-8"
    initial={{ y: 300 , opacity:0}}
    whileInView={{ y: 0 , opacity:1 }}
    transition={{
      duration: 0.5,
      ease: "easeOut",
    }}

       >
      <div className="mx-auto max-w-6xl">
        
        {/* Section Header */}
        <div className="mb-10">
        <h1 className="p-3 text-[30px] md:text-[40px] font-bold">Tell Us About Your Project</h1>
  <span className="text-[#FF383E] text-[23px] md:text-[30px]">-------------------------------------------------------</span>

        </div>

        {/* Container Card */}
        <div className="flex w-full flex-col overflow-hidden rounded-[2.5rem] bg-white p-6 shadow-xl lg:flex-row lg:gap-12 lg:p-12">
          
          {/* Left Side: Form Content */}
          <div className="flex flex-1 flex-col justify-center py-4 lg:py-6">
            {/* Brand / Logo */}

            {/* Inner Heading & Subtitle */}
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Are you ready to start your project ?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">
              Start with us and turn your idea into a successful project. Fill out the form, and we’ll get in touch with you to discuss the details.
            </p>

            {/* Form */}
                 <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
  <div>
    <label className="block text-xs font-semibold text-gray-800">
      Full Name
    </label>

    <input
      type="text"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      placeholder="Enter your name"
      className="mt-1.5 w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label className="block text-xs font-semibold text-gray-800">
      Email
    </label>

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      className="mt-1.5 w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label className="block text-xs font-semibold text-gray-800">
      Project Type
    </label>

    <textarea
      name="projectType"
      value={formData.projectType}
      onChange={handleChange}
      placeholder="Project Type"
      className="mt-1.5 w-full min-h-32 rounded-xl bg-slate-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-500 resize-none"
    />
  </div>

  <div>
    <label className="block text-xs font-semibold text-gray-800">
      Phone Number
    </label>

    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Phone Number"
      className="mt-1.5 w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label className="block text-xs font-semibold text-gray-800">
      Desired Goal
    </label>

    <input
      type="text"
      name="desiredGoal"
      value={formData.desiredGoal}
      onChange={handleChange}
      placeholder="Desired Goal"
      className="mt-1.5 w-full rounded-xl bg-slate-50 px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none transition focus:bg-white focus:ring-2 focus:ring-blue-500"
    />
  </div>

              <button 
                type="submit"
                className="mt-6 w-full rounded-xl bg-blue-600 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-[0.99]"
              >
                Send Request
              </button>

</form>

          </div>

          {/* Right Side: Image with Floating Card */}
          <div className="relative mt-8 min-h-[380px] flex-1 overflow-hidden rounded-[2rem] lg:mt-0 lg:min-h-[550px]">
          <div className="w-full max-w-md p-6 space-y-4 font-sans">
      {/* Email Card */}
      <a
        href="mailto:hello@thesoftking.com"
        className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="text-indigo-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Email Us</p>
            <p className="text-sm font-semibold text-gray-900">wekan22@gmail.com</p>
          </div>
        </div>
        <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:bg-indigo-50 transition-colors">
          <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </a>

      {/* Phone Card */}
      <a
        href="tel:+880123456789"
        className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md transition-all group"
      >
        <div className="flex items-center gap-4">
          <div className="text-indigo-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Call Us</p>
            <p className="text-sm font-semibold text-gray-900">+201004991024</p>
          </div>
        </div>
        <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:bg-indigo-50 transition-colors">
          <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </a>

      {/* Location Card */}
      <div className="flex items-center justify-between p-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-sm border border-white/50 hover:shadow-md transition-all group cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="text-indigo-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <p className="text-xs text-gray-500 font-medium">Our Headquarter</p>
            <p className="text-sm font-semibold text-gray-900">Egypt, Portsiad</p>
          </div>
        </div>
        <div className="p-2 bg-white rounded-xl shadow-sm border border-gray-100 group-hover:bg-indigo-50 transition-colors">
          <svg className="w-4 h-4 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17L17 7M17 7H7M17 7v10" />
          </svg>
        </div>
      </div>

      {/* Social Links */}
  <div className="flex justify-center items-center gap-4 pt-2">
  <span className="text-sm font-semibold text-gray-900 leading-tight">
    Follow
    <br />
    us on
  </span>

  <div className="flex items-center gap-2">
    {/* Facebook */}
    <a target="_blank"
      href="https://www.facebook.com/profile.php?id=61573566214603&locale=ar_AR" 
      className="w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 text-gray-700 hover:text-indigo-600 hover:shadow transition-all"
    >
      <FaFacebookF className="w-4 h-4" />
    </a>

    {/* Instagram */}
    <a target="_blank"
      href="https://www.instagram.com/wekanmarkting/"
      className="w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 text-gray-700 hover:text-indigo-600 hover:shadow transition-all"
    >
      <FaInstagram className="w-4 h-4" />
    </a>

    {/* TikTok */}
    <a
      href="#"
      className="w-10 h-10 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-white/50 text-gray-700 hover:text-indigo-600 hover:shadow transition-all"
    >
      <FaTiktok className="w-4 h-4" />
    </a>
  </div>
</div>
    </div>
      
          </div>

        </div>
      </div>
    </motion.section>
  )
}
