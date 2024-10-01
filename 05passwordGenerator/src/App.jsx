import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [specialCharAllowed, setSpecialCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    
    if (numberAllowed) str += '0123456789';
    if(specialCharAllowed) str += "'`\"!@#$%^&*()_+~|}{[]:;?><,./-=";
    
    for(let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }

    setPassword(pass);
  }, 
    [length, numberAllowed, specialCharAllowed],
  )

  const copyPasswordToClipboard = useCallback(
    () => {
      passwordRef.current?.select();
      passwordRef.current?.setSelectionRange(0, 50);
      window.navigator.clipboard.writeText(password);
    }, 
    [password]
  )

  useEffect(
    () => {
      passwordGenerator();
    }, 
    [length, numberAllowed, specialCharAllowed, passwordGenerator]
  )
    
  return (
    <>
    <div className='m-auto w-[500px] rounded-lg px-4 my-8 py-1 text-orange-500 bg-gray-800'>
    <h1 className='my-3 text-center text-white'>
      Password Generator
    </h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-none w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        >
        </input>
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-300 text-white px-3 py-0.5 shrink-0 active:bg-blue-700'
        >Copy</button>
      </div>
      <div
      className='flex text-sm gap-x-4 justify-center'
      >
        <div
        className='flex items-center gap-x-1'
        >
          <input 
          type="range" 
          name="" 
          id="" 
          min={6}
          max={50}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label htmlFor='numberInput'>Length {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={specialCharAllowed}
          id='numberInput'
          onChange={() => {
            setSpecialCharAllowed((prev) => !prev);
          }}
          />
          <label htmlFor='numberInput'>Sp. Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
