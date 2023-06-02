import { useDispatch } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";

const Cart = ()=>{
 const dispatch = useDispatch();   
 function handleOnAdd(){
    dispatch(addItem("Potato"));
 }   
 function handleOnRemove(){
    dispatch(removeItem());
 }  
 function handleOnEmpty(){
    dispatch(clearCart());
 }  
 return (<div>
    <h2>This is cart page</h2>
    <button className="bg-slate-400 p-2 m-2"  onClick={()=>{
        handleOnAdd();
    }} >Add item</button>
    <button className="bg-slate-400 p-2 m-2"  onClick={()=>{
        handleOnRemove();
    }} >Remove Item</button>
    <button className="bg-slate-400 p-2 m-2"  onClick={()=>{
        handleOnEmpty();
    }} >Empty Item list</button>
 </div>)
}

export default Cart;