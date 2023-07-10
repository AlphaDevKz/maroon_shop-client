import React from 'react'
import cs from './Bestseller.module.scss'
import { Wrapper } from '../../../shared/UI/wrapper/Wrapper'
import { Ptag } from '../../../shared/UI/ptag/Ptag'
import { Slider } from '../../../shared/UI/slider/Slider'
import { Button } from '../../../shared/UI/button/Button'

export const Bestseller = () => {
   return (
      <section className={cs.root}>
         <Wrapper width='lg'>
            <div className={cs.bestseller}>
               <div className={cs.bestseller_text}>
                  <h2>Бестселлеры</h2>
                  <Ptag style={{ marginTop: '20px' }}>Легендарные продукты, завоевавшие любовь наших клиентов</Ptag>
                  <Button style={{ marginTop: '50px' }}>Смотреть все</Button>
               </div>
               <Slider />
            </div>
         </Wrapper>
      </section>
   )
}
