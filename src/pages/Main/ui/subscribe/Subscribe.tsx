import React from 'react'
import { Wrapper } from '../../../../shared/UI/wrapper/Wrapper'
import { Gallery } from '../../../../shared/UI/gallery/Gallery'
import { Ptag } from '../../../../shared/UI/ptag/Ptag'
import { Button } from '../../../../shared/UI/button/Button'
import { subscribeGallery } from '../../../../shared/constants/subscribe'

import cs from './Subscribe.module.scss'

export const Subscribe = () => {
   return (
      <div className={cs.root}>
         <Wrapper width='sm'>
            <div className={cs.subscribe}>
               <Gallery images={subscribeGallery} />
               <div className={cs.content}>
                  <h3>Присоединяйтесь к нам</h3>
                  <Ptag>Подпишитесь на наш аккаунт @marooncare и узнавайте о новиках и акциях первыми</Ptag>
                  <Button>Подписаться</Button>
               </div>
            </div>
         </Wrapper>
      </div>
   )
}
