import { ReactNode } from 'react'

export interface buttonTypes {
  children: ReactNode
  disabled?: boolean
  onClick?: () => void
  type: 'submit' | 'button'
}
