import { useState } from "react";
import { likeComment, unlikeComment } from "../api/likeApi";

interface Props {
  id: number;
  isLiked: boolean;
  onChange: () => Promise<void>;
}

function LikeCommentButton({ id, isLiked, onChange }: Props) {
  const [like, setLike] = useState(isLiked);

  const handleClick = async () => {
    if (like) {
      await unlikeComment(id);
      setLike(false);
    } else {
      await likeComment(id);
      setLike(true);
    }
    await onChange();
  };

  return (
    <button onClick={handleClick}>
      {like ? "Убрать лайк" : "Поставить лайк"}
    </button>
  );
}

export default LikeCommentButton;
