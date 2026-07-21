import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/postApi";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { IPost } from "../models/IPost";

function PostPage() {
  const { id } = useParams();
  const [post, setPosts] = useState<IPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      const responce = await getPost(Number(id));
      setPosts(responce);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Header />
      {loading ? (
        <>Идет Загрузка</>
      ) : (
        <>
          {post ? (
            <>
              <PostCard post={post} />И дальше комменты
            </>
          ) : (
            <>Пост не найден!</>
          )}
        </>
      )}
    </div>
  );
}
export default PostPage;
