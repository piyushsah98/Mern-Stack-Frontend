import React from 'react'
import { NavLink, Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div className='bg-[#111] text-zinc-200 min-h-screen'>
      <nav className='px-3 py-2 flex gap-10'>
        <NavLink to={'/'}>Home</NavLink>
        <NavLink to={'/about'}>About</NavLink>
        <NavLink to={'/contact'}>Contact</NavLink>
      </nav>

      <Outlet />
    </div>
  )
}

export default MainLayout
