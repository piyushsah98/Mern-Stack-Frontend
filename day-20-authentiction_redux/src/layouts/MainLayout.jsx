import React from 'react'
import { Outlet } from 'react-router'

const MainLayout = () => {
  return (
    <div  className="bg-[#111] text-white min-h-screen">
      <h1>Navbar</h1>
      <Outlet />
    </div>
  )
}

export default MainLayout
