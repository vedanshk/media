import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Button from "./Button";
import Panel from "./Panel";
import Skeleton from "./Skeleton";
function UsersList() {
  const dispatch = useDispatch();
  const { data, isLoading, error } = useSelector((state) => state.users);

  console.log(data);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (isLoading) {
    return <div><Skeleton times={6} className="h-10 w-full" /></div>;
  }

  if (error) {
    return <div>Error fetching data..</div>;
  }

  return <div className="container mx-auto">
    Length: {data.length}
  </div>;
}

export default UsersList;
