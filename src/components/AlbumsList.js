import React from "react";
import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useRemoveAlbumMutation,
} from "../store";
import Skeleton from "./Skeleton";
import ExapandablePanel from "./ExapandablePanel";
import Button from "./Button";
import { GoTrashcan } from "react-icons/go";
import PhotoList from "./PhotoList";
function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const [removeAlbum, removeAlbumResults] = useRemoveAlbumMutation();

  const handleClick = () => {
    addAlbum(user);
  };
  const handleDelete = (album) => {
    removeAlbum(album);
  };
  console.log(data);
  let content;

  if (isLoading) {
    content = <Skeleton className="h-10 w-10" times={3} />;
  } else if (error) {
    content = <div>Error Loading albums</div>;
  } else {
    content = data.map((albums) => {
      const header = (
        <div className="flex gap-2">
          <Button loading={removeAlbumResults.isLoading} onClick={() => handleDelete(albums)}>
            <GoTrashcan />
          </Button>
          {albums.title}
        </div>
      );
      return (
        <ExapandablePanel header={header} key={albums.id}>
          <PhotoList album={albums} />
        </ExapandablePanel>
      );
    });
  }
  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg font-bold">Albums for {user.name}</h3>
        <Button loading={results.isLoading} onClick={handleClick}>
          + Add Album
        </Button>{" "}
      </div>{" "}
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
