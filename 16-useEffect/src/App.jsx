import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(() => {
    console.log('UseEffect is running');
  },[num])    //[] = dependency array, doesn't run when state changes (Only once)

  return (
    <div>
      <h1>Value of num1 is {num}</h1>
      <h1>Value of num2 is {num2}</h1>
      <button onMouseEnter={() => {
        setNum(num + 1) 
      }}
        onMouseLeave={() => {
          setNum2(num2 + 10)
        }}>Click me  
      </button>
    </div>
  )
}

export default App

/*
UseEffect uses: (side-stack micro-tasks)

1. runs whenever state change  (MOUNTING)

useEffect(() => {
    console.log('UseEffect is running');
})  

2. runs whenver dependency
*/