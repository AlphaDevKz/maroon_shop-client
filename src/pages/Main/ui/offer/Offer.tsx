import React from 'react'
import { Wrapper } from '../../../../shared/UI/wrapper/Wrapper'
import offerImg from '../../../../assets/offer_image.png'

import cs from './Offer.module.scss'
import { Ptag } from '../../../../shared/UI/ptag/Ptag'
import { Button } from '../../../../shared/UI/button/Button'

export const Offer = () => {
   return (
      <div className={cs.root}>
         <Wrapper>
            <div className={cs.offer}>
               <div className={cs.block}>
                  <div className={cs.content}>
                     <h3 className={cs.header}>Индивидуальный <br /> уход</h3>
                     <Ptag>
                        Не всегда очевидно, какие элементы и минералы необходимы коже, а многочисленные эксперименты с
                        разными средствами только ухудшают ее качество. Заполните анкету, и мы подберем уход, подходящий
                        именно вам, учитывая ваш образ жизни, место жительства и другие факторы.
                     </Ptag>
                     <Button >Заполнить анкету</Button>
                  </div>
               <img className={cs.image} src={offerImg} alt='' />
               </div>
            </div>
         </Wrapper>
      </div>
   )
}
