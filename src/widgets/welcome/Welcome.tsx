import React from 'react'
import cs from './Welcome.module.scss'
import { Wrapper } from '../../shared/UI/wrapper/Wrapper'

import catalog_img_1 from '../../assets/catalog-link-1.png'
import catalog_img_2 from '../../assets/catalog-link-2.png'

import { Button } from '../../shared/UI/button/Button'
import { Ptag } from '../../shared/UI/ptag/Ptag'
import { LinkCard } from '../../shared/UI/linkcard/LinkCard'

export const Welcome = () => {
   return (
      <section className={cs.root}>
         <Wrapper width='sm'>
            <div className={cs.welcome}>
               <LinkCard mode='default' items={{ img: catalog_img_1, title: 'Уход для лица' }} />
               <div className={cs.center}>
                  <h1>MAROON</h1>
                  <Ptag mode='xl' style={{ marginTop: '15px' }}>
                     Натуральная косметика <br /> для бережного ухода за кожей
                  </Ptag>
                  <Button style={{ marginTop: '40px' }}>
                     <Ptag mode='lg'>Подробнее</Ptag>
                  </Button>
               </div>
               <LinkCard mode='default' items={{ img: catalog_img_2, title: 'Уход для теля' }} />
            </div>
         </Wrapper>
      </section>
   )
}
