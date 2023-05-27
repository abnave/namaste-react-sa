import { LOGO_URL } from "../configs/config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
const HeaderComponent = () => {
  const isOnline = useOnline();
  return (
    <div className="flex justify-between bg-orange-300 shadow-lg">
      <div className="logo-container">
        <img className="h-28 p-2" src={LOGO_URL}></img>
      </div>
      <div>
        <ul className="flex py-2">
          <li className="px-2"><Link to="/">Home</Link></li>
          <li className="px-2"><Link to="/about">About us </Link></li>
          <li className="px-2"><Link to="/contact">Contact us </Link></li>
          <li className="px-2">Cart </li>
          <li className="px-2">{isOnline ? "🟩" : "🟥"}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
