const UserSection = () => {
  return (
    <div className="my-20 container mx-auto">
      <div className="flex justify-center items-center">
        <h1 className="md:text-4xl text-2xl font-black text-green-600 ">
          Meet Our Regular Users
        </h1>
      </div>
      <div className=" gap-24 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-3 ">
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border border-green-600 dark:bg-gray-800">
          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            Developer
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Task Manager provides a range of benefits for users in managing and
            optimizing their computer systems. One of its key advantages is the
            ability to monitor system performance in real-time, offering
            insights into CPU usage, memory utilization, disk activity, and
            network performance. This information is crucial for identifying
            resource-intensive processes and troubleshooting performance issues
            efficiently.
          </p>
        </div>
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border border-green-600 dark:bg-gray-800">
          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            corporate professional
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Task Manager provides a range of benefits for users in managing and
            optimizing their computer systems. One of its key advantages is the
            ability to monitor system performance in real-time, offering
            insights into CPU usage, memory utilization, disk activity, and
            network performance. This information is crucial for identifying
            resource-intensive processes and troubleshooting performance issues
            efficiently.
          </p>
        </div>
        <div className="w-full max-w-md px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border border-green-600 dark:bg-gray-800">
          <h2 className="mt-2 text-xl font-semibold text-gray-800 dark:text-white md:mt-0">
            bankers
          </h2>

          <p className="mt-2 text-sm text-gray-600 dark:text-gray-200">
            Task Manager provides a range of benefits for users in managing and
            optimizing their computer systems. One of its key advantages is the
            ability to monitor system performance in real-time, offering
            insights into CPU usage, memory utilization, disk activity, and
            network performance. This information is crucial for identifying
            resource-intensive processes and troubleshooting performance issues
            efficiently.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserSection;
