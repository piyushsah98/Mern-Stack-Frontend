import React from "react";

const Login = ({ setToogle }) => {
    return (
        <div className='p-4 bg-gray-700 rounded-md w-75'>
            <form className='flex flex-col w-full gap-6' action="">
                <div className='flex flex-col gap-2'>
                    <label htmlFor="email">Email</label>
                    <input className='px-3 py-2 rounded-md border border-gray-300 w-full' type="email" placeholder='enter your email' />
                </div>

                <div className='flex flex-col gap-2'>
                    <label htmlFor="password">Password</label>
                    <input className='px-3 py-2 rounded-md border border-gray-300 w-full' type="password" placeholder='enter your password' />
                </div>
                <button></button>
            </form>

            <p className="text-center cursor-pointer">Don't have an Account ?<span onClick={() => setToogle(prev => !prev)} className='text-blue-700 ml-1'>Register</span></p>
        </div>
    )
}

export default Login;