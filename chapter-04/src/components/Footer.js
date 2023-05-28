import { useContext } from "react";
import UserContext from "../utils/UserContext";


const FooterComponent = () => {
  const {user} = useContext(UserContext);
  return (<div className="p-2 m-2">
    <h3 className="text-center">Made with love for {user.name}</h3>
  </div>);
};

export default FooterComponent;
