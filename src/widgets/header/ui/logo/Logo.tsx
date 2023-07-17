import { Link } from 'react-router-dom'
import logo from '../../../../assets/MAROON.svg'

export const Logo = () => {
   return (
      <Link to='/'>
         <img src={logo} alt='' />
      </Link>
   )
}
