import React from 'react'
import cs from './Slider.module.scss'
import { LinkCard } from '../linkcard/LinkCard'
import cream from '../../../assets/cream.png'

export const Slider = () => {
   const demoSlideList = [
      { id: 1, title: 'Hight', description: 'крем для лица', img: cream },
      { id: 2, title: 'Hight', description: 'крем для лица', img: cream },
      { id: 3, title: 'Hight', description: 'крем для лица', img: cream },
      { id: 4, title: 'Hight', description: 'крем для лица', img: cream },
      { id: 5, title: 'Hight', description: 'крем для лица', img: cream },
   ]

   return (
      <section className={cs.root}>
         <div className={cs.sliderWrapper}>
            {demoSlideList.map((item) => (
               <LinkCard mode='product' key={item.id} items={item} innerSlot />
            ))}
         </div>
         <div></div>
      </section>
   )
}
