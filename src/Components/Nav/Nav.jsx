import { useState } from "react";
import Logo from "../Logo/Logo";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Nav = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav
        x-data={{ isOpen: false }}
        className="relative bg-white shadow dark:bg-gray-800"
      >
        <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <Logo />

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                x-cloak
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            x-cloak
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${
              isOpen
                ? "translate-x-0 opacity-100 "
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col md:flex-row md:mx-6">
              <NavLink className=" font-bold text-xl my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-green-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                Home
              </NavLink>
              <NavLink
                to="/dashboard"
                className=" font-bold  text-xl my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-green-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Dashboard
              </NavLink>

              <NavLink
                to="/team"
                className="  font-bold text-xl my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-green-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Team
              </NavLink>
              <NavLink
                to="/blog"
                className="  font-bold text-xl my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-green-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
              >
                Blog
              </NavLink>
              {user ? (
                <button
                  onClick={() => {
                    logOut();
                  }}
                  className=" font-bold text-xl my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-green-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                >
                  LogOut
                </button>
              ) : (
                <Link to="/login">
                  <button className=" font-bold text-xl my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-green-500 dark:hover:text-blue-400 md:mx-4 md:my-0">
                    Login
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
