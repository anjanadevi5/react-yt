import React from 'react'

const Card = (props) => {
  return (
          <div className='card'>
            <img src={props.img}></img>            <h1>{props.name} {props.age}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <button>View profile</button>
          </div>
  )
}

export {Card}   