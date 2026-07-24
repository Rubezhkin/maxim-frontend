import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api/postApi";
import Header from "../components/Header";
import PostCard from "../components/PostCard";
import { IPost } from "../models/IPost";
import Comments from "../components/Comments";
import { IComment } from "../models/IComment";
import { getComments } from "../api/commentApi";

function PostPage() {
  const { id } = useParams();
  const [post, setPosts] = useState<IPost | null>(null);
  const [comments, setComments] = useState<IComment[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      const responcePosts = await getPost(Number(id));
      setPosts(responcePosts);
      const responceComments = await getComments(Number(id));
      setComments(responceComments);
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
              <PostCard post={post} />
              <Comments comments={comments} />
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
