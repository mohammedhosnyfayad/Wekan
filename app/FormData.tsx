"use client";

import React from 'react'
import Sendform from './sendform'
import { useState } from "react";
export default function FormData() {
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

  const whatsappNumber = "201004991024";

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
    <section id="formdata" className="min-h-screen  py-12 px-4 md:px-8">
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
            <img
              src="./marketing.jpeg"
              alt="Solar Panels"
              className="h-full w-full object-cover"
            />

            {/* Floating Project Card */}
      
          </div>

        </div>
      </div>
    </section>

  )
}
