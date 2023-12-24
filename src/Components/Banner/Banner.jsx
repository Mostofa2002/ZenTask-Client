import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div>
      <header className="bg-white dark:bg-gray-900">
        <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
          <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
            <div className="max-w-lg lg:mx-12 lg:order-2">
              <h1 className="text-3xl font-black tracking-wide text-black dark:text-white lg:text-4xl">
                Elevate Your Productivity with Serene <br />{" "}
                <span className="text-green-500"> Task Management</span>
              </h1>
              <p className="mt-4 font-medium text-gray-600 dark:text-gray-300">
                Seamlessly organize your tasks with tranquility. Elevate your
                productivity and find serenity in efficient task management.
                Embrace a Zen-inspired approach to achieve balance and focus in
                your daily activities.
              </p>
              <div className="mt-6">
                <Link className="px-6 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-green-600 rounded-lg hover:bg-green-500 lg:mx-0 lg:w-auto focus:outline-none">
                  Lets Explore
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center w-full h-[450px] lg:w-1/2">
            <img
              className="object-cover  w-full h-full max-w-2xl rounded-md animate-pulse "
              src="https://i.ibb.co/x1fPkHS/project-task-management-and-effective-time-planning-tools-project-development-icon-3d-vector-illustr.png"
              alt=""
            />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Banner;
