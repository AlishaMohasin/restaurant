import React from 'react'
import Restaurant from './Restaurant'

const Restaurants = (props) => {
  return (
    <div className="container divider">
       
    <div className="cards">
    {props.Restaurant.map((restaurants)=>( 
   
   
<Restaurant key={restaurants.id} restaurants={restaurants}/>
   
   
 ))}
       
     
       
       
    </div>
</div>
    
  )
}

export default Restaurants