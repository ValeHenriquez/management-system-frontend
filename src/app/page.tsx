import React from 'react'
import Image from 'next/image'
import ServerWrapper from '@/components/ServerWrapper'

//TODO: Add necessary buttons to redirect to other pages
const Home = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/img/ucn-bg.png"
        alt="ucn-background"
        fill
        priority
        sizes="100vw 100vh"
        className="h-full w-full object-cover"
      />
      <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center ">
        <div className="w-4/5 rounded-lg bg-white p-8 shadow-lg sm:w-3/5 md:w-3/5 lg:w-2/5">
          <ServerWrapper/>
        </div>
      </div>
    </div>
  )
}

export default Home
