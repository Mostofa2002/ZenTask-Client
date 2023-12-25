import { MdPlaylistAddCircle } from "react-icons/md";
import { useForm } from "react-hook-form";
import { RiAddCircleLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AddTask = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const taskTitle = data.taskTitle;
    const creatorName = user?.displayName;
    const taskDeadline = data.taskDeadline;
    const taskPriority = data.taskPriority;
    const taskDetails = data.taskDetails;
    const taskStatus = "todo";
    const creatorEmail = user?.email;
    reset({
      taskTitle: "",
      taskDeadline: "",
      taskPriority: "",
      taskDetails: "",
    });

    const PostedTaskData = {
      taskTitle,
      creatorName,
      taskDeadline,
      taskPriority,
      taskDetails,
      taskStatus,
      creatorEmail,
    };

    console.log(PostedTaskData);

    fetch("https://task-server-mocha.vercel.app/added-tasks", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(PostedTaskData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Successfully!",
            text: "Your Task Added  ",
            icon: "success",
            confirmButtonText: "Okay",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/dashboard/all-task");
            }
          });
        }
      });
  };
  return (
    <div className="min-h-screen">
      <h1 className="flex gap-x-2  justify-center items-center text-green-600 text-4xl font-bold">
        <MdPlaylistAddCircle className="text-5xl" /> Add Your Task Here
      </h1>

      <section className="content-around max-w-screen-xl mx-auto  ">
        <form className=" flex flex-col " onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className=" block  my-2 text-xl  border-green-500 ">
              Task Title
            </label>
            <input
              type="text"
              name="taskTitle"
              {...register("taskTitle")}
              placeholder="Enter Task Title"
              className="lg:w-1/2 px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-green-500 rounded-lg focus:border-green-400  focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label className=" block  my-2 text-xl  border-green-500 ">
              Task Creator
            </label>
            <input
              type="text"
              name="creatorName"
              defaultValue={user?.displayName}
              disabled
              {...register("creatorName")}
              placeholder="Enter Your Name"
              className="lg:w-1/2 px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-green-500 rounded-lg focus:border-green-400  focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label className=" block  my-2 text-xl  border-green-500 ">
              Task Deadline
            </label>
            <input
              type="date"
              name="taskDeadline"
              {...register("taskDeadline")}
              placeholder="XXX-XX-XXXX-XXX"
              className="lg:w-1/2 px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-green-500 rounded-lg focus:border-green-400  focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div>
            <label className=" block  my-2 text-xl  border-green-500 ">
              Task Priority{" "}
            </label>

            <select
              {...register("taskPriority")}
              className="lg:w-1/2 px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-green-500 rounded-lg focus:border-green-400  focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
              placeholder="Select Priority"
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>

          <div>
            <label className=" block  my-2 text-xl  border-green-500 ">
              Task Description
            </label>
            <textarea
              name="taskDetails"
              {...register("taskDetails")}
              placeholder="Enter Task Description"
              className="lg:w-1/2 px-5 py-3 mt-2 text-gray-700 placeholder-black bg-white border border-green-500 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-green-400 dark:focus:border-green-400 focus:ring-green-400 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <button
            type="submit"
            className="flex mt-5 items-center justify-between lg:w-1/2 px-6 py-3 text-lg tracking-wide text-white capitalize transition-colors duration-300 transform bg-green-500 rounded-lg hover:bg-black  border-2 "
          >
            <span>Add Task </span>

            <RiAddCircleLine className="text-3xl" />
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddTask;
