'use server'
import { cookies } from 'next/headers'

const tokenHandler = {
  saveToken: (token: string) => {
    cookies().set('token', token, {
      expires: new Date(Date.now() + 3 * 60 * 60 * 1000), //cookie expires in 3 hours
      path: '/',
      secure: true,
      httpOnly: true,
    })
  },

  checkToken: () => {
    const hasToken = cookies().has('token')
    return hasToken
  },

  retrieveToken: () => {
    const token = cookies().get('token')
    return token?.value
  },

  //TODO: Implement removeToken in a logout() function 
  removeToken: () => {
    cookies().delete('token')
  },
}

export const { saveToken, retrieveToken, removeToken, checkToken } =
  tokenHandler
