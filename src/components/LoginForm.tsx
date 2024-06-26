'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { HiEye, HiEyeOff } from 'react-icons/hi'
import { saveToken } from '../utils/tokenHandler'
import { login } from '../api/auth'
import Error from './basics/Error'
import Loading from './basics/Loading'

type LoginFormProps = {
  email: string
  password: string
}

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormProps>()

  const router = useRouter()

  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (data: LoginFormProps) => {
    setError('')
    setLoading(true)
    try {
      const response = await login(data.email, data.password)
      await saveToken(response.token)
      router.push('/')
    } catch (error) {
      setError('Credenciales incorrectas')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  return (
    <div className="flex h-full flex-col items-center justify-start">
      <Image
        className="h-auto w-auto"
        src="/img/ucn-logo.png"
        alt="UCN Logo"
        width={160}
        height={100}
      />

      <h1 className="mb-8 mt-14 flex text-3xl font-semibold text-grey-base">
        Acceder
      </h1>

      <div className="mb-8 w-2/3 border-b-2 border-grey-base/10"></div>

      <form onSubmit={handleSubmit(onSubmit)} className="w-2/3">
        <div className="mb-4 flex flex-col">
          <label htmlFor="email" className="text-sm text-grey-base/50">
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
            className="rounded-lg border border-grey-base bg-white p-2"
          />

          {errors.email && (
            <span className="text-sm text-red-500">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-sm text-grey-base/50">
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
        {error && <Error message={error} />}

        <div className="mt-8 flex w-full flex-col items-center justify-center sm:mt-16">
          <a
            href="/forgot-password"
            className=" mt-2 text-orange-base underline"
          >
            ¿Olvidó su nombre de usuario o contraseña?
          </a>

          <button
            type="submit"
            disabled={loading}
            className="mb-8 mt-8 w-2/5 bg-orange-base p-2 text-white sm:mb-0 "
          >
            Acceder
          </button>
        </div>
      </form>

      <p className="mb-4 mt-auto flex w-full items-center justify-center text-sm text-grey-base">
        No tienes una cuenta?
        <a href="/signup" className="mx-1 text-grey-base underline">
          Registro
        </a>
      </p>

      {loading && <Loading />}
    </div>
  )
}

export default LoginForm
