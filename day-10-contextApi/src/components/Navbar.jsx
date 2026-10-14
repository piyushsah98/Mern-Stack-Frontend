import React from 'react'
import { useContext } from 'react'
import { MyShop } from '../contexts/MyCartContext'

const Navbar = () => {
  let { setIsCartOpen } = useContext(MyShop)
  return (
    <div className='w-full bg-gray-600 py-4 px-7 flex justify-between'>
      <h3 className='text-xl font-semibold'>Brand</h3>
      <div className='flex gap-10'>
        <a onClick={() => setIsCartOpen(false)} className='text-xl font-semibold' href="#">Home</a>
        <a onClick={() => setIsCartOpen(true)} className='text-xl font-semibold' href="#">Cart</a>
      </div>
      <p className='text-xl font-semibold'>Login</p>
    </div>
  )
}

export default Navbar