import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData, getAllRestaurants } from "../utils/helper";

const BodyComponent = () => {
  //useState returns array in which 1st element is your data and second is callback function to update to data
  const [allRestaurantList, setallRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(()=>{
    getAllRestaurants(setallRestaurantList, setfilteredRestaurantList);
  },[]);

  return allRestaurantList.length == 0 ? <Shimmer /> :(
    <div className="body-container">
      <div className="p-5 my-2 bg-orange-200">
        <input className="p-2 m-2" type="text" placeholder="Search restaurant" onChange={(event)=>{
          const inputValue = event.target.value;
          setSearchInput(inputValue);
          
        }}/>
        <button className="p-2 m-2 bg-gray-500 text-white rounded-lg" onClick={()=>{
          const filteredRestList = filterData("search", searchInput, allRestaurantList);
          setfilteredRestaurantList(filteredRestList);
        }}>Search</button>
      </div>
      <div className="btn-container">
        <button className="p-2 m-2 bg-green-400 rounded-lg" onClick = { ()=>{
          const filteredRestList = filterData("rating","", allRestaurantList);
          setfilteredRestaurantList(filteredRestList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurantList.map((restaurant) => {
          return (
            <Link to={"/restaurant/"+restaurant?.info?.id}><RestaurantCard key={restaurant?.info?.id} restData={restaurant} /></Link>
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
