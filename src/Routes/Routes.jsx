import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Games from "../Pages/Games";
import Profile from "../Pages/Profile";
import GameDetails from "../Pages/GameDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute"
import ErrorPage from "../Pages/ErrorPage";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <ErrorPage/>,
    children: [
       {
            path: "/",
            element: <Home/> 
        },
       {
            path: "*",
            element: <ErrorPage/> 
        },
       {
            path: "/games",
            element: <Games/> 
        },
       {
            path: "/news",
            element: <Home/> 
        },
       {
            path: "/game/:id",
            element: <PrivateRoute><GameDetails/></PrivateRoute> 
        },   
       {
            path: "/profile",
            element: <PrivateRoute><Profile/></PrivateRoute> 
        },   
    ]
  },
  {
    path: "/login",
    element: <Login/> 
  },
  {
    path: "/register",
    element: <Register/> 
  },
 
]);