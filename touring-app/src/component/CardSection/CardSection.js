import React, {useEffect, useState } from 'react'
import Card from './Card/Card'
import { array}  from "../../utils/data"
import "./CardSection.css"


console.log(array);

const CardSection = () => {

  const [array1,setArray1] =useState(array);
   function removeinfo(id){
    console.log(id)
    const newArray = array1.filter(data=> data.id !== id)
    setArray1(newArray);
    console.log(newArray);
   }


  return (
    <div className='hero'>
        
        { 
        array1.map((item,index)=>{

      return(
       <Card 
       image ={item.image}
       price ={item.price}  
       name ={item.name}
       info ={item.info}
       id={item.id}
       key={index}
       removeinfo={removeinfo}
       />
       )
        
})
}
    </div>
  )
}

export default CardSection