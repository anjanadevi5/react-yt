import React from 'react'

const App = () => {

  //Add item
  localStorage.setItem('User', 'Anjana')
  localStorage.setItem('age', 21)

  //Get item
  const age = localStorage.getItem('age')
  console.log(age)

  //Remove item
  localStorage.removeItem('age')
  console.log(localStorage.getItem('age'))

  //Value should always be string
  const user = {
    username: 'Anjana',
    age: 21,
    city: 'Tiruvallur'
  }

  localStorage.setItem('user', JSON.stringify(user)) //	[object Object] otherwise without stringify

  const userDetails = localStorage.getItem('user')
  console.log(userDetails);    //String
  console.log(typeof(userDetails));

  const userdetails = JSON.parse(localStorage.getItem('user'))
  console.log(userdetails);   //Object
  

  return (
    <div>App</div>
  )
}

export default App

//Local storage = memory inside a website 
//ex: log in details in a website

/*
To clear data : localStorage.clear() , sessionStorage.clear()
*/

/*
Local storage imp methods

1. localStorage.setItem('','')
2. localStorage.getItem('')
3. localStorage.removeItem('age')
4. localStorage.clear()
*/