import React, { useState } from 'react'

const App = () => {
    const [num,setNum] = useState(0)
    const [name,setName] = useState('')

    function increaseCounter(){
      setNum(num + 1)
    }

    function decreaseCounter(){
      setNum(num - 1)
    }

    function increaseCounterBy5(){
      setNum(num + 5)
    }

    function resetCounter(){
      setNum(0)
    }

    function changeName(e){
      setName(e.target.value)
    }

    function resetName(){
      setName('')
    }

    function exampleName(){
      setName('devi')
    }

  return (
    <div>
      <h2>Counter</h2>
      <h1>{num}</h1>
      <button onClick={increaseCounter}>increase</button>
      <button onClick={decreaseCounter}>decrease</button>
      <button onClick={increaseCounterBy5}>Increase by 5</button>
      <button onClick={resetCounter}>Reset</button>

      <input type='text' placeholder='Enter your name' onChange={changeName
      } value={name}></input>
      <button onClick={resetName}>Reset</button>
      <p>Name is {name}</p>
      <button onClick={exampleName}>Example</button>


    </div>
  )
}

export default App

// a is read-only
//setA is write-only

/*
const [num, setNum] = useState(5)
  const [username, setUsername] = useState('Anjana')
  const [arr,setArray] = useState([10,20,30])

  function changeNum(){
    setNum(14)
  }

  function changeUsername(){
    setUsername('devi')
  }

  function changeArray(){
    setArray(arr.map(elem =>  elem * 2))
  }

  return (
    <div>
      <h1>The value of a is {num}</h1>
      <button onClick={changeNum}>
        Click me
      </button> 
      <h1>My name is {username}</h1>
      <button onClick={changeUsername}>
        Click me
      </button>
      <h1>The Array is {arr}</h1>
      <button onClick={changeArray}>
        Click me
      </button>
    </div>
  )
*/