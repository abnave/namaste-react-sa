import { createContext } from "react";

const UserContext = createContext({
    user : {
        name: "Bond",
        email: "james@bond.com"
    }
});

UserContext.displayName = "UserContext";
export default UserContext;