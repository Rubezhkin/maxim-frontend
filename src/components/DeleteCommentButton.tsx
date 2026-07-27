import { deleteComment } from "../api/commentApi";

interface Props {
  id: number;
  onChange: () => Promise<void>;
}

function DeleteCommentButton({ id, onChange }: Props) {
  const handleDelete = async () => {
    await deleteComment(id);
    await onChange();
  };

  return <button onClick={handleDelete}>Удалить комментарий</button>;
}
export default DeleteCommentButton;
