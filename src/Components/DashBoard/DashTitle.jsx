import useUser from "./../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import Title from "./Title";

const DashTittle = () => {
  const { userList } = useUser();
  const { user } = useAuth();
  const filterUserList = userList.filter(
    (contest) => contest.email === user?.email
  );
  console.log(filterUserList);
  return (
    <div>
      {filterUserList?.map((items) => (
        <Title key={items} items={items}></Title>
      ))}
    </div>
  );
};

export default DashTittle;
