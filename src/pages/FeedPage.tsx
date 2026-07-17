import { useEffect, useState } from "react";
import Header from "../components/Header";
import { getFeed } from "../api/postApi";
import PostCard from "../components/PostCard";
import { IPost } from "../models/IPost";

function FeedPage() {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      const response = await getFeed();
      setPosts(response);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Header />

      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </>
  );
}
export default FeedPage;
