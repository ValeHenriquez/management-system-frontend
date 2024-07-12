import axios from 'axios'

//TODO: handle timeout and retries

const baseURL = process.env.NEXT_PUBLIC_BACK_URL || 'http://localhost:10000'

export const login = async (email: string, password: string) => {
  const response = await axios.post(`${baseURL}/auth/login`, {
    email,
    password,
  })

  return response.data
}

export const signup = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  rut: string,
) => {
  const response = await axios.post(`${baseURL}/auth/signup`, {
    firstName,
    lastName,
    email,
    password,
    rut,
  })
  return response.data
}

export const changePassword = async (email: string) => {
  const response = await axios.post(`${baseURL}/auth/change-password`, {
    email,
  })
  return response.data
}

export const forgotPassword = async (email: string) => {
  const response = await axios.post(`${baseURL}/auth/forgot-password`, {
    email,
  })
  return response.data
}

export const validateResetCode = async (email: string, code: string) => {
  const response = await axios.post(`${baseURL}/auth/validate-reset-code`, {
    email,
    code,
  })
  return response.data
}
