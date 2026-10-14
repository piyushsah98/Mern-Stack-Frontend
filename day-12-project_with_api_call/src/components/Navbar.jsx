import React, { useContext } from 'react'
import { MyShop } from '../context/MyContext'

const Navbar = () => {
  const { setIsCartOpen } = useContext(MyShop);
  return (
    <div className='px-5 py-3 w-full bg-gray-600 flex justify-between'>
      <h1 className='text-3xl'>Vixin</h1>
      <div className='flex gap-7 font-semibold'>
        <p
          onClick={() => setIsCartOpen(false)}
          className='text-xl cursor-pointer'>Home</p>
        <p
          onClick={() => setIsCartOpen(true)}
          className='text-xl cursor-pointer'>Cart</p>
        <p className='text-xl cursor-pointer'>Contact</p>
      </div>

      <div className='flex gap-5 font-semibold'>
        <button
          className='px-3 py-2 rounded bg-blue-500 cursor-pointer'>Create</button>
        <button
          className='px-3 py-2 rounded bg-blue-500 cursor-pointer'>Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar