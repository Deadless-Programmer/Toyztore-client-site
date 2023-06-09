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
import Details from "../Pages/AllToys/Details";
import UpdateToy from "../Pages/MyAllToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch("https://toyztore-server.vercel.app/signgleToys"),
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/myToys",
        element: (
          <PrivetRoute>
            <MyAllToys></MyAllToys>
          </PrivetRoute>
        ),
      },
      {
        path: "/addAtoys",
        element: (
          <PrivetRoute>
            <AddASingleToys></AddASingleToys>
          </PrivetRoute>
        ),
      },
      {
        path: "/productDetails/:id",
        element: (
          <PrivetRoute>
            <Details></Details>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://toyztore-server.vercel.app/signgleToys/${params.id}`),
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({ params }) =>
          fetch(`https://toyztore-server.vercel.app/signgleToys/${params.id}`),
      },
    ],
  },
]);

export default router;
