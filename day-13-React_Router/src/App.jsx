import React from 'react'
import Navbar from './components/Navbar'
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className='h-screen w-full bg-zinc-900 text-white flex flex-col'>
      <Navbar />
      <AppRoutes />
    </div>
  )
}

export default App