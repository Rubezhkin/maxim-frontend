import { useEffect, useState } from "react";
import { createPost, editPost, getPost } from "../api/postApi";
import Header from "../components/Header";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { IPost } from "../models/IPost";

function EditPostPage() {
  const { id } = useParams();
  const auhtUser = useAppSelector((state) => state.auth.user);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPosts] = useState<IPost | null>(null);
  const formData = new FormData();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    loadPost();
  }, [id]);

  const loadPost = async () => {
    try {
      const responsePost = await getPost(Number(id));
      setPosts(responsePost);
      setTitle(responsePost.title);
      setContent(responsePost.content);
    } finally {
      setLoading(false);
    }
  };
  const editPostHandle = async () => {
    formData.append("title", title);
    formData.append("content", content);

    await editPost(Number(id), formData);
    navigate("/");
  };
  return (
    <>
      <Header />
      {loading ? (
        <>Идет загрузка</>
      ) : auhtUser?.id === post?.authorId ? (
        <>
          <input
            type="text"
            placeholder="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <button onClick={editPostHandle}>Отредактировать пост</button>
        </>
      ) : (
        <>Нет доступа</>
      )}
    </>
  );
}
export default EditPostPage;
