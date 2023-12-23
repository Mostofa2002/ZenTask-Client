import { Outlet } from "react-router-dom";
import Nav from "../Components/Home/Nav/Nav";

const Roots = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

export default Roots;
