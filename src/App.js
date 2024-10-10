import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
import CartInfo from "./components/CartInfo";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        const data = {
            name: "",
        }
        setUserName(data.name);
    }, []);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{UserLoggedIn : userName, setUserName}}>
            <div>
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>  
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback={"loading..."}><Grocery /></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path : "/cart",
                element : <CartInfo />
            }
        ],
        errorElement: <Error />,
    },
])


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(< RouterProvider router={appRouter} />);