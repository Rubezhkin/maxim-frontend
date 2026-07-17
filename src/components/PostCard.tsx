import { IPost } from "../models/IPost";

interface Props {
  post: IPost;
}

function PostCard({ post }: Props) {
  return (
    <div>
      <h1>{post.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <small>{post.author}</small>
      <p>{post.likesCount}</p>
      <p>{post.isLiked ? "пост лайкнут" : "пост не лайкнут"}</p>
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
