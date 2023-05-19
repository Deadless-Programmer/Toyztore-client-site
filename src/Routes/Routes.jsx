import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

import MyAllToys from "../Pages/MyAllToys/MyAllToys";
import AddASingleToys from "../Pages/AddASingleToys/AddASingleToys";
import PrivetRoute from "./PrivetRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element:<Main></Main>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:"/allToys",
                element:<AllToys></AllToys>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/myToys',
                element: <PrivetRoute><MyAllToys></MyAllToys></PrivetRoute>
            },
            {
                path:'/addAtoys',
                element:<PrivetRoute><AddASingleToys></AddASingleToys></PrivetRoute>
            }
        ]
    }
]);





export default router;








