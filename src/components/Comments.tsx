import { IComment } from "../models/IComment";
import CommentCard from "./CommentCard";

interface Props {
  comments: IComment[];
  onChange: () => Promise<void>;
}

function Comments({ comments, onChange }: Props) {
  return (
    <>
      {(comments.length ?? 0) > 0
        ? comments.map((comment) => (
            <CommentCard
              key={comment.id}
              comment={comment}
              onChange={onChange}
            />
          ))
        : "Комментариев нет!"}
    </>
  );
}
export default Comments;
