import React, { DetailedHTMLProps, HtmlHTMLAttributes } from 'react'
import cs from './Ptag.module.scss'
import cn from 'classnames'

interface PtagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
   mode?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Ptag = ({ mode = 'md', children }: PtagProps) => {
   return (
      <p
         className={cn(cs.root, {
            [cs.small]: mode === 'sm',
            [cs.medium]: mode === 'md',
            [cs.large]: mode === 'lg',
            [cs.extra_large]: mode === 'xl',
         })}
      >
         {children}
      </p>
   )
}
