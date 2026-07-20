import { IPost } from "../models/IPost";
import PostCard from "./PostCard";

interface Props {
  posts: IPost[];
}

function PostFeed({ posts }: Props) {
  return (
    <>
      {(posts.length ?? 0) > 0
        ? posts.map((post) => <PostCard key={post.id} post={post} />)
        : "Постов нет!"}
    </>
  );
}
export default PostFeed;
