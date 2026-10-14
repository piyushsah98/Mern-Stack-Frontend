import React from 'react'
import { Routes, Route } from 'react-router'
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Journey from '../pages/Journey'

const AppRoutes = () => {
  return (
    <div className='flex-1'>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path='journey' element={<Journey />} />
        </Route>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default AppRoutes