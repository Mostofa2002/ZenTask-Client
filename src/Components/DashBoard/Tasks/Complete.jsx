import SingleCompleted from "./SingleCompleted";
import useAllTask from "./../../../hooks/useAllTask";
import useAuth from "../../../hooks/useAuth";

const Complete = () => {
  const { user } = useAuth();

  const { alltaskshow } = useAllTask();
  const FilterTaskByEmail = alltaskshow.filter(
    (task) => task.creatorEmail === user?.email
  );
  const FilterTaskBStatus = FilterTaskByEmail.filter(
    (task) => task.taskStatus === "completed"
  );
  console.log(FilterTaskBStatus);

  return (
    <div className="my-5">
      <h1 className="text-center font-bold text-4xl text-black">
        Completed List
      </h1>

      {FilterTaskBStatus?.map((items) => (
        <SingleCompleted key={items} items={items}></SingleCompleted>
      ))}
    </div>
  );
};

export default Complete;
