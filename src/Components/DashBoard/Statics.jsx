import useUser from "./../../hooks/useUser";
import useAllTask from "./../../hooks/useAllTask";

const Statics = () => {
  const { userList } = useUser();
  const { alltaskshow, refetch } = useAllTask();
  refetch();

  const OnGoTask = alltaskshow.filter((task) => task.taskStatus === "ongoing");
  const DoneTask = alltaskshow.filter(
    (task) => task.taskStatus === "completed"
  );

  console.log(alltaskshow.length);
  console.log(OnGoTask.length);
  console.log(DoneTask.length);
  console.log(userList.length);

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="bg-white rounded-r-none rounded-lg p-4">
          <h1 className="text-3xl  font-bold text-green-600">Website State </h1>
        </div>
      </div>

      <section className="p-6 my-6 dark:bg-gray-800 text-black">
        <div className="container grid grid-cols-1 gap-6 mx-auto  xl:grid-cols-4">
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-4 border-green-500 text-black ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-green-400"></div>
            <div className="flex flex-row gap-2  justify-center items-center">
              <p className="text-xl font-semibold ">{userList.length}</p>
              <p className="capitalize text-xl">Active Users</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-4 border-green-500 text-black ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-green-400"></div>
            <div className="flex flex-row gap-2  justify-center items-center">
              <p className="text-xl font-semibold ">{alltaskshow.length}</p>
              <p className="capitalize text-xl"> Total Task </p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-4 border-green-500 text-black ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-green-400"></div>
            <div className="flex flex-row gap-2  justify-center items-center">
              <p className="text-xl font-semibold ">{OnGoTask.length}</p>
              <p className="capitalize text-xl">Task Pending</p>
            </div>
          </div>
          <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 border-4 border-green-500 text-black ">
            <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 bg-green-400"></div>
            <div className="flex flex-row gap-2  justify-center items-center">
              <p className="text-xl font-semibold ">{DoneTask.length}</p>
              <p className="capitalize text-xl">Task Done</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Statics;
