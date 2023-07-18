import React, { Children } from "react";
import  ReactDOM  from "react-dom/client";
import restaurantList from "./ResturantLists";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import Restcards from "./Restcards";
import About from "./About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./Error";
import Contact from "./Contact";
import RestaurantMenu from "./RestaurantMenu";


  
const AppLayout = () => {
    return (
        <>
       <Header />
       <Outlet />
       <Footer />
        </>


    )
}    

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children:[
            {
                path: "/",
                element: <Body />
            },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/contact",
            element: <Contact />
        },
        {
            path: "/resturant/:understandid",
            element: <RestaurantMenu/>
        },
    ],
},
   
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



