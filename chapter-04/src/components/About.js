import { Outlet } from "react-router-dom";

const About = ()=>{
    return (<div>
        <h1>About us</h1>
        <Outlet />
        <h2>We connect restaurant to people!!</h2>
    </div>)
}
export default About;