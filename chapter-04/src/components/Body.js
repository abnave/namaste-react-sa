import restList from "../configs/sampleRestData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const BodyComponent = () => {
  //useState returns array in which 1st element is your data and second is callback function to update to data
  const [listOfRestaurant, setlistOfRestaurant] = useState(restList);
  return (
    <div className="body-container">
      <div className="search-container">
        <input type="text" placeholder="Search restaurant" onChange={(event)=>{
          const inputValue = event.target.value;
          const filteredRestList = restList.filter(rest=> rest?.info?.name.includes(inputValue));
          setlistOfRestaurant(filteredRestList);
        }}/>
        
      </div>
      <div className="btn-container">
        <button className="btn-01" onClick = { ()=>{
          const filteredRestList = listOfRestaurant.filter(rest=> rest?.info?.avgRatingString > 4.2);
          setlistOfRestaurant(filteredRestList);
        }}>Top Rated Restaurants</button>
      </div>
      <div className="rest-container">
        {listOfRestaurant.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant?.info?.id} restData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

export default BodyComponent;
