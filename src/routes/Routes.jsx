import { createBrowserRouter } from "react-router-dom";
import Roots from "../root/Roots";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";
import Team from "../Components/Team/Team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "team",
        element: <Team />,
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
]);

export default router;
