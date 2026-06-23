import React from 'react'

const App = () => {

  async function getData(){
    //1 data
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1') // await : waits till the api is fully called

    console.log(response)  //promise pending as it is async (i.e. you will see the result in console before the data is fetched as it takes time)


    const data = await response.json() //json form

    console.log(data)

    //multiple data
    const responses = await fetch('https://jsonplaceholder.typicode.com/todos')

    console.log(responses)

    const datas = await responses.json()

    console.log(datas)

  }

  /*
  const getData = async () => {
    const response = await fetch ('')
    console.log(response)
    }
  */
 
  return (
    <div>
      <button onClick={getData}>Get Data</button>
    </div>
  )
}

export default App