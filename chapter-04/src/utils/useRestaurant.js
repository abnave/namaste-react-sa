import { useState, useEffect } from "react";
import {FETCH_MENU_URL} from "../configs/config";

const useRestaurant = (resId)=>{
    const [restaurant, setRestaurant] = useState({restaurantBasic : null, restaurantMenu : []});
    
    useEffect(()=>{
        getRestaurantDetails();
    },[])

    async function getRestaurantDetails(){
        const restDetails = await fetch(FETCH_MENU_URL + resId +"&submitAction=ENTER");
        const data = await restDetails.json();
        const result = data?.data;
        const restaurantBasicInfo = result?.cards[0]?.card?.card?.info;
        const restMenuLevel1 = result?.cards;
        const restMenuLevel2 = restMenuLevel1?.filter((rest)=>{
            return rest?.groupedCard?.cardGroupMap?.REGULAR
        })
        const restMenuLevel3 = restMenuLevel2[0]?.groupedCard?.cardGroupMap?.REGULAR.cards;
        const restMenuLevel4 = restMenuLevel3?.map(element=>element?.card?.card?.itemCards);
        let finalMenuList = [];
        restMenuLevel4?.map((element)=>{
            element?.map((ele)=>{
                let dish = {
                    id: ele?.card?.info?.id,
                    name : ele?.card?.info?.name,
                    imageId : ele?.card?.info?.imageId,
                    price : ele?.card?.info?.price,
                    description : ele?.card?.info?.description
                }
                finalMenuList.push(dish);
            })
        })
        setRestaurant({
            restaurantBasic : restaurantBasicInfo,
            restaurantMenu : finalMenuList
        });
    }
    
    return restaurant;
}

export default useRestaurant;