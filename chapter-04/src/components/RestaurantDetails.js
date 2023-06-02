import useRestaurant from "../utils/useRestaurant";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../configs/config";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const params = useParams();
  const { id } = params;
  const restaurant = useRestaurant(id);
  const restaurantBasicInfo = restaurant?.cards[0]?.card?.card?.info;
  const restaurantMenu = restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card.card.itemCards;
  console.log(restaurantBasicInfo);

  return !restaurantBasicInfo ? <Shimmer /> : (<div className="flex">
    <div className="">
      <img className="w-56 p-2 m-2 shadow-lg bg-orange-100" src={CDN_URL + restaurantBasicInfo.cloudinaryImageId}></img>
      <h2>{restaurantBasicInfo.name}</h2>

      <h4>{(restaurantBasicInfo.cuisines.length == 0 ? "" : restaurantBasicInfo.cuisines.join(", "))}</h4>
      <span>
        <h4>{restaurantBasicInfo.costForTwoMessage}</h4>
        <h4>{restaurantBasicInfo.avgRating} ⭐</h4>
      </span>
      <span>

      </span>
    </div>
    <div className="rest-menu">
      <h1 className="text-xl text-center">Menu</h1>
      <ul>
        {restaurantMenu.map((menu) => {
          return (
            <div>
            <li>{menu.card.info.name}</li>
            <li><button className="p-2 m-2 bg-green-400" onClick={()=>{
              
            }}>Add</button></li>
            </div>
          )
        })}
      </ul>
    </div>
  </div>)

}

export default RestaurantDetails;