import { NextResponse } from 'next/server'
import { checkToken } from './utils/tokenHandler'

export function middleware(req: Request) {
  const isLoggedIn: boolean = checkToken()

  if (isLoggedIn) {
    return NextResponse.next()
  }

  return NextResponse.redirect(new URL('/login', req.url))
}

export const config = {
  matcher: ['/'],
}
