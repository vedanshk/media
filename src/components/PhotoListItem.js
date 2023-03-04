import Button from "./Button";
import { useRemovePhotoMutation } from "../store";
import { GoTrashcan } from "react-icons/go";
function PhotoListItem({ photo }) {
  const [removePhoto, results] = useRemovePhotoMutation();
  const handleDelete = (photo) => {
    removePhoto(photo);
  };

  return (
    <div className="flex gap-2">
      <Button loading={results.isLoading} onClick={() => handleDelete(photo)}>
        <GoTrashcan />
      </Button>
      {photo.title}
      <img src={photo.url} />
    </div>
  );
}

export default PhotoListItem;
