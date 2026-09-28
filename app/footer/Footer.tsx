import React from 'react'
import Link from 'next/link'
export default function Footer() {
  return (
    <div>



<footer className="bg-neutral-primary-soft rounded-base shadow-xs  m-4">
  <div className="w-full container mx-auto mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <Link href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <img src="/logo.png" className="h-15" alt="Flowbite Logo" />
      </Link>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
        <li>
          <Link href="/" className="hover:underline me-4 md:me-6">Home</Link>
        </li>
        <li>
          <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
          <Link href="/services" className="hover:underline me-4 md:me-6">Services</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-default sm:mx-auto lg:my-8" />
    <span className="block text-sm text-body sm:text-center">© 2027 . All Rights Reserved.</span>
  </div>
</footer>



    </div>
  )
}
