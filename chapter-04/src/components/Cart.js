import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { useDispatch } from "react-redux";
import { removeItem, clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();   

  function handleOnRemove() {
    dispatch(removeItem());
  }
  function handleOnEmpty() {
    dispatch(clearCart());
  }

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <div>
            <li>
              <FoodItem key={item.id} menu={item} />
            </li>
            <li>
              <button className="p-2 m-2 bg-red-600" onClick={() => {handleOnRemove()}}>
                Remove
              </button>
            </li>
          </div>
        ))}
      </ul>
      <button className="p-2 m-2 bg-red-900" onClick={()=>{
        handleOnEmpty()
      }}>Clear Cart</button>
    </div>
  );
};
export default Cart;
