import React from 'react'
import Register from './components/Register'
import RHF from './components/RHF'

const App = () => {
  console.log('app rendering...')
  const [first, setfirst] = useState([])
  return (
    <div className='h-screen w-full bg-zinc-900 flex justify-center items-center text-white'>
      {/* <Register /> */}
      <RHF />
    </div>
  )
}

export default App