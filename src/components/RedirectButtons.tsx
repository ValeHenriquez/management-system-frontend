// components/RedirectButtons.tsx
'use client'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Loading from './basics/Loading'
import Link from 'next/link'

const grupo1URL = process.env.GRUPO1_FRONT_URL || 'http://localhost:3000/'
const grupo2URL = process.env.GRUPO2_FRONT_URL || 'http://localhost:3000/'
const grupo3URL = process.env.GRUPO3_FRONT_URL || 'http://localhost:3000/'
const grupo4URL = process.env.GRUPO4_FRONT_URL || 'http://localhost:3000/'
const grupo5URL = process.env.GRUPO5_FRONT_URL || 'http://localhost:3000/'

interface RedirectButtonsProps {
  token?: string
}

const RedirectButtons: React.FC<RedirectButtonsProps> = ({ token }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  console.log('token', token)

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
      <div className="flex flex-col pb-4 w-full">
        <button
          className="mt-4 w-full bg-orange-base p-2 mb-5 text-sm font-semibold text-white"
        >
          <Link href={grupo1URL}>Grupo 1</Link>
        </button>
        <button
          className="mt-4 w-full bg-orange-base p-2 mb-5 text-sm font-semibold text-white"
        >
          <Link href={grupo1URL}>Grupo 2</Link>
        </button>
        <button
          className="mt-4 w-full bg-orange-base p-2 mb-5 text-sm font-semibold text-white"
        >
          <Link href={`${grupo3URL}?token=${token}`}>Grupo 3</Link>
        </button>
        <button
          className="mt-4 w-full bg-orange-base p-2 mb-5 text-sm font-semibold text-white"
        >
          <Link href={grupo1URL}>Grupo 4</Link>
        </button>
        <button
          className="mt-4 w-full bg-orange-base p-2 mb-5 text-sm font-semibold text-white"
        >
          <Link href={grupo1URL}>Grupo 5</Link>
        </button>
        {loading && <Loading />}
      </div>
    </div>
  )
}

export default RedirectButtons
