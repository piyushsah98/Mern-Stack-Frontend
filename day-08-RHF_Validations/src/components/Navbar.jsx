import React from 'react'

const Navbar = ({setToogle}) => {
  return (
    <div className='p-4 bg-gray-800 h-18 w-full flex justify-between px-3 items-center'>
      <h2 className='text-2xl font-semibold'>Logo</h2>
      <div className='flex gap-5 text-xl'>
        <a onClick={() => setToogle(prev => !prev)} href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>

      <button 
      onClick={() => setToogle(prev => !prev)}
      className='px-3 py-2 font-semibold rounded-md bg-sky-600 cursor-pointer'>Create user</button>
    </div>
  )
}

export default Navbar