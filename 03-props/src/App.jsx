import React from 'react'
import {Card} from './components/Card'

const App = () => {
  return (
    <div className='parent'>

      <Card name="Anjana"n age={18} img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBPu-NoRIk6h03p5DPBDYL8V8VQHgYqpbaBQ&s'/>
      <Card name="devi" age={21} img='https://media.istockphoto.com/id/538335769/photo/donut-with-sprinkles-isolated.jpg?s=612x612&w=0&k=20&c=rCA_fEe8H3qwXT20aYfRJTrMHpSB8deFuiKK0ygQLwg='/>
      
    </div>
    
  )
}

export default App