import React, { type ReactNode } from 'react'
import cs from './Wrapper.module.scss'
import cn from 'classnames'

type WrapperType = {
   children: ReactNode
   width?: 'sm' | 'md' | 'lg' | 'full'
}

export const Wrapper = ({ children, width = 'full' }: WrapperType) => {
   return (
      <div
         className={cn(cs.root, {
            // 1030
            [cs.small]: width === 'sm',
            // 1170
            [cs.medium]: width === 'md',
            // 1310
            [cs.large]: width === 'lg',
            // full
            [cs.full]: width == 'full',
         })}
      >
         {children}
      </div>
   )
}
