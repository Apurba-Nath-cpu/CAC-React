import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const myObj = {
    'name': 'Arjun',
    'age': 23
  }

  const myArr = [1,2,3]

  return (
    <>
      <h1 className='bg-green-300 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card channel = 'Chai Aur Code' someObj={myObj} someArr = {myArr} name="Arjun"/>
      <Card channel = 'Chai Aur Code' someObj={myObj} someArr = {myArr} name="Rahul"/>
    </>
  )
}

export default App
