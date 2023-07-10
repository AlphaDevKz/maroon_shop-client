import React from 'react'
import cs from './Bestseller.module.scss'
import { Wrapper } from '../../../shared/UI/wrapper/Wrapper'
import { Ptag } from '../../../shared/UI/ptag/Ptag'
import { Slider } from '../../../shared/UI/slider/Slider'

export const Bestseller = () => {
   return (
      <section className={cs.root}>
         <Wrapper width='lg'>
            <div className={cs.bestseller}>
               <div>
                  <h2>Бестселлеры</h2>
                  <Ptag>Легендарные продукты, завоевавшие любовь наших клиентов</Ptag>
               </div>
               <Slider />
            </div>
         </Wrapper>
      </section>
   )
}
