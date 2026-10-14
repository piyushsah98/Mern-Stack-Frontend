import React, { useState } from 'react'

const App = () => {

  const [formData, setFormData] = useState({});

  const handleFormData = (e) => {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value })
    console.log(e)
  }

  return (
    <div className='h-screen w-full bg-zinc-950 text-white flex justify-center items-center'>
      <form className='flex flex-col gap-5 p-4 bg-gray-700 rounded-md' action="">
        <input
          onChange={handleFormData}
          name='name'
          className='px-3 py-2 rounded-md border-2 border-gray-300' type="text"
          placeholder='enter your name' />

        {formData.name}
        <input
          onChange={handleFormData}
          name='password'
          className='px-3 py-2 rounded-md border-2 border-gray-300' type="password" placeholder='enter your password' />
        {formData.password}
        <button className='px-3 py-2 rounded-md bg-blue-500'>Submit</button>
      </form>
    </div>
  )
}

export default App