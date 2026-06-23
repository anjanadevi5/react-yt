import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App1 = () => {

    const [data, setData] = useState([])

    const getData = async () => {

        const response = await axios.get('https://picsum.photos/v2/list')

        console.log(response)  //object

        console.log(response.data)   //Array of objects

        setData(response.data)

        //Object destructuring

        const {data} = await axios.get('https://picsum.photos/v2/list')

        console.log(data)  //Array of objects
    }

  return (
    <div>
        <button onClick={getData}>Get Data</button>
        <div>
            {data.map((elem, idx) => {                    
                return(
                <>
                <h3 key={idx}>Hello, {elem.author}</h3>
                <img src='{elem.url}'></img>    
                </>
                )
            }
        )}
        </div>
    </div>
  )
}

export default App1