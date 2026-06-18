import React from 'react'

const App = () => {
  function btnClicked(){
    console.log('button is clicked')
  }

  function UserTyping(elem){
    console.log(elem.target.value)
  }

  const pageScroll = (elem) => {
    const result = elem > 0 ? 'seedha scrolling' : 'ulta scrolling'
    console.log(result)
  }
  
  return (
    <div>
      <h1>Hello, Anjana</h1>
      <button onMouseEnter={
        function mouseEnter(){
          console.log('Mouse Entered')
        }} 
      onClick={btnClicked}>
          Change User
        </button>
      <button onClick={() => console.log('Hello guys')}>Explore this</button>
      <div>
        <input onChange={UserTyping}
          type='text' placeholder='Enter Your Name'>
        </input>
        <input onChange={(elem) => console.log(elem)}
          type='text' placeholder='Enter Your Name'>
        </input>
        <input onChange={(elem) => console.log(elem.target)}
          type='text' placeholder='Enter Your Name'>
        </input>
        <input onChange={(elem) => UserTyping(elem)}
          type='text' placeholder='Enter Your Name'>
        </input>
      </div>

      <div onMouseMove={(elem) => console.log(elem.clientY)} className='box'>

      
      </div>
      <div onWheel={(elem) => pageScroll(elem.deltaY)}>
        <div className='page1'></div>
        <div className='page2'></div>
      < div className='page3'></div>
      </div>
      

    </div>
  )
}

//If we write {btnClicked()}, the function will run even if the button is not clicked

export default App