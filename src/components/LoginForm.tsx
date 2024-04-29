'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { HiEye, HiEyeOff } from 'react-icons/hi'

type LoginFormProps = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>()

  const [showPassword, setShowPassword] = useState(false)

  const onSubmit = (data: LoginFormProps) => {
    //TODO: handle login
    alert(JSON.stringify(data))
    router.push('/')
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="flex h-full flex-col items-center justify-start">
      <Image src="/img/ucn-logo.png" alt="UCN Logo" width={160} height={100} />

      <h1 className="text-grey-base mb-16 mt-14 flex text-3xl font-semibold">
        Acceder
      </h1>

      <div className="border-grey-base/10 mb-8 w-2/3 border-b-2"></div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3">
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-grey-base/50 text-sm">
            Ingrese su correo o rut
          </label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
            })}
            type="email"
            name="email"
            id="email"
            className="border-grey-base rounded-lg border bg-white p-2"
          />

          {errors.email && (
            <span className="text-sm text-red-500">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-grey-base/50 text-sm">
            Ingrese su contraseña
          </label>
          <input
            {...register('password', { required: true })}
            type={showPassword ? 'text' : 'password'}
            name="password"
            id="password"
            className="rounded-lg border border-black p-2"
          />
          {errors.password && (
            <span className="text-sm text-red-500">
              Este campo es requerido
            </span>
          )}
        </div>

        <div className="mt-2 flex justify-end pr-1">
          <button
            type="button"
            className="text-grey-base/60 focus:outline-none "
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <HiEyeOff /> : <HiEye />}
          </button>
        </div>

        <div className="mt-8 flex w-full flex-col items-center justify-center sm:mt-16">
          <a
            href="/forgot-password"
            className=" text-orange-base mt-2 underline"
          >
            ¿Olvidó su nombre de usuario o contraseña?
          </a>

          <button
            type="submit"
            className="bg-orange-base mb-8 mt-8 w-2/5 p-2 text-white sm:mb-0 "
          >
            Acceder
          </button>
        </div>
      </form>

      <p className="text-grey-base mb-4 mt-auto flex w-full items-center justify-center text-sm">
        No tienes una cuenta?
        <a href="/signup" className="text-grey-base mx-1 underline">
          Registro
        </a>
      </p>
    </div>
  )
}

export default LoginForm
