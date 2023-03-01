import { useEffect } from "react";
import { fetchUsers, addUser , removeUser } from "../store";
import { useSelector } from "react-redux";
import useThunk from "../hooks/use-thunk";
import Button from "./Button";
import Skeleton from "./Skeleton";
import UserListItem from "./UserListItem";
function UsersList() {
  const [loadUser, isLoading, loadingError] = useThunk(fetchUsers);
  const [createUser, isCreating, creatingError] = useThunk(addUser);
  const { data } = useSelector((state) => state.users);

  console.log(data);
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const handleUserClick = () => {
    createUser();
  };

  let content;
  if (!creatingError) {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  if (isLoading) {
    content = <Skeleton times={6} className="h-10 w-full" />;
  } else if (loadingError) {
    content = <div>Error fetching data..</div>;
  } else {
    content = data.map((user) => {
      return (
        <UserListItem key={user.id} user={user} />
      );
    });
  }

  return (
    <div className="container mx-auto">
      <div className="flex flex-row justify-between items-center m-6">
        <h1 className="m-2 text-xl">Users</h1>

        <Button
          loading={isCreating}
          className="fixed right-8 z-10 bg-gray-500 lg:right-24"
          onClick={handleUserClick}
        >
          + Add User
        </Button>

        {creatingError && "Error creting user..."}
      </div>

      {content}
    </div>
  );
}

export default UsersList;
