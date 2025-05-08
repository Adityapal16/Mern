'use client'
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoEllipseSharp } from "react-icons/io5";

const Home = () => {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between bg-amber-50 h-14 px-4 sm:px-8">
        <div className="text-2xl text-yellow-500">
          <IoEllipseSharp />
        </div>
        <nav className="flex gap-4 text-sm sm:gap-6 sm:text-base">
          <a href="#" className="bg-yellow-300 px-4 py-1 rounded-2xl text-black">Service</a>
          <a href="#" className="bg-yellow-300 px-4 py-1 rounded-2xl text-black">Contact</a>
          <a href="#" className="bg-yellow-300 px-4 py-1 rounded-2xl text-black">About</a>
          <a href="#" className="bg-yellow-300 px-4 py-1 rounded-2xl text-black">Login/Signup</a>
          <FaUserCircle className="text-2xl text-black ml-2" />
        </nav>
      </div>

      {/* Hero Text */}
      <div className="relative text-center mt-12 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">Manage</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold">Your Business</h2>
        <span className="absolute inset-0 bg-yellow-300 rounded-full blur-2xl opacity-50 -z-10 w-3/4 h-24 mx-auto top-16" />
      </div>

      <div className="text-center mt-6 px-4">
        <p className="text-lg sm:text-xl">
          We Can Give You Best Satisfactory Result Out There
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 px-4">
        <div className="bg-yellow-400 rounded-3xl p-6 w-[90%] sm:w-[350px] h-[250px] shadow-lg">
          {/* Card 1 Content */}
        </div>
        <div className="bg-yellow-400 rounded-3xl p-6 w-[90%] sm:w-[350px] h-[250px] shadow-lg">
          {/* Card 2 Content */}
        </div>
        <div className="bg-yellow-400 rounded-3xl p-6 w-[90%] sm:w-[350px] h-[250px] shadow-lg">
          {/* Card 3 Content */}
        </div>
      </div>
    </>
  )
}

export default Home