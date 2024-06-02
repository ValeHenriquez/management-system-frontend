'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from './basics/Loading'
import { retrieveToken } from '@/utils/tokenHandler'

const grupo1URL = process.env.GRUPO1_FRONT_URL
const grupo2URL = process.env.GRUPO2_FRONT_URL
const grupo3URL = process.env.GRUPO3_FRONT_URL
const grupo4URL = process.env.GRUPO4_FRONT_URL
const grupo5URL = process.env.GRUPO5_FRONT_URL

const RedirectButtons: React.FC = () => {
  const router = useRouter()
  const token = retrieveToken()
  const [loading, setLoading] = useState(false)

  const handleRedirect = (url: string) => {
    setLoading(true)
    const urlWithToken = `${url}?token=${token}`
    router.push(urlWithToken)
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
        Redireccionamiento a página de grupos
      </h1>
      <div className="flex flex-col pb-4">
        <button
          onClick={() => handleRedirect(`/${grupo1URL}`)}
          className="mt-4 w-full bg-orange-base p-2 text-sm font-semibold text-white"
        >
          Grupo 1
        </button>
        <button
          onClick={() => handleRedirect(`/${grupo2URL}`)}
          className="mt-4 w-full bg-orange-base p-2 text-sm font-semibold text-white"
        >
          Grupo 2
        </button>
        <button
          onClick={() => handleRedirect(`/${grupo3URL}`)}
          className="mt-4 w-full bg-orange-base p-2 text-sm font-semibold text-white"
        >
          Grupo 3
        </button>
        <button
          onClick={() => handleRedirect(`${grupo4URL}`)}
          className="mt-4 w-full bg-orange-base p-2 text-sm font-semibold text-white"
        >
          Grupo 4
        </button>
        <button
          onClick={() => handleRedirect(`${grupo5URL}`)}
          className="mt-4 w-full bg-orange-base p-2 text-sm font-semibold text-white"
        >
          Grupo 5
        </button>
        {loading && <Loading />}
      </div>
    </div>
  )
}

export default RedirectButtons
