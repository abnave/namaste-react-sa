import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const BodyComponent = () => {
  //useState returns array in which 1st element is your data and second is callback function to update to data
  const [allRestaurantList, setallRestaurantList] = useState([]);
  const [filteredRestaurantList, setfilteredRestaurantList] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const filterData = (type, inputText, restaurantList)=>{
    if(type == "search") return restaurantList.filter(rest=> rest?.info?.name.includes(inputText));
    if(type == "rating") return restaurantList.filter(rest=> rest?.info?.avgRatingString > 4.2);
  }
  useEffect(()=>{
    getAllRestaurants();
  },[]);
  async function getAllRestaurants(){
    const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=18.513463&lng=73.76985789999999");
    const jsonData = await data.json();
    let result = [];
    result = jsonData.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants;
    //data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants
    setallRestaurantList(result);
    setfilteredRestaurantList(result);
  }

  return allRestaurantList.length == 0 ? <Shimmer /> :(
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search restaurant" onChange={(event)=>{
          const inputValue = event.target.value;
          setSearchInput(inputValue);
          
        }}/>
        <button onClick={()=>{
          const filteredRestList = filterData("search", searchInput, allRestaurantList);
          setfilteredRestaurantList(filteredRestList);
        }}>Search</button>
        
      </div>
      <div className="btn-container">
        <button className="btn-01" onClick = { ()=>{
          const filteredRestList = filterData("rating","", allRestaurantList);
          setfilteredRestaurantList(filteredRestList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="rest-container">
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
