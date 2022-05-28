import React from 'react'


const Restaurant = ({restaurants}) => {
  return (
    <div  key={restaurants.id}  className="card">
    <img width="254" height="160px" src={restaurants.image} />
    <div className="restaurant-details">
        <div className="restaurant-title">{restaurants.name}</div>
        <div className="restaurant-subtitle">{restaurants.category.join(",")}</div>
    </div>
    <div className="restaurant-info">
        <div className="restaurant-ratings">
            <i className="material-icons star-icon">star</i>{restaurants.rating}
        </div>
         .<div className="restaurant-delivery-timings">{restaurants.deliveryTimings}</div> .
        <div className="restaurant-cost-for-two">₹{restaurants.costfortwo} FOR TWO</div>
    </div>
    <div className="offer-banner">
        <span className="material-icons"> local_offer </span>
        <span className="offer-text">{restaurants.offer.join("|")}</span>
    </div>
    </div>
  

  
  )
}

export default Restaurant