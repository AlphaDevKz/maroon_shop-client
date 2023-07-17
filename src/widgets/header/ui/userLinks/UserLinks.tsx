import React from 'react'
import { IconButton } from '../../../../shared/UI/iconbutton/IconButton'
import cs from './UserLinks..module.scss'
import accout from '../../../../assets/account.svg'
import cart from '../../../../assets/cart.svg'

export const UserLinks = () => {
   return (
      <div className={cs.buttons}>
         <IconButton icon={accout} />
         <IconButton icon={cart} />
      </div>
   )
}
