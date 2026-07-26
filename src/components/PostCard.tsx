import { Link } from "react-router-dom";
import { IPost } from "../models/IPost";
import LikePostButton from "./LikePostButton";
import { useAppSelector } from "../hooks/redux";
import DeletePostButton from "./DeletePostButton";

interface Props {
  post: IPost;
  onChange: () => Promise<void>;
}

function PostCard({ post, onChange }: Props) {
  const authUser = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <Link to={`/post/${post.id}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.content}</p>
      <Link to={`/profile/${post.authorId}`}>
        <small>{post.author}</small>
      </Link>
      {post.mediaFiles.length > 0 && (
        <img
          src={`http://localhost:5000/${post.mediaFiles[0].name}`}
          style={{ maxWidth: "400px" }}
        />
      )}
      <p>лайкнули {post.likesCount} раз(а)</p>
      <LikePostButton id={post.id} isLiked={post.isLiked} onChange={onChange} />
      {authUser?.id === post.authorId ? (
        <>
          <Link to={`/post/${post.id}/edit`}>Редактировать пост</Link>
          <DeletePostButton id={post.id} onChange={onChange} />
        </>
      ) : (
        <></>
      )}
      <p>прокомментировали {post.commentsCount} раз(а)</p>
    </div>
  );
}

export default PostCard;
