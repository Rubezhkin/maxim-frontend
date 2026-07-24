import { Link } from "react-router-dom";
import { IPost } from "../models/IPost";

interface Props {
  post: IPost;
}

function PostCard({ post }: Props) {
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.content}</p>
      <Link to={`/profile/${post.authorId}`}>
        <small>{post.author}</small>
      </Link>
      <p>лайкнули {post.likesCount} раз(а)</p>
      <p>{post.isLiked ? "пост лайкнут" : "пост не лайкнут"}</p>
      <p>прокомментировали {post.commentsCount} раз(а)</p>
      {post.mediaFiles.length > 0 && (
        <img
          src={`http://localhost:5000/${post.mediaFiles[0].name}`}
          style={{ maxWidth: "400px" }}
        />
      )}
    </div>
  );
}

export default PostCard;
