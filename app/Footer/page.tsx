"use client"
import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (

    <div className='bg-gradient-to-b from-purple-950 to-black text-purple-200 h-16 w-full flex items-center justify-around content-center'>
        <Image
      src="/logo.png"
      alt="User Avatar"
      width={100}
      height={100}
      className="rounded-full justify-start items-start"
    />

         <h4 >© All right reserved | Powered by Maryam Shahid</h4>

    </div>

  )
}

export default Footer