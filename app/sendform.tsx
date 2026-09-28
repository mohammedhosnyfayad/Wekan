"use client"
import React, { ReactNode, useState } from 'react'

export default function Sendform({cls , child}:{cls:string, child:string}) {
    const [formData, setFormData] = useState({
  name: "",
  email: "",
  phone: "",
  projectType: "",
  message: ""
});
  return (
    <button className={cls}>{child}</button>
  )
}
