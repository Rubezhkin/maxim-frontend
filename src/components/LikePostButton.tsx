import { useState } from "react";
import { likePost, unlikePost } from "../api/likeApi";

interface Props {
  id: number;
  isLiked: boolean;
  onChange: () => Promise<void>;
}

function LikePostButton({ id, isLiked, onChange }: Props) {
  const [like, setLike] = useState(isLiked);

  const handleClick = async () => {
    if (like) {
      await unlikePost(id);
      setLike(false);
    } else {
      await likePost(id);
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

export default LikePostButton;
