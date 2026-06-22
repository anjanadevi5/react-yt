import React, { useState } from 'react'

const App = () => {

  //Two-way binding
  const [title, setTitle] = useState('')
  const [details, setDetails] = useState('')

  const [task, setTask] = useState([])

  //Form handling
  const submitHandler = (e) => {
    e.preventDefault()

    setTask([...task,{title, details}])
    
    setTitle('')
    setDetails('')
  }

  const deleteNote = (idx) => {
    const addTask = [...task]

    addTask.splice(idx, 1)

    setTask(addTask)
  }

  return (
    <div className='notes-app'>
    <div className='notes-container'>

      <form className='notes-app-form' onSubmit={submitHandler}>
        <h1>Add Notes</h1>

        <div className='text-area'>
          <input 
            type='text' 
            placeholder='Enter Task'
            value={title}
            className='enter-task' 
            onChange={(e) => {setTitle(e.target.value)}}
          />

          <textarea 
            placeholder='Enter Details'
            value={details} 
            className='enter-details' 
            onChange={(e) => {setDetails(e.target.value)}}
          />

          <button className='button'>            
            Add Notes
          </button>
        </div>
      </form>

      <div className='recent-notes'>
        <h1 className='notes-heading'>Recent Notes</h1>
        
        <div className='notes-list'>
          {task.map(function(elem, idx){
            return(
            <div key={idx} className='details'>
              <div className='note-content'>
              <h5>{elem.title}</h5>
              <hr />
              <h6>{elem.details}</h6>
              </div>
              <button onClick={() => deleteNote(idx)} className='delete-btn'>Delete note</button>
            </div>
            )
            })}
          </div>
      </div>
    </div>
    </div>
  )
}

export default App