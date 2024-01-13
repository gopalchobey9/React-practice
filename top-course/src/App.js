import React, { useEffect, useState } from 'react'
import Navbar from './component/Navbar/Navbar'
import Filtering from './component/Filtering/Filtering'

import {filterData, apiUrl}  from "./utils/data"
import CardSection from './component/CardSection/CardSection'

const App = () => {
  const [courses , setCourses] =useState(null);
  const [loading,setLoading] = useState(true);
  const [category ,setCategory] =useState(filterData[0].title);

  const fetchData =async()=>{
    try{
      setLoading(true);
      const res = await  fetch(apiUrl);
      const output = await res.json(); 
      // save data into a vairable
      // console.log(output)  
      setCourses(output.data);
      console.log(output.data);  
      setLoading(false)
    }
    
    catch(e){
      console.log(e);
    }
  }
  useEffect(()=>{
    
    fetchData();
  },[]);

  // console.log(courses)
  console.log(category);
  return (
    <div className=''>
      <Navbar/>
      <Filtering filterData={filterData}
      category={category}
      setCategory={setCategory}
      
      />   
       
       {loading? <Navbar/>:<CardSection 
       courses={courses} 
       category={category}/>}

        </div>
  )
  
}

export default App