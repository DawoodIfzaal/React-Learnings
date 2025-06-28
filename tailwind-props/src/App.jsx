import { useState } from 'react'
import Card from './components/Card.jsx'

function App() {
  const myobj = {
    username: "black"
  }
  return (
    <>
      <p className='bg-green-800 p-3 text-black' >This is tailwind Paragraph ma boyy</p>
      <Card price = "20" isThere = "nigga" thisObj = {myobj}/>
      <Card price = "40"/>
    </>
  )
}

export default App
