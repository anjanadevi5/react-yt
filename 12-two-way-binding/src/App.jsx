import React, { useState } from 'react'
//Two-way binding through useState

const App = () => {

  const [text, setText] = useState('')

  const submitHandler =(e) => {
    e.preventDefault()
    console.log('Form submitted by', text)  //e.target.value belongs to form element and is undefined

    setText('')
  }

  return (
    <div>
      <form onSubmit={(e) => {submitHandler(e)}} >
        <input type='text' 
          placeholder='Enter your name' 
          value= {text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App


//Basically, whenever i type something in the input, it is set to title and thus the value changes
//useState is react 

//setTitle('') = placeholder returns