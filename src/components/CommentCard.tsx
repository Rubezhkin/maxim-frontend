import { Link } from "react-router-dom";
import { IComment } from "../models/IComment";
import LikeCommentButton from "./LikeCommentButton";

interface Props {
  comment: IComment;
  onChange: () => Promise<void>;
}

function CommentCard({ comment, onChange }: Props) {
  return (
    <div>
      <Link to={`/profile/${comment.authorId}`}>
        <small>{comment.author}</small>
      </Link>
      <p>{comment.comment}</p>
      <p>лайкнули {comment.likesCount} раз(а)</p>
      <LikeCommentButton
        id={comment.id}
        isLiked={comment.isLiked}
        onChange={onChange}
      />
    </div>
  );
}

export default CommentCard;
