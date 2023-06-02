import { CDN_URL } from "../configs/config";
const FoodItem = ({name, description, price, cloudinaryImageId})=>{
    return(<div>
        <img src={CDN_URL + cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{description}</h3>
        <h4>Rupees: {price}</h4>
    </div>)
}

export default FoodItem;