'use client'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav >
        <div className="bg-gradient-to-b from-purple-950 to-black text-purple-200 flex justify-around h-20">
        <div>
          <Image 
            src="/logo.png"
            alt="logo"
            width={120}
            height={120}
            className="transition ease-in-out delay-150 bg-top hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-500 cursor-pointer"
          />
        </div>  
         {/*menu  */}
         <div>
            <ul className='flex space-x-10 text-purple-200 font-extrabold pt-6'>
                <li>
                    <a href="/" className="text-purple-200 hover:text-purple-500 font-extrabold transition-all duration-300 border-b-2 border-transparent hover:border-white ">Home</a>
                </li>
                <li>
                <a href="/About" className="text-purple-200 hover:text-purple-500 font-extrabold transition-all duration-300 border-b-2 border-transparent hover:border-white">About</a>
                </li>
                <li>
                <a href="/Projects" className="text-purple-200 hover:text-purple-500 font-extrabold transition-all duration-300 border-b-2 border-transparent hover:border-white">Projects</a>
                </li>
                <li>
                <a href="/Skills" className="text-purple-200 hover:text-purple-500 font-extrabold transition-all duration-300 border-b-2 border-transparent hover:border-white">Skills</a>
                 </li>
                <li>
                <a href="/Contact" className="text-purple-200 hover:text-purple-500 font-extrabold transition-all duration-300 border-b-2 border-transparent hover:border-white">Contact</a>
                </li>
            </ul>
         </div>
    </div>
    </nav>
  )
}

export default Navbar
