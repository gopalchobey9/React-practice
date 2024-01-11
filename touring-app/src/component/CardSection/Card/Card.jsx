import React, { useState } from 'react'
import "./Card.css"

const Card = (props ) => {
  const [readmore,setReadmore] = useState(false);

  // let info =`${props.info.substring(0,10)} .....`;
   const info = readmore? (`${props.info}`):(`${props.info.substring(0,10)} .....`)

 function readHandler(){
  setReadmore(!readmore);
  }
  function SubmitHandler()
{ 
      props.removeinfo(props.id);
}


 
  return (
    <div  className='card'>
      <div  className='inner-card'>
      <h2 className='Name'>{props.name}</h2>
        <img className='img' src={props.image} alt="imagehere" />
        <h4 className='price'>{props.price}</h4>
        <div>
        {info}
        <span className='info' onClick={readHandler} >
          {readmore? "Show less":"Read More"}
        </span>
        
        </div>
        <div>
          <button onClick={SubmitHandler}> Not Intrested</button>
        </div>
      </div>

    </div>
  )
}

export default Card