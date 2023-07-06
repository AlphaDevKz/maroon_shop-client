import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import cs from './IconButton.module.scss'

interface IconButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   icon: string
}

export const IconButton = ({ icon, ...props }: IconButton) => {
   return (
      <button className={cs.root} {...props}>
         <img src={icon} alt='' />
      </button>
   )
}
