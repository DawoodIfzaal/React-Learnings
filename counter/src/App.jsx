import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [counter, setCounter] = useState(10)

    const addValue = () => {
      setCounter(counter  => counter + 1)
    }

    const removeValue = () => {
      if(counter > 0)
        setCounter(counter => counter - 1)
    }

  return (
    <>
      <h1>This is a counter</h1>
      <h2>{counter}</h2>
      <button onClick={addValue} style={{background:'yellow'}}>Add Number</button>
      <button onClick={removeValue}>Remove Number</button>
    </>
  )
}

export default App
