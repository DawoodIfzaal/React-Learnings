import { useState } from 'react'
function App() {
  const [color, setColor] = useState("black")
  return (
    <>
      <div className='outer-containter min-w-screen min-h-screen flex flex-col justify-end items-center '
        style={{backgroundColor: color}}>
        <div className='inner-container bg-gray-200 flex m-10 gap-3 p-3'>
          <div className='bg-red-600 rounded-2xl p-2'><button onClick={() => setColor("red")}>red</button></div>
          <div className='bg-blue-700 rounded-2xl p-2'><button onClick={() => setColor("blue")}>Blue</button></div>
          <div className='bg-green-600 rounded-2xl p-2'><button onClick={() => setColor("green")}>Green</button></div>
        </div>
      </div>
    </>
  )
}

export default App
