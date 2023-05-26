import { LOGO_URL } from "../configs/config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const HeaderComponent = () => {
  const isOnline = useOnline();
  return (
    <div className="header-container">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us </Link></li>
          <li><Link to="/contact">Contact us </Link></li>
          <li>Cart </li>
          <li>{isOnline ? "🟩" : "🟥"}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
