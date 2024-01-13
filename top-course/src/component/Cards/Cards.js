import React from 'react'
import "./Card.css"

const Cards = (props) => {

  return (
    <div>
        <img src={props.course.image.url} alt="gopal course images"></img>
     </div>
  )
}

export default Cards