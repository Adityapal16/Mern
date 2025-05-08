import React from 'react'

const Login = () => {
  return (
    <>
    <div className="flex items-center justify-center bg-[var(--Secondary)] ">
      <div className="bg-[var(--background)] rounded-lg shadow-2xl border-2 border-black/5 p-10 w-68 h-95 scale-110 translate-y-25">
        <h1 className="text-2xl font-bold text-center  text-black translate-y-3">WELCOME, LOGIN</h1>
        <p className="text-center text-gray-600 translate-y-5">Don’t Have Account? <br /> <a href="#" className="text-blue-500 translate--y-2">Create Account</a></p>
        <div className="mt-6 translate-y-4 ">
          <label className="block text-sm font-medium text-gray-700 translate-x-4 translate-y-5">REGISTERED EMAIL</label>
          <input type="email" placeholder="Enter Your Email" className="mt-1 translate-x-3 block w-60 p-2 border translate-y-5 bg-blue-200 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"/>
        </div>
        <div className="mt-4 translate-y-7">
          <label className="block text-sm font-medium text-gray-700 translate-y-8  translate-x-4 ">PASSWORD</label>
          <input type="password" placeholder="Enter Your Password" className="mt-1 block w-60 p-2 border bg-blue-200 border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 translate-y-8 translate-x-3"/>
        </div>
        <button className="mt-6 w-30  bg-[var(--primary)] font-bold text-xl text-[var(--secondary)] py-2 rounded-md hover:bg-[var(--orange)] hover:scale-110 translate-y-25 translate-x-18 transition-all hover:font-bold h-10">Login</button>
      </div>
    </div>



  
    </>
  )
}

export default Login
