import React, { type ReactNode } from 'react'
import { Outlet } from 'react-router-dom'

type LayoutProps = {
   headerSlot?: ReactNode
   bottomSlot?: ReactNode
}

export const Layout = ({ headerSlot, bottomSlot }: LayoutProps) => {
   return (
      <div>
         {headerSlot ?? <></>}
         <div>
            <Outlet />
         </div>
         <footer>{bottomSlot ?? <></>}</footer>
      </div>
   )
}
