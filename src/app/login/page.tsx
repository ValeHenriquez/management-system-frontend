'use client'
import React from 'react'
import LoginForm from '../../components/LoginForm'
import Image from 'next/image'

const Login = () => {
  //TODO: Do not show login page if user is already logged in

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="relative h-screen w-full sm:w-1/2">
        <Image
          src="/img/ucn-bg.png"
          alt="ucn-background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="h-full w-full"
        />
        <div className="z-50 flex h-screen flex-col items-center justify-center">
          <span className="flex w-3/5 pb-6 text-center text-3xl font-bold text-white drop-shadow-xl  sm:text-3xl md:text-4xl">
            Sistema Gestión de Proyectos
          </span>
          <p className="z-50 flex w-3/5 text-justify text-xl text-white drop-shadow-2xl">
            Nuestro Sistema de Gestión de Proyectos es tu socio en la
            excelencia. Únete a nosotros y lleva tus proyectos al siguiente
            nivel. ¡Estamos aquí para hacer que la gestión de proyectos sea más
            fácil, más eficiente y más exitosa que nunca!
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login
