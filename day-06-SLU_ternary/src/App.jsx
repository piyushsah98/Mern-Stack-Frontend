import React, { useState } from 'react'
import Register from './components/Register'
import Login from './components/Login'

const App = () => {
  const [toogle, setToogle] = useState(true);
  const [users, setUsers] = useState([]); // this state has been lifted up from register to app.jsx --> ( State Lifting Up )
  console.log(users);

  return (
    <div className='h-screen w-full bg-[#1d2223] text-white flex justify-center items-center'>
      {toogle ?
        <Register setToogle={setToogle} setUsers={setUsers}/> :
        <Login setToogle={setToogle} />
      }
    </div>
  )
}

export default App