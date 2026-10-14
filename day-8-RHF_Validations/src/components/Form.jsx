import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
// nano id package will give you unique id

const Form = ({ setUsers, setToogle, updateData, users }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onTouched',  // Validates after first blur, then on change
    defaultValues: updateData
  });

  const formSubmit = (data) => {
    const newUser = {
      id: Date.now(),
      ...data
    }

    if (updateData) {
      setUsers((prev) => {
        return prev.map((val) => {
          return val.id === updateData.id ? { ...newUser } : val;
        });
        localStorage.setItem('users', JSON.stringify(users));
      })
    } else {
      let arr = [...users, newUser];
      setUsers(arr);
      localStorage.setItem('users', JSON.stringify(arr));
    }
    reset();
    setToogle(prev => !prev);
  }

  return (
    <div className='flex-1 flex justify-center items-center'>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className='w-100 bg-gray-800 px-4 py-6 flex flex-col gap-6 rounded-md'
        action="">
        <input
          {...register('name',
            {
              required: 'Name is required',
            }
          )}
          className='w-full text-xl px-3 py-2 rounded-md border border-white/60 outline-0' type="text" placeholder='Name' />
        {errors.name && <p className='text-red-500'>{errors.name.message}</p>}

        <input
          {...register('email',
            {
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'Invalid email address'
              }
            }
          )}
          className='w-full text-xl px-3 py-2 rounded-md border border-white/60 outline-0' type="email" placeholder='Email' />
        {errors.email && <p className='text-red-500'>{errors.email.message}</p>}

        <input
          {...register('mobileNo',
            {
              required: 'Mobile no. is required',
              minLength: {
                value: 10,
                message: 'Minimum 10 digits are required'
              },
              maxLength: {
                value: 10,
                message: 'Maximum 10 digits are required'
              }
            }
          )}
          className='w-full text-xl px-3 py-2 rounded-md border border-white/60 outline-0' type="number" placeholder='Mobile no' />
        {errors.mobileNo && <p className='text-red-500'>{errors.mobileNo.message}</p>}

        <input
          {...register('url',
            {
              required: 'Url is required'
            }
          )}
          className='w-full text-xl px-3 py-2 rounded-md border border-white/60 outline-0' type="url" placeholder='Image link' />
        {errors.url && <p className='text-red-500'>{errors.url.message}</p>}

        <button className='w-full px-3 py-2 rounded-md bg-blue-700 text-xl'>
          {!updateData ? 'Register' : 'Edit'}
        </button>
      </form>
    </div>
  )

}

export default Form