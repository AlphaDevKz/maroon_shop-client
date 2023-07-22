import React from 'react'

import cs from './Gallery.module.scss'

interface GalleryProps {
   images: string[]
}

export const Gallery = ({ images }: GalleryProps) => {
   return (
      <div className={cs.root}>
         <div className={cs.gallery}>
            {images.map((image) => (
               <div
                  key={image}
                  style={{
                     backgroundImage: `url(${image})`,
                     backgroundSize: 'cover',
                     backgroundRepeat: 'no-repeat',
                     backgroundPosition: 'center',
                  }}
               />
            ))}
         </div>
      </div>
   )
}
