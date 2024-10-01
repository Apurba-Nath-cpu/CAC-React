import { useState } from 'react'
import './App.css'
import BottomBar from './components/bottomBar'

function App() {
  const [color, setColor] = useState('olive')
  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}
      >
        <BottomBar setColor={setColor}/>
      </div>
    </>
  )
}

export default App
