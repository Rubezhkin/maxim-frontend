import { Link } from "react-router-dom";
import { IComment } from "../models/IComment";

interface Props {
  comment: IComment;
}

function CommentCard({ comment }: Props) {
  return (
    <div>
      <Link to={`/profile/${comment.authorId}`}>
        <small>{comment.author}</small>
      </Link>
      <p>{comment.comment}</p>
      <p>лайкнули {comment.likesCount} раз(а)</p>
      <p>
        {comment.isLiked ? "комментарий лайкнут" : "комментарий не лайкнут"}
      </p>
    </div>
  );
}

export default CommentCard;
