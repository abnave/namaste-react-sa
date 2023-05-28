import { LOGO_URL } from "../configs/config";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const HeaderComponent = () => {
  const isOnline = useOnline();
  const {user} = useContext(UserContext);
  return (
    <div className="flex justify-between bg-orange-300 shadow-lg">
      <div className="logo-container">
        <img className="h-28 p-2" src={LOGO_URL}></img>
      </div>
      <div>
        <ul className="flex py-2">
          <li className="p-2 m-2 px-2 text-lg font-bold">Welcome {user.name}</li>
          <li className="p-2 m-2 px-2 bg-orange-600"><Link to="/">Home</Link></li>
          <li className="p-2 m-2 px-2 bg-orange-600"><Link to="/about">About us </Link></li>
          <li className="p-2 m-2 px-2 bg-orange-600"><Link to="/contact">Contact us </Link></li>
          <li className="p-2 m-2 px-2 bg-orange-600"><Link to="/instamart">Instamart</Link></li>
          <li className="px-2">{isOnline ? "🟩" : "🟥"}</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
