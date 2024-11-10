import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const HeroSection = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed flex justify-evenly text-purple-200 px-4 sm:px-6 lg:px-8 "
    style={{ backgroundImage: "url('/bg3.jpg')" }}>

      <div className='p-10 m-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <Image 
            src="/profile.jpg"
            alt="logo"
            width={1000}
            height={1000}
            className="transition ease-in-out delay-150 bg-top hover:-translate-y-1 hover:scale-110 hover:bg-transparent duration-500 border-4 border-purple-300 rounded-full p-1 "
          />
        
      </div>
      <div className='p-6 m-10'>
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-center animate-pulse">
                Welcome to a showcase of my skills and passion
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-center max-w-2xl animate-pulse">
                Explore my projects and skills in Web Development, Graphic designing, and more. <br /> <br />
                <Link href="/Skills">
        <Button className='bg-purple-500 hover:bg-black text-white font-bold rounded-full text-lg transition duration-700 transform hover:scale-105 animate-bounce'>Explore Me</Button>
        </Link>
        </p>

      </div>
    </div>
  
  )
}


export default HeroSection
