import React from 'react'
import { Wrapper } from '../../../shared/UI/wrapper/Wrapper'
import cs from './Header.module.scss'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../../assets/MAROON.svg'
import accout from '../../../assets/account.svg'
import cart from '../../../assets/cart.svg'
import { IconButton } from '../../../shared/UI/iconbutton/IconButton'

const menuList = [
   { path: '/catalog', title: 'Каталог' },
   { path: '/about', title: 'О нас' },
   { path: '/contact', title: 'Контакты' },
   {},
]

export const Header = () => {
   return (
      <header className={cs.root}>
         <Wrapper width='lg'>
            <div className={cs.header}>
               <Link to='/'>
                  <img src={logo} alt='' />
               </Link>
               <div className={cs.right}>
                  <nav>
                     <ul>
                        {menuList.map((item) => (
                           <li key={item.title}>
                              <NavLink to={item.path ?? '/'}>{item.title}</NavLink>
                           </li>
                        ))}
                     </ul>
                  </nav>
                  <div className={cs.buttons}>
                     <IconButton icon={accout} />
                     <IconButton icon={cart} />
                  </div>
               </div>
            </div>
         </Wrapper>
      </header>
   )
}
