import { useState } from "react";
import { IComment } from "../models/IComment";
import CommentCard from "./CommentCard";
import { createComment } from "../api/commentApi";

interface Props {
  id: number;
  comments: IComment[];
  onChange: () => Promise<void>;
}

function Comments({ id, comments, onChange }: Props) {
  const [newComment, setNewComment] = useState("");

  const createCommentHandle = async () => {
    createComment(id, newComment);
    onChange();
    setNewComment("");
  };
  return (
    <>
      <input
        type="text"
        placeholder="title"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
      />
      <button onClick={createCommentHandle}>Опубликовать комментарий</button>
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
