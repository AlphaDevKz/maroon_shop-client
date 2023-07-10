import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactElement, type ReactNode } from 'react'
import cs from './LinkCard.module.scss'
import rightArrow from '../../../assets/right-arrow.svg'
import cn from 'classnames'

type LinkItems = {
   id?: number
   title: string
   description?: string
   img?: string
}

interface LinkCardProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
   items: LinkItems
   mode: 'product' | 'default'
}

export const LinkCard = ({ items, mode, ...props }: LinkCardProps) => {
   const { img } = items

   return (
      <button
         className={cn(cs.root, {
            [cs.product]: mode === 'product',
            [cs.default]: mode === 'default',
         })}
         {...props}
      >
         <div
            style={{
               backgroundImage: `url(${img})`,
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center',
               width: '100%',
               height: '100%',
            }}
         >
            {mode === 'default' ? <InnerSlot {...items} /> : ''}
         </div>
         {mode === 'product' ? <BottomSlot {...items} /> : ''}
      </button>
   )
}

const InnerSlot = ({ title, description }: LinkItems) => {
   return (
      <div>
         <h3>{title}</h3>
         <p>{description}</p>
         <span>Подробнее</span>
      </div>
   )
}

const BottomSlot = ({ title }: LinkItems) => {
   return (
      <div>
         <h3>{title}</h3>
         <img src={rightArrow} alt='' />
      </div>
   )
}
