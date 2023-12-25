import { useState } from "react";
import MenuItem from "./MenuItem";
import { FaHome } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { MdOutlineAddTask } from "react-icons/md";
import { BsGraphUp } from "react-icons/bs";
import DashTittle from "./DashTitle";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-green-600  flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <DashTittle />
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button text-2xl text-white p-4 
          "
        >
          <IoMenu />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-green-600  w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 rounded-lg justify-center items-center  mx-auto">
              <DashTittle />
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              <MenuItem icon={FaHome} label="Home" address="/" />
              <MenuItem
                icon={BsGraphUp}
                label="Statics"
                address="/dashboard/Statics"
              />
              <MenuItem
                icon={FaTasks}
                label="All Task"
                address="/dashboard/all-task"
              />
              <MenuItem
                icon={MdOutlineAddTask}
                label="Add Task"
                address="/dashboard/add-task"
              />

              {/* Menu Items */}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
