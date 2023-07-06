import { createBrowserRouter } from 'react-router-dom'
import { BaseLayout } from './layouts/BaseLayout'
import { About, Contact, Main, Product, Catalog } from '../pages'

export const appRouter = createBrowserRouter([
   {
      element: <BaseLayout />,
      errorElement: <div>error</div>,
      children: [
         {
            path: '/',
            element: <Main />,
         },
         {
            path: '/catalog',
            element: <Catalog />,
            children: [
               {
                  path: '/catalog/:id',
                  element: <Product />,
               },
            ],
         },
         {
            path: '/contact',
            element: <Contact />,
         },
         {
            path: '/about',
            element: <About />,
         },
      ],
   },
])
