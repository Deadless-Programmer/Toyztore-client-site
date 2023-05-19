import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";
import Error from "../Pages/Error/Error";


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
            }
        ]
    }
]);





export default router;








