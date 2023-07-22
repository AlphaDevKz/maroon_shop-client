import React from 'react'
import { Button } from '../../../../shared/UI/button/Button'
import { Wrapper } from '../../../../shared/UI/wrapper/Wrapper'

import cs from './History.module.scss'

export const History = () => {
   return (
      <section className={cs.root}>
         <Wrapper>
            <div className={cs.history}>
               <div className={cs.content}>
                  <h3 className={cs.heading}>
                     “Мы стремимся сделать уход за кожей доступным и приятным ритуалом для всех, кто хочет заботиться о
                     себе и своем теле”
                  </h3>
                  <Button>Наша история</Button>
               </div>
            </div>
         </Wrapper>
      </section>
   )
}
