import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Form from './components/Form'
import UserCard from './components/UserCard'

const App = () => {
  const [toogle, setToogle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem('users')) || [];
  });
  const [updateData, setUpdateData] = useState(null);

  const deleteUser = (id) => {
    let delUser = users.filter(user => user.id !== id)
    setUsers(delUser);
    localStorage.setItem('users', JSON.stringify(delUser))
  }
  
  console.log(users)

  // const editUser = (id) => {
  //   setToogle(prev => !prev);
  //   const findEditUser = users.find(user => user.id === id);
  //   setEditingUser(findEditUser);
  // }

  return (
    <div className='h-screen w-full flex flex-col bg-gray-950 text-white'>
      <Navbar setToogle={setToogle}/>

      {toogle ?
        <div className='flex-1 p-4 flex flex-wrap gap-4'>
          {users.map(user => {
            return <UserCard key={user.id} user={user} deleteUser={deleteUser} setUpdateData={setUpdateData} setToogle={setToogle}/>
          })}
        </div> :
        <Form setUsers={setUsers} setToogle={setToogle} updateData={updateData} users={users}/>
      }
    </div>
  )
}

export default App