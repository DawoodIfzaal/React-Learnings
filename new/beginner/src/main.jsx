import { createRoot } from 'react-dom/client'
import React from 'react'

function NewApp(){
  const name = "dawood"
  const age = 21
  return(
    <>
    <h1>Hello, {name}</h1>
    <p style = {{color: "red"}}>You are {age>=18? "adult" : "child"} </p>
    </>
  )
}


createRoot(document.getElementById('root')).render(
  <>
  <NewApp/>
  </>
)
