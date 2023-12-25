import { createBrowserRouter } from "react-router-dom";
import Roots from "../root/Roots";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Blog from "../Components/Blog/Blog";
import Team from "../Components/Team/Team";
import DashBoard from "../Components/DashBoard/DashBoard";
import AddTask from "../Components/DashBoard/AddTask";
import AllTask from "../Components/DashBoard/AllTask";
import UpdateTask from "./../Components/DashBoard/TaskUpdate/UpdateTask";
import Statics from "../Components/DashBoard/Statics";
import PrivateRoute from "./PrivateRoute";

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
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/all-task",
        element: <AllTask />,
      },
      {
        path: "/dashboard/add-task",
        element: <AddTask />,
      },
      {
        path: "/dashboard/Statics",
        element: <Statics />,
      },
      {
        path: "/dashboard/updateTask/:id",
        element: <UpdateTask />,
        loader: ({ params }) =>
          fetch(`http://localhost:8000/task-update/${params?.id}`),
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
