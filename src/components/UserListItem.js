import { GoTrashcan } from "react-icons/go";
import useThunk from "../hooks/use-thunk";
import { removeUser } from "../store";
import Button from "./Button";
import ExapandablePanel from "./ExapandablePanel";
import AlbumsList from "./AlbumsList";
function UserListItem({ user }) {
  const [doRemoveUser, isLoading, error] = useThunk(removeUser);

  const handleClick = () => {
    doRemoveUser(user);
  };

  if (!error) {
    window.scrollTo({
      left: 0,
      bottom: document.body.scrollHeight,
      behavior: "smooth",
    });
  }

  const header = (
    <div className="m-2 flex gap-4">
      <Button loading={isLoading} onClick={handleClick}>
        <GoTrashcan />
      </Button>
      {error && <div>Error deleting user. </div>}
     <p className="text-lg">{user.name}</p> 
    </div>
  );
  return <ExapandablePanel header={header}>
    <AlbumsList user={user} />
  </ExapandablePanel>;
}

export default UserListItem;
