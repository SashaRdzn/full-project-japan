import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home.jsx";
import Catalog from "../../pages/Catalog/Catalog.jsx";
import CardDetails from "../../pages/Catalog/CardDetails/CardDetails.jsx";
import  Register  from "../../pages/Auth/Register/Register";
import  Login  from "../../pages/Auth/Login/Login";
import SpaceNavigataion from "../Space/SpaceNavigataion.jsx";
import "../../styles/style.scss";
import Profile from "../../pages/Profile/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SpaceNavigataion />,
    children: [
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/profile",
        element: <Profile />,
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
        element: <div>404 Not Found</div>,
      },
    ],
  },
]);

export default router;
