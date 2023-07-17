import { Wrapper } from '../../../shared/UI/wrapper/Wrapper'
import cs from './Header.module.scss'

import { RightSide } from './rightSide/RightSide'
import { Logo } from './logo/Logo'

export const Header = () => {
   return (
      <header className={cs.root}>
         <Wrapper width='md'>
            <div className={cs.header}>
               <Logo />
               <RightSide />
            </div>
         </Wrapper>
      </header>
   )
}
