import { useState } from "react";
import { createPost } from "../api/postApi";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

function CreatePostPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const formData = new FormData();
  const navigate = useNavigate();

  const createPostHandle = async () => {
    formData.append("title", title);
    formData.append("content", content);
    if (image) {
      console.log("with file");
      formData.append("image", image);
    }

    await createPost(formData);
    navigate("/");
  };
  return (
    <>
      <Header />
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
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0] ?? null;
          setImage(file);
        }}
      />
      <button onClick={createPostHandle}>Опубликовать пост</button>
    </>
  );
}
export default CreatePostPage;
