import React from "react";
import { useFetchAlbumsQuery  , useAddAlbumMutation} from "../store";
import Skeleton from "./Skeleton";
import ExapandablePanel from "./ExapandablePanel";
import Button from "./Button";
function AlbumsList({ user }) {
  const { data, error, isLoading} = useFetchAlbumsQuery(user);
  const[addAlbum , results] = useAddAlbumMutation();


  const handleClick = () =>{

    addAlbum(user);
  }
  console.log(data);
  let content;

  if (isLoading) {
    content = <Skeleton times={3} />;
  } else if (error) {
    content = <div>Error Loading albums</div>;
  } else {
    content = data.map((albums) => {
      const header = <div>
        {albums.title}
      </div>;
      return (
        <ExapandablePanel header={header} key={albums.id}>
          Lists of photos in the album
        </ExapandablePanel>
      );
    });
  }
  return (
    <div>
      <div>Albums for {user.name}</div>
      <Button loading={false} onClick={handleClick}>
        + Add Album
      </Button>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
