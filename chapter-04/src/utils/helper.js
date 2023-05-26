import  {RESTAURANT_API_URL}  from "../configs/config";
export function filterData(type, inputText, restaurantList) {
  if (type == "search")
    return restaurantList.filter((rest) =>
      rest?.info?.name.includes(inputText)
    );
  if (type == "rating")
    return restaurantList.filter((rest) => rest?.info?.avgRatingString > 4.2);
}

export async function getAllRestaurants(setallRestaurantList, setfilteredRestaurantList){
    const data = await fetch(RESTAURANT_API_URL);
    const jsonData = await data.json();
    let result = [];
    result = jsonData.data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants;
    //data.success.cards[1].gridWidget.gridElements.infoWithStyle.restaurants
    setallRestaurantList(result);
    setfilteredRestaurantList(result);
  }