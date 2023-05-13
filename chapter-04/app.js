import React from "react";
import ReactDOM from "react-dom/client";


const RestaurantCard = ()=>{
    return (<div className="rest-card">
        <img className="rest-logo" src="https://www.licious.in/blog/wp-content/uploads/2022/06/chicken-hyderabadi-biryani-01.jpg"></img>
        <h2>Rush Hrs</h2>
      <h4>Indian, Chinease</h4>
      <h4>4.5 ⭐</h4>
      <h4>40 Mins</h4>
    </div>)
}
const BodyComponent = () =>{
  return (<div className="body-container">
    <div className="search-container">

    </div>
    <div className="rest-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
    </div>
  </div>)
}
const HeaderComponent = () =>{
  return (<div className="header-container">
    <div className="logo-container">
        <img className="logo" src="https://img.freepik.com/free-vector/food-shopping-logo-template-design_460848-10299.jpg"></img>
    </div>
    <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart </li>
        </ul>
    </div>
  </div>)
}
const FooterComponent = () =>{
  return (<div className="footer-container"></div>)
}
const AppLayout = () =>{
  return (<>
    <HeaderComponent />
    <BodyComponent />
    <FooterComponent />
  </>)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
//  "main": "app.js",
