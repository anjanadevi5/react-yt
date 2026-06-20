import React from 'react'
import { useState } from 'react'

const App = () => {
  const [num, setNum] = useState({user:'Anjana', age:21})
  const [n,setN] = useState(10)

  const btnClicked = () => {
    const newNum = {...num}  //destructuring and created a new object
    newNum.user='devi'
    newNum.age=20

    setNum(newNum)
  }

  const btnClickedTwice = () => {
    setNum({user:'Anjana devi', age: 22})
  }

  const ageBtnClicked = () => {
    setNum({...num, age: 22})
    // or setNum(prev => {...prev, age:22})
  }

  const [arr,setArray] = useState([10,20,30])

  const btnclick = () => {
    const newArray = arr.map(a => a * 2)
    setArray(newArray)
  }

  //Batch-update

  const batchUpdate = () => {
    setN(n + 1)
    setN(n + 1)
    setN(n + 1)
  }

  const batchUpdateCorrect = () => {
    setN(prev => (prev+1))
    setN(prev => (prev+1))
    setN(prev => (prev+1))
  }

  return (
    <>
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked} onDoubleClick={btnClickedTwice}>Click</button>
      <button onClick={ageBtnClicked}>Change age</button>
    </div>
      <h1>{arr.map(a => a)}</h1>
      <button onClick={btnclick}>Click</button>
    <div>
      <h1>{n}</h1>
      <button onClick={batchUpdateCorrect} onDoubleClick={batchUpdate}>Increase num by 3</button>
    </div>
    </>
  )
}

export default App


//setNum is asynchronous
/*
setNum(20)
console.log(num) = 10
then gives 20
*/

//setNum(num) doesn't re-render
/*
setNum(num)
console.log(num) = 
react renders only if there's a change in value or change in state
*/