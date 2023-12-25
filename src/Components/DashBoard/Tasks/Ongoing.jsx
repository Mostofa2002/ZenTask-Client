import Swal from "sweetalert2";

import useAxiosPublic from "./../../../hooks/useAxiosPublic";
import useAuth from "./../../../hooks/useAuth";
import SingleOnGoing from "./SingleOnGoing";
import useAllTask from "./../../../hooks/useAllTask";

const OnGoing = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { alltaskshow, refetch } = useAllTask();
  const FilterTaskByEmail = alltaskshow.filter(
    (task) => task.creatorEmail === user?.email
  );
  const FilterTaskBStatus = FilterTaskByEmail.filter(
    (task) => task.taskStatus === "ongoing"
  );
  console.log(FilterTaskBStatus);

  const MakeApprove = (id) => {
    axiosPublic.patch(`/task-complete/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Task Is Completed Now",
          showConfirmButton: false,
          timer: 1500,
        });
        refetch();
      }
    });
  };

  return (
    <div className="my-5">
      <h1 className="text-center font-bold text-4xl text-black">
        OnGoing List
      </h1>

      {FilterTaskBStatus?.map((items) => (
        <SingleOnGoing
          key={items}
          items={items}
          MakeApprove={MakeApprove}
        ></SingleOnGoing>
      ))}
    </div>
  );
};

export default OnGoing;
