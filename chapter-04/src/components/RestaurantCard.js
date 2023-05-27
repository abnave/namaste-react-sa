import { CDN_URL } from "../configs/config";
const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRatingString } =
    restData?.info;
  const { deliveryTime } = restData?.info?.sla;

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-orange-100">
      <img  src={CDN_URL + cloudinaryImageId}></img>
      <h2 className="font-bold text-xl">{name}</h2>

      <h4>{(cuisines.length == 0 ? "" :cuisines.join(", "))}</h4>

      <span>
        <h4>{costForTwo}</h4>
        <h4>{avgRatingString} ⭐</h4>
        <h4>{"Expected in " + deliveryTime + " Mins"}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
