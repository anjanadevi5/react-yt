import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault()   //prevent re-loading of form
    console.log('Form submitted')
  }
  return (
    <div>
      <form onSubmit={(e) => {submitHandler(e)}}>
        <input type='text' placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App

//We are directly interacting with the browser w/o React

//Form's default behaviour

/* 
Page reloads whenever we submit a form
And console shows it for microseconds
*/

/*
submitHandler()
can have () when written inside a function
*/