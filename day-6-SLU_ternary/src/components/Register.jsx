import React, { useState } from 'react'

const Register = ({ setToogle, setUsers }) => {
    // console.log("app rendering...")

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault()

        setUsers(prev => [...prev, formData]);
        setFormData({
            name: '',
            email: '',
            password: '',
        })
    }

    const handleInput = (e) => {
        let { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <div className='p-4 bg-gray-700 rounded-md w-75'>
            <form onSubmit={handleSubmit} className='flex flex-col h-[90%] w-full gap-4' action="">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="name">Name</label>
                    <input
                        value={formData.name}
                        name='name'
                        onChange={handleInput}
                        className='px-3 py-2 rounded-md border border-gray-300 w-full'
                        type="text" placeholder='enter your name' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input
                        value={formData.email}
                        name='email'
                        onChange={handleInput}
                        className='px-3 py-2 rounded-md border border-gray-300 w-full'
                        type="email" placeholder='enter your email' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="password">Password</label>
                    <input
                        value={formData.password}
                        name='password'
                        onChange={handleInput}
                        className='px-3 py-2 rounded-md border border-gray-300 w-full' type="password" placeholder='enter your password' />
                </div>
                <button className='w-full px-3 py-2 rounded-md bg-blue-500 mb-3'>Register</button>
            </form>

            <p className='text-center cursor-pointer'>Already have an Account <span onClick={() => setToogle(prev => !prev)} className='text-blue-700 ml-1'>Login</span></p>
        </div>
    )
}

export default Register