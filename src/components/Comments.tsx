import { IComment } from "../models/IComment";
import CommentCard from "./CommentCard";

interface Props {
  comments: IComment[];
}

function Comments({ comments }: Props) {
  return (
    <>
      {(comments.length ?? 0) > 0
        ? comments.map((comment) => (
            <CommentCard key={comment.id} comment={comment} />
          ))
        : "Комментариев нет!"}
    </>
  );
}
export default Comments;
