import { CDN_URL } from "../configs/config";
const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, cloudinaryImageId, costForTwo, cuisines, avgRatingString } =
    restData?.info;
  const { deliveryTime } = restData?.info?.sla;

  return (
    <div className="rest-card">
      <img className="rest-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h2>{name}</h2>

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
