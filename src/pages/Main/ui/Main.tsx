import React from 'react'
import { Welcome } from './welcome/Welcome'
import { Bestseller } from './bestselller'
import { Banner } from './banner/Banner'
import { Offer } from './offer/Offer'

export const Main = () => {
   return (
      <section>
         <Welcome />
         <Bestseller />
         <Banner mode='more' />
         <Offer />
      </section>
   )
}
