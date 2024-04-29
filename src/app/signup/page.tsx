import React from 'react'
import SignUpForm from '../../components/SignUpForm'
import Image from 'next/image'

const SignUp = () => {
  return (
    <div className="relative h-screen">
      <Image
        src="/img/ucn-bg.png"
        alt="ucn-background"
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="h-full w-full"
      />
      <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center ">
        <div className="w-4/5 rounded-lg bg-white p-8 shadow-lg sm:w-3/5 md:w-3/5 lg:w-2/5">
          <SignUpForm />
        </div>
      </div>
    </div>
  )
}

export default SignUp
