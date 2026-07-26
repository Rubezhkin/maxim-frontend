import { Link } from "react-router-dom";
import { IComment } from "../models/IComment";
import LikeCommentButton from "./LikeCommentButton";
import { useAppSelector } from "../hooks/redux";
import DeleteCommentButton from "./DeleteCommentButton";

interface Props {
  comment: IComment;
  onChange: () => Promise<void>;
}

function CommentCard({ comment, onChange }: Props) {
  const authUser = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <Link to={`/profile/${comment.authorId}`}>
        <small>{comment.author}</small>
      </Link>
      {authUser?.id === comment.authorId ? (
        <DeleteCommentButton id={comment.id} onChange={onChange} />
      ) : (
        <></>
      )}
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
