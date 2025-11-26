import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Games from "../Pages/Games";
import GameDetails from "../Pages/GameDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    
    children: [
       {
            path: "/",
            element: <Home/> 
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
            element: <GameDetails/> 
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