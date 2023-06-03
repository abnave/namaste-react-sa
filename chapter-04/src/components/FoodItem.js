import { CDN_URL } from "../configs/config";
const FoodItem = ({menu})=>{
    const {id, name, imageId, price, description} = menu;
    return(<div className="w-56 p-2 m-2 shadow-lg bg-orange-100">
         <img  src={CDN_URL + imageId}></img>
        <h2 className="font-bold text-lg">{name}</h2>
        <h3>{description}</h3>
        <h4>Rupees: {Math.floor(price/100)}</h4> 
    </div>)
}

export default FoodItem;