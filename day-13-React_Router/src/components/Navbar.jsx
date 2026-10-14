import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
    return (
        <div className='p-4 bg-gray-700 flex justify-between'>
            <h3 className='text-2xl font-semibold'>Sheriyans</h3>
            <div className='flex gap-10 text-[18px] font-semibold'>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
            </div>
            <button className='px-3 py-1 bg-purple-700 rounded'>Signup</button>
        </div>
    )
}

export default Navbar