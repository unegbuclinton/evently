import React from 'react'
import { buttonTypes } from './types'

const Button: React.FC<buttonTypes> = ({
  children,
  disabled,
  onClick,
  type,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className='flex bg-black text-white w-full items-center justify-center text-sm p-4 rounded-2xl font-medium'
    >
      {children}
    </button>
  )
}

export default Button
