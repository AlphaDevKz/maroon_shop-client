import { NavLink } from 'react-router-dom'
import cs from './Nav.module.scss'

const menuList = [
   { path: '/catalog', title: 'Каталог' },
   { path: '/about', title: 'О нас' },
   { path: '/contact', title: 'Контакты' },
]

export const Nav = () => {
   return (
      <nav className={cs.root}>
         <ul className={cs.list}>
            {menuList.map((item) => (
               <li key={item.title}>
                  <NavLink to={item.path ?? '/'}>{item.title}</NavLink>
               </li>
            ))}
         </ul>
      </nav>
   )
}
