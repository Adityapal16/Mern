import React from 'react'

const Register = () => {
  return (
    <>

<div>
         <div className="bg-white flex items-center justify-center min-h-screen p-4">
      <div className="bg-[var(--whity)] rounded-lg border scale-110 shadow-[8px_8px_15px_rgba(0,0,0,0.15)] p-8 max-w-xs w-[18rem] h-95 ">
        <h1 className="text-black font-extrabold text-xl text-center mb-1 font-">
          NEW USER, REGISTER
        </h1>
        <p className="text-gray-600 text-center text-xs mb-6">
          Already A User?{' '}
          <a className="text-blue-500 hover:underline">
            Login
          </a>
        </p>

        <form action="#" method="POST" className="space-y-5">
          <div className='translate-x-5 translate-y-3'>
            <label htmlFor="email" className="block text-black font-extrabold text-xs mb-1">
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter Your Email"
              required
              className="bg-blue-400 text-white text-xs rounded-md px-3 py-1 w-60 h-6 placeholder:text-white placeholder:text-xs focus:outline-none"
            />
          </div>

          <div className='translate-x-5 translate-y-7'>
            <label htmlFor="username" className="block text-black font-extrabold text-xs mb-1">
              USERNAME
            </label>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Enter A Unique Username"
              required
              className="bg-blue-400 text-white text-xs rounded-md px-3 py-1  placeholder:text-white placeholder:text-xs focus:outline-none w-60 h-6"
            />
          </div>

          <div className='translate-x-5 translate-y-12'>
            <label htmlFor="password" className="block text-black font-extrabold text-xs mb-1">
              PASSWORD
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Set A Strong Password (min 8)"
              minLength={8}
              required
              className="bg-blue-400 text-white text-xs rounded-md px-3 py-1 w-60 h-6 placeholder:text-white placeholder:text-xs focus:outline-none"
            />
          </div>

          <div className='translate-x-5 translate-y-18'>
            <label htmlFor="confirm-password" className="block text-black font-extrabold text-xs mb-1">
              CONFIRM PASSWORD
            </label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              placeholder="Re-Enter The Password"
              minLength={8}
              required
              className="bg-blue-400 text-white text-xs rounded-md px-3 py-1 w-60 h-6 placeholder:text-white placeholder:text-xs focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg- text-white font-extrabold text-lg rounded-[10px] px-8 py-2 w-45 h-9  transition"
          >
           
          </button>
        </form>
      </div>
    </div>
      
    </div>
      
    </>
  )
}

export default Register
