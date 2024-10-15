import { useState } from 'react'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'

function App() {

  return (
    <>
    <div className='flex justify-center mt-4 text-xl'>Todos with Redux Toolkit</div>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App
