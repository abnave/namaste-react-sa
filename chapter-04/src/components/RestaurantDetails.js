import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../configs/config";
import Shimmer from "./Shimmer";

const RestaurantDetails = ()=>{
    const params = useParams();
    const {id} = params;
    
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantDetails();
    },[])

    async function getRestaurantDetails(){
        const restDetails = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.513463&lng=73.76985789999999&restaurantId="+ id +"&submitAction=ENTER");
        const data = await restDetails.json();
        const result = data?.data?.cards[0]?.card?.card?.info;
        setRestaurant(result);
    }

return !restaurant ? <Shimmer /> :(<div>
    <div className="rest-info">
    <img className="rest-logo" src={CDN_URL + restaurant.cloudinaryImageId}></img>
      <h2>{restaurant.name}</h2>

      <h4>{(restaurant.cuisines.length == 0 ? "" :restaurant.cuisines.join(", "))}</h4>
      <span>
        <h4>{restaurant.costForTwoMessage}</h4>
        <h4>{restaurant.avgRating} ⭐</h4>
      </span>
    </div>
    <div className="rest-menu">
    </div>
</div>)

}

export default RestaurantDetails;