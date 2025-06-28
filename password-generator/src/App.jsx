import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [char, setChar] = useState(false)
  const [password, setPassword] = useState("")

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

    if(number){
      str += "1234567890"
    }

    if(char){
      str += "!~@#$%^&*()"
    }

    for(let i = 0; i < length; i++){
      let charIndex = Math.floor(Math.random() * str.length)
      pass += str.charAt(charIndex)
    }

    setPassword(pass)

  }, [number, char, length])

  useEffect(() => {
    generatePassword()
  }, [generatePassword])

  const passwordRef = useRef(null) 
  
  const copyToClip = () => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }

  return (
    <>
    <div><h1 className='text-white text-center m-4 text-2xl font-bold'>Password Generator</h1></div>
    <div>
      <div>
        <input type="text" className='text-amber-600 bg-white' value={password} readOnly ref={passwordRef}/>
        <button onClick={copyToClip} className='text-white cursor-pointer'>Copy</button>
      </div>
      <div>
        <input type="range" min="8" max="100" id="lengthSlider" value = {length} onChange={(e) => setLength(e.target.value)}/>
        <label htmlFor="lengthSlider" className='text-white'>Length({length})</label>
        <input type="checkbox" id='numberBox' onChange={() => setNumber((number) => !number)}/>
        <label htmlFor="numberBox" className='text-white'>Numbers</label>
        <input type="checkbox" id='charBox' onChange={() => setChar((char) => !char)}/>
        <label htmlFor="charBox" className='text-white'>Characters</label>
      </div>
    </div>
    </>
  )
}

export default App
