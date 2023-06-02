import { React, lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HeaderComponent from "./components/Header";
import BodyComponent from "./components/Body";
import FooterComponent from "./components/Footer";
import Error from "./components/Error";
import RestaurantDetails from "./components/RestaurantDetails";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import ProfileClassComponent from "./components/ProfileClass";
import Instamart from "./components/Instamart";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";


const About = lazy(() => import("./components/About"));


const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Shubham",
    email: "shubham@bond.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider
        value={{user:user, setUser: setUser}}
      >
        <HeaderComponent />
        <Outlet />
        <FooterComponent />
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: (
          <Suspense
            fallback={
              <div>
                {" "}
                <h1>Loading..............</h1>
              </div>
            }
          >
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile name="Akshay Bhau" />,
          },
          {
            path: "profileclass",
            element: <ProfileClassComponent name="Akshay Bhau" />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <RestaurantDetails />,
      },
      {
        path: "/instamart",
        element: <Instamart />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },

    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
//  "main": "app.js",
