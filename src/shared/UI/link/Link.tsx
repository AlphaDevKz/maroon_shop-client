import React from 'react'
import { NavLink } from 'react-router-dom'

type LinkProps = {
   to: string
}

export const Link = ({ to }: LinkProps) => {
   return <NavLink to={to} >Link</NavLink>
}
