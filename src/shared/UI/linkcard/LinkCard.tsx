import React, { ButtonHTMLAttributes, DetailedHTMLProps, type ReactNode } from 'react'
import cs from './LinkCard.module.scss'
import arrow from '../../../assets/right-arrow.svg'

interface LinkCardProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   img: string
   text: string
}

export const LinkCard = ({ img, text }: LinkCardProps) => {
   return (
      <button className={cs.link_card}>
         <img src={img} alt='' />
         <div className={cs.link_card_bottom}>
            <p>{text}</p>
            <img src={arrow} alt='' />
         </div>
      </button>
   )
}
