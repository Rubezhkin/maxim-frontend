import { deletePost } from "../api/postApi";

interface Props {
  id: number;
  onChange: () => Promise<void>;
}

function DeletePostButton({ id, onChange }: Props) {
  const handleDelete = async () => {
    await deletePost(id);
    await onChange();
  };

  return <button onClick={handleDelete}>Удалить пост</button>;
}
export default DeletePostButton;
