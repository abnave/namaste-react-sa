import useRestaurant from "../utils/useRestaurant";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../configs/config";
import Shimmer from "./Shimmer";

const RestaurantDetails = ()=>{
    const params = useParams();
    const {id} = params;
    const restaurant = useRestaurant(id);

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