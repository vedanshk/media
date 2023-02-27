import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skeleton from "./Skeleton";
function UsersList() {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);
  const dispatch = useDispatch();
  const { data} = useSelector((state) => state.users);

  console.log(data);
  useEffect(() => {
    setIsLoadingUsers(true)
    dispatch(fetchUsers()).unwrap().catch((err)=>{
        setLoadingUsersError(err)
    }).finally(()=>{

            setIsLoadingUsers(false);
    });
  }, []);

  const handleUserClick = () => {
    dispatch(addUser());
  };

  if (isLoadingUsers) {
    return (
      <div>
        <Skeleton times={6} className="h-10 w-full" />
      </div>
    );
  }

  if (loadingUsersError) {
    return <div>Error fetching data..</div>;
  }

  const renderedUsers = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 border rounded ">
        <div className="flex p-2 justify-between items-center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl"></h1>
        <Button onClick={handleUserClick}>+ Add User</Button>
      </div>
      Length: {renderedUsers}
    </div>
  );
}

export default UsersList;
