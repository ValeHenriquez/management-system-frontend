'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { signup } from '../api/auth'
import Error from './basics/Error'
import Loading from './basics/Loading'

type RegisterFormProps = {
  firstName: string
  lastName: string
  email: string
  password: string
  rut: string
}

const SignUpForm: React.FC = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormProps>()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const onSubmit = async (data: RegisterFormProps) => {
    setError('')
    setLoading(true)
    try {
      await signup(
        data.firstName,
        data.lastName,
        data.email,
        data.password,
        data.rut,
      )
      router.push('/login')
    } catch (error) {
      setError('Error al registrar')
      console.error(error)
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="relative h-full w-full">
        <button
          onClick={() => router.push('/login')}
          className="text-md absolute -top-4 right-0 text-grey-base/50"
        >
          &times;
        </button>
      </div>

      <h1 className="mb-8 flex text-2xl font-semibold text-grey-base">
        Registro de cuenta
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full">
        <div className="flex flex-col pb-4">
          <label htmlFor="firstName" className="text-sm  text-grey-base/50">
            Nombre
          </label>
          <input
            {...register('firstName', { required: true, minLength: 2 })}
            type="text"
            name="name"
            id="name"
            className="rounded-lg border border-black p-2"
          />
          {errors.firstName && (
            <span className="text-sm text-red-500">
              Este campo es requerido
            </span>
          )}
        </div>

        <div className="flex flex-col pb-4">
          <label htmlFor="lastName" className="text-sm  text-grey-base/50">
            Apellido
          </label>
          <input
            {...register('lastName', { required: true })}
            type="text"
            name="lastName"
            id="lastName"
            className="rounded-lg border border-black p-2"
          />
          {errors.lastName && (
            <span className="text-sm text-red-500">
              Este campo es requerido
            </span>
          )}
          <div />
        </div>

        <div className="flex flex-col pb-4">
          <label htmlFor="rut" className="text-sm  text-grey-base/50">
            Rut
          </label>
          <input
            {...register('rut', { required: true })}
            type="text"
            name="rut"
            id="rut"
            className="rounded-lg border border-black p-2"
          />
          {errors.rut && (
            <span className="text-sm text-red-500">
              Este campo es requerido
            </span>
          )}
        </div>

        <div className="flex flex-col pb-4">
          <label htmlFor="email" className="text-sm  text-grey-base/50">
            Correo
          </label>
          <input
            {...register('email', {
              required: true,
              pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i,
            })}
            type="email"
            name="email"
            id="email"
            className="rounded-lg border border-black bg-white p-2"
          />

          {errors.email && (
            <span className="text-sm text-red-500">
              Este campo es requerido
            </span>
          )}
        </div>
        <div className="flex flex-col pb-4">
          <label htmlFor="password" className="text-sm  text-grey-base/50">
            Contraseña
          </label>
          <input
            {...register('password', { required: true })}
            type="password"
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

        {error && <Error message={error} />}

        <button
          type="submit"
          className="mt-4 w-full bg-orange-base p-2 text-sm font-semibold text-white"
        >
          Registrar
        </button>
      </form>
      {loading && <Loading />}
    </div>
  )
}

export default SignUpForm
