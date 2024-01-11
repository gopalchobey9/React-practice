import React, { useState } from 'react'
import "./MainPage.css"


const MainPage = () => {
    const [output,setOutput] =useState(0);
    function minusHandler(){
      setOutput(output-1);

    }

    function plusHandler(){
      setOutput(output+1);

    }
    function resetHandler(){
      setOutput(0);
    }
  return (
    <div>
        <h3 className='heading'> Increament & Decrement</h3>
        <div className='div-main'>
            <div className='minus' onClick={minusHandler}>-</div>
            <div className='output'>{output}</div>
            <div className='plus' onClick={plusHandler}>+</div>
        </div>
        <div className='reset'>   
        <button onClick={resetHandler}  > RESET</button>
        </div>
    </div>
  )
}

export default MainPage