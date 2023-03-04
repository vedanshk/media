import Button from "./Button";
import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
function PhotoListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();
  const handleDelete = (photo) => {
    removePhoto(photo);
  };

  return (
    <div className="m-2 relative z-99">
      <div className="absolute right-0 top-0 bg-white opacity-0 hover:opacity-80 z-100">
        <Button loading={results.isLoading} onClick={() => handleDelete(photo)}>
          <GoTrashcan />
        </Button>
      </div>
      <img className="h-20 w-20" src={photo.url} />
    </div>
  );
}

export default PhotoListItem;
