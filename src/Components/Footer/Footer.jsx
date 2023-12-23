import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-xl text-medium dark:text-gray-300">
              © Copyright 2023. All Rights Reserved.
            </p>

            <div className="flex -mx-2">
              <Link
                to="https://www.linkedin.com/in/mostofa-taj-52472a1b9"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-green-500 dark:hover:text-blue-400"
              >
                <FaLinkedin className="text-xl" />
              </Link>

              <Link
                to="https://github.com/Mostofa2002"
                className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-green-500 dark:hover:text-blue-400"
              >
                <FaGithub className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
