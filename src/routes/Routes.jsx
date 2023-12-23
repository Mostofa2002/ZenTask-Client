import { createBrowserRouter } from "react-router-dom";
import Roots from "../root/Roots";
import Home from "../Components/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots />,
    children: [{ path: "/", element: <Home /> }],
  },
]);

export default router;
