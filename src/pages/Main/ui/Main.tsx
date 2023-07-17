import React from 'react'
import { Welcome } from './welcome/Welcome'
import { Bestseller } from './bestselller'
import { Banner } from './banner/Banner'

export const Main = () => {
   return (
      <section>
         <Welcome />
         <Bestseller />
         <Banner mode='more' />
      </section>
   )
}
