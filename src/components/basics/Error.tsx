import React, { useState, useEffect } from 'react'

type Props = {
  message: string
}

const Error: React.FC<Props> = ({ message }) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div
      className="relative rounded border border-red-400 bg-red-100 px-4 py-3 text-red-700"
      role="alert"
    >
      <strong className="font-bold">Error!</strong>
      <span className="block px-2 sm:inline">{message}</span>
    </div>
  )
}

export default Error
