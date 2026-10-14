import React, { useState } from 'react'

const UserCard = ({ user, deleteUser, setUpdateData, setToogle }) => {
  return (
    <div className='h-95 w-70 rounded-md border border-white/60 p-3 flex flex-col justify-between'>
      <div className='h-57 w-full bg-gray-500 rounded-md'>
        <img className='h-full w-full object-cover' src={user.url} alt="" />
      </div>
      <h1 className='text-md'>{user.name}</h1>
      <p className='text-md mb-2'>{user.email}</p>
      <div className='flex justify-between'>
        <button onClick={() => {
          setUpdateData(user);
          setToogle(prev => !prev);
        }} className='px-2 py-1 rounded-md bg-yellow-600 cursor-pointer'>edit</button>
        <button onClick={() => deleteUser(user.id)} className='px-2 py-1 rounded-md bg-red-500 cursor-pointer'>delete</button>
      </div>
    </div>
  )
}

export default UserCard