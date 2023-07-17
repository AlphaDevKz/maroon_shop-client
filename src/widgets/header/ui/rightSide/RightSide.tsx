import React from 'react'
import { Nav } from '../nav/Nav'
import { UserLinks } from '../userLinks/UserLinks'
import cs from './RightSide.module.scss'

export const RightSide = () => {
   return (
      <div className={cs.root}>
         <Nav />
         <UserLinks />
      </div>
   )
}
