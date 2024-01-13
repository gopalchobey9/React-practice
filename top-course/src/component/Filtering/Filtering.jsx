import React from 'react'

const Filtering = (props) => {
  let filterData  = props.filterData;
  // let  category =props.category;
  let setCategory = props.setCategory;
  function categoryHandler(title){
    setCategory(title)
  }

  return (
    <div>
        {
            filterData.map((item,index)=>{
            return(
              <button onClick={ ()=> categoryHandler(item.title)}
               key={item.id}>
              
              {item.title}
            </button>
            )
            })
        }
    </div>
  )
}

export default Filtering