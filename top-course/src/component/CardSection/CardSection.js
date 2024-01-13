  import React from 'react'
import Cards from '../Cards/Cards';
import "./CardSection.css"
  
  const CardSection = (props) => {
    let courses = props.courses;
    let category = props.category;
    // if (!courses) {
    //     // Handle the case where courses is null or undefined
    //     return <div>No courses available</div>;
    //   }

    // console.log(courses)
    
    function getCourses(){
    if(category ==="All"){
        let allcourse =[];
        Object.values(courses).forEach(courseCategory=>{
            courseCategory.forEach(course=>{
                allcourse.push(course)
            })
        })
        return allcourse;
    }
    else {
     return courses[category]   
      }
    }
   


    return (
      <div className='allcard'>
     {
          getCourses().map((course)=>{
            return(
                <Cards 
                key ={course.id}
                course={course}/>
    
            )
           })
     }
        

      </div>
    )
  }
  
  export default CardSection