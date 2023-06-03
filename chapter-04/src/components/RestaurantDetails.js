import useRestaurant from "../utils/useRestaurant";
import { useParams } from "react-router-dom";
import { CDN_URL } from "../configs/config";
import Shimmer from "./Shimmer";
import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { addItem, removeItem, clearCart } from "../utils/cartSlice";

const RestaurantDetails = () => {
  const params = useParams();
  const { id } = params;
  const { restaurantBasic, restaurantMenu } = useRestaurant(id);
  const dispatch = useDispatch();   
  function handleOnAdd(menu){
     dispatch(addItem(menu));
  }   

  return !restaurantBasic ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="">
        <img
          className="w-56 p-2 m-2 shadow-lg bg-orange-100"
          src={CDN_URL + restaurantBasic.cloudinaryImageId}
        ></img>
        <h2>{restaurantBasic.name}</h2>

        <h4>
          {restaurantBasic.cuisines.length == 0
            ? ""
            : restaurantBasic.cuisines.join(", ")}
        </h4>
        <span>
          <h4>{restaurantBasic.costForTwoMessage}</h4>
          <h4>{restaurantBasic.avgRating} ⭐</h4>
        </span>
        <span></span>
      </div>
      <div className="flex">
        <h1 className="text-xl text-center">Menu</h1>
        <ul>
          {restaurantMenu?.map((menu) => {
            return (
              <div className="flex flex-wrap">
                <li>
                  <FoodItem key={menu.id} menu={menu} />
                </li>
                <li>
                  <button className=" p-2 m-2 bg-green-300" onClick={()=>{
                    handleOnAdd(menu)
                  }}>Add</button>
                </li>
              </div>
            );
          })}
        </ul>
        <ul> </ul>
      </div>
    </div>
  );
};

export default RestaurantDetails;
