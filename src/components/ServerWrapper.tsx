import React from 'react'
import RedirectButtons from './RedirectButtons'
import { retrieveToken } from '@/utils/tokenHandler'

const ServerWrapper: React.FC = async () => {
  const token = retrieveToken()  // Aquí estás obteniendo el token del servidor
  return <RedirectButtons token={token} />
}

export default ServerWrapper
