import React from 'react'
import cs from './Slider.module.scss'
import { LinkCard } from '../linkcard/LinkCard'
import cream from '../../../assets/cream.png'
import cream_2 from '../../../assets/cream2_.png'
import cream_3 from '../../../assets/cream3_.png'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper/modules'

export const Slider = () => {
   const demoSlideList = [
      { id: 1, title: 'Hight', description: 'крем для лица', img: cream },
      { id: 2, title: 'Hight', description: 'крем для лица', img: cream_2 },
      { id: 3, title: 'Hight', description: 'крем для лица', img: cream_3 },
      { id: 4, title: 'Hight', description: 'крем для лица', img: cream },
      { id: 5, title: 'Hight', description: 'крем для лица', img: cream_2 },
      { id: 6, title: 'Hight', description: 'крем для лица', img: cream_3 },
      { id: 7, title: 'Hight', description: 'крем для лица', img: cream },
      { id: 8, title: 'Hight', description: 'крем для лица', img: cream_2 },
      { id: 9, title: 'Hight', description: 'крем для лица', img: cream_3 },
   ]

   return (
      <div className={cs.root}>
         <Swiper
            spaceBetween={30}
            loop={true}
            slidesPerView={4}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
         >
            {demoSlideList.map((item) => (
               <SwiperSlide className={cs.swiperSlide}>
                  <LinkCard mode='product' key={item.id} items={item} />
               </SwiperSlide>
            ))}
         </Swiper>
      </div>
   )
}
