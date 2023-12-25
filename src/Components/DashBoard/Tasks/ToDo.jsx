import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAllTask from "../../../hooks/useAllTask";
import SingleTodo from "./SingleTodo";

const ToDo = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { alltaskshow, refetch } = useAllTask();
  const FilterTaskByEmail = alltaskshow.filter(
    (task) => task.creatorEmail === user?.email
  );
  const FilterTaskBStatus = FilterTaskByEmail.filter(
    (task) => task.taskStatus === "todo"
  );
  console.log(FilterTaskBStatus);

  const MakeApprove = (id) => {
    axiosPublic.patch(`/task-ongoing/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Is Ongoing Now",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:8000/task-delete/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Task has been deleted.", "success");
            }
            refetch();
          });
      }
    });
  };

  return (
    <div className="my-5">
      <h1 className="text-center font-bold text-4xl text-black">Todo List</h1>

      {FilterTaskBStatus?.map((items) => (
        <SingleTodo
          key={items}
          items={items}
          handleDelete={handleDelete}
          MakeApprove={MakeApprove}
        ></SingleTodo>
      ))}
    </div>
  );
};

export default ToDo;
