import { useState, useEffect } from "react";
import {FETCH_MENU_URL} from "../configs/config";

const useRestaurant = (resId)=>{
    const [restaurant, setRestaurant] = useState(null);
    
    useEffect(()=>{
        getRestaurantDetails();
    },[])

    async function getRestaurantDetails(){
        const restDetails = await fetch(FETCH_MENU_URL + resId +"&submitAction=ENTER");
        const data = await restDetails.json();
        const result = data?.data?.cards[0]?.card?.card?.info;
        setRestaurant(result);
    }
    
    return restaurant;
}

export default useRestaurant;