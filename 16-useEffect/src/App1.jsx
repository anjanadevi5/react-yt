import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App1 = () => {

    const [a, setA] = useState(0)
    const [b, setB] = useState(0)

    //I want to run the below functions in a side-stack
    function changeA(){
        console.log('A is increased by 1');
    }

    function changeB(){
        console.log('B is decreased by 1');
    }

    useEffect(() => {
        changeA()   //Runs once in the beginning even if a is 0
    },[a])

    useEffect(() => {
        changeB()   //Runs once in the beginning even if b is 0
    },[b])

  return (
    <div>
        <h1>A is {a}</h1>
        <h1>B is {b}</h1>
        <button onClick={() => setA(a + 1)}>Change A</button>
        <button onClick={() => setB(b - 1)}>Change B</button>
    </div>
  )
}

export default App1