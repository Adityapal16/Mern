'use client'
import React from 'react'
import { FaUserCircle } from "react-icons/fa";
import { IoEllipseSharp } from "react-icons/io5";

const Home = () => {
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between bg-[var(--dusray)] backdrop-blur-xl h-14 px-4 sm:px-8">
        <div className="text-2xl text-[var(--goldy)]">
          <IoEllipseSharp className='scale-200' />
        </div>
        <nav className="flex gap-4 text-sm sm:gap-6 sm:text-base">
          <a href="#" className="bg-[var(--pehla)] px-4 py-1 rounded-2xl text-[var(--blacky)] w-20 text-center">Service</a>
          <a href="#" className="bg-[var(--pehla)] px-4 py-1 rounded-2xl text-[var(--blacky)] w-20 text-center">Contact</a>
          <a href="#" className="bg-[var(--pehla)] px-4 py-1 rounded-2xl text-[var(--blacky)] w-20 text-center">About</a>
          <a href="#" className="bg-[var(--pehla)] px-4 py-1 rounded-2xl text-[var(--blacky)] w-40 text-center">Login/Signup</a>
          <FaUserCircle className="text-2xl text-[var(--pehla)] ml-2" />
        </nav>
      </div>

      {/* Hero Text */}
      <div className="relative text-center mt-12 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold translate-y-7 text-[var(--blacky)]">Manage</h1>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold translate-y-7 text-[var(--blacky)]">Your Business</h2>
        <span className="absolute inset-0 bg-[var(--nila)] rounded-full blur-2xl opacity-50 -z-10 w-3/4 h-24 mx-auto top-16 left-30" />
      </div>

      <div className="text-center mt-6 px-4 translate-y-9">
        <p className="text-lg sm:text-xl text-[var(--blacky)]/80">
          We Can Give You Best Satisfactory Result Out There
        </p>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4 translate-y-18 px-4">

      {/* Sales Graph*/}

        <div className="bg-[var(--nila)] rounded-3xl p-6 w-[90%] sm:w-[350px] h-[250px] shadow-lg scale-105">
           
           <div class="bg-gray-200  rounded-2xl flex items-center justify-center w-[full] scale-75 -translate-y-6">

              <div class="bg-white rounded-2xl shadow p-6 w-[30rem] ">
                <div class="flex justify-between items-center mb-4">
                  <h2 class="text-lg font-semibold text-gray-900">Closed Won by Type</h2>
                  <span class="text-gray-400 text-xl">&#8250;</span>
                </div>

                <div class="text-3xl font-bold text-gray-900 mb-2">$11.680</div>
                <p class="text-gray-500 text-sm mb-6">
                  this month's total closed won increased<br/>
                  from last month's around <span class="text-green-500 font-medium">+$6.450</span>
                </p>


                <div class="w-full h-40 relative flex items-end space-x-2">

                  <div class="flex flex-col justify-end items-center h-full w-1/6">
                    <div class="bg-blue-300 w-full rounded-t h-[25%]"></div>
                    <div class="bg-blue-500 w-full rounded-t h-[20%] -mt-1"></div>
                  </div>

                  <div class="flex flex-col justify-end items-center h-full w-1/6">
                    <div class="bg-blue-300 w-full rounded-t h-[30%]"></div>
                    <div class="bg-blue-500 w-full rounded-t h-[25%] -mt-1"></div>
                  </div>

                  <div class="flex flex-col justify-end items-center h-full w-1/6">
                    <div class="bg-blue-300 w-full rounded-t h-[40%]"></div>
                    <div class="bg-blue-500 w-full rounded-t h-[35%] -mt-1"></div>
                  </div>

                  <div class="flex flex-col justify-end items-center h-full w-1/6">
                    <div class="bg-blue-300 w-full rounded-t h-[30%]"></div>
                    <div class="bg-blue-500 w-full rounded-t h-[25%] -mt-1"></div>
                  </div>

                  <div class="flex flex-col justify-end items-center h-full w-1/6">
                    <div class="bg-blue-300 w-full rounded-t h-[50%]"></div>
                    <div class="bg-blue-500 w-full rounded-t h-[35%] -mt-1"></div>
                  </div>
                </div>


                <div class="mt-4 flex justify-between text-xs text-gray-500 px-1">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                  <span>Apr</span>
                  <span>May</span>
                </div>


                <div class="flex items-center justify-center mt-4 space-x-4 text-xs text-gray-500">
                  <div class="flex items-center space-x-1">
                    <span class="block w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span>Exiting Customers</span>
                  </div>
                  <div class="flex items-center space-x-1">
                    <span class="block w-3 h-3 bg-blue-300 rounded-full"></span>
                    <span>New Customers</span>
                  </div>
                </div>
              </div>
            </div>
        </div>


        <div className="bg-[var(--nila)] rounded-3xl p-6 w-[90%] sm:w-[350px] h-[250px] shadow-lg">
          

          <div class="bg-gray-100 flex items-center justify-center p-4">

              <div class="bg-white rounded-2xl shadow-lg p-6 max-w-sm w-full">

                <div class="flex items-center justify-between mb-4">
                  <h2 class="text-lg font-semibold text-gray-800">Customer Segmentation</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                </div>

                <div class="flex justify-center items-center relative my-6">
                  <svg class="w-32 h-32 transform -rotate-90">

                    <circle cx="64" cy="64" r="54" fill="none" stroke="#E5E7EB" stroke-width="14"/>

                    <circle cx="64" cy="64" r="54" fill="none" stroke="#FB5A4B" stroke-width="14" stroke-dasharray="120" stroke-dashoffset="0"/>

                    <circle cx="64" cy="64" r="54" fill="none" stroke="#FACC15" stroke-width="14" stroke-dasharray="35" stroke-dashoffset="-120"/>

                    <circle cx="64" cy="64" r="54" fill="none" stroke="#22C55E" stroke-width="14" stroke-dasharray="45" stroke-dashoffset="-155"/>
                  </svg>
                  <div class="absolute text-center">
                    <p class="text-sm text-gray-400">Total</p>
                    <p class="text-2xl font-semibold text-gray-900">2.758</p>
                  </div>
                </div>

                <div class="space-y-3 mb-4">

                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                      <span class="block w-2.5 h-2.5 rounded-full bg-[#FB5A4B]"></span>
                      <span class="text-gray-600">Small Business</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <span class="font-semibold text-gray-800">1.650</span>
                      <span class="text-green-500 text-sm flex items-center">
                        <svg class="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 10l5-5 5 5H5z"/></svg>
                        424
                      </span>
                    </div>
                  </div>


                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                      <span class="block w-2.5 h-2.5 rounded-full bg-[#FACC15]"></span>
                      <span class="text-gray-600">Enterprise</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <span class="font-semibold text-gray-800">350</span>
                      <span class="text-green-500 text-sm flex items-center">
                        <svg class="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 10l5-5 5 5H5z"/></svg>
                        24
                      </span>
                    </div>
                  </div>


                  <div class="flex justify-between items-center">
                    <div class="flex items-center space-x-2">
                      <span class="block w-2.5 h-2.5 rounded-full bg-[#22C55E]"></span>
                      <span class="text-gray-600">Individuals</span>
                    </div>
                    <div class="flex items-center space-x-2">
                      <span class="font-semibold text-gray-800">458</span>
                      <span class="text-red-500 text-sm flex items-center">
                        <svg class="w-3 h-3 mr-0.5" fill="currentColor" viewBox="0 0 20 20"><path d="M5 10l5 5 5-5H5z"/></svg>
                        213
                      </span>
                    </div>
                  </div>
                </div>
                </div>

           </div>


        </div>
      </div>
    </>
  )
}

export default Home