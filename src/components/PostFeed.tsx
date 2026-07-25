import { IPost } from "../models/IPost";
import PostCard from "./PostCard";

interface Props {
  posts: IPost[];
  onChange: () => Promise<void>;
}

function PostFeed({ posts, onChange }: Props) {
  return (
    <>
      {(posts.length ?? 0) > 0
        ? posts.map((post) => (
            <PostCard key={post.id} post={post} onChange={onChange} />
          ))
        : "Постов нет!"}
    </>
  );
}
export default PostFeed;
