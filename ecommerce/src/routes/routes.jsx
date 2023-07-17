import { createBrowserRouter } from "react-router-dom";
import AcercaDe from "../pages/home/acercade";
import Home from "../pages/home/Home";
import Navbar from "../components/Navbar";
import Categoria from "../pages/home/categoria";
import Login from "../pages/auth/login";
import Error from "../pages/error/error";
import Register from "../pages/auth/register";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categoria",
        element: <Categoria/>,
      },
      {
        path: "/acercade",
        element: <AcercaDe />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
