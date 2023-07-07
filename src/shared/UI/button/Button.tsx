import React, { type ReactNode, ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import cs from './Button.module.scss'

interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   children: ReactNode
}

export const Button = ({ children, ...props }: ButtonProps) => {
   return (
      <button className={cs.root} {...props}>
         {children}
      </button>
   )
}
