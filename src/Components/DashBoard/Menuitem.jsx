import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5 rounded-lg  border-green-500 transition-colors duration-300 transform  hover:bg-white   hover:text-green-500 ${
          isActive ? "bg-white  border-green-500" : " border-green-500"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
