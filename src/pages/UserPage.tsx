import { Link, useParams } from "react-router-dom";
import { getUserProfile } from "../api/userApi";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { IUserProfile } from "../models/IUserProfile";
import PostFeed from "../components/PostFeed";

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<IUserProfile | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUser();
  }, [id]);

  const loadUser = async () => {
    try {
      const responce = await getUserProfile(Number(id));
      setUser(responce);
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
          страница пользователя {user?.login} <br />
          <Link to={`/profile/${user?.id}/subscribers`}>
            {user?.subscriberCount} подписчиков{" "}
          </Link>
          <br />
          <Link to={`/profile/${user?.id}/subscriptions`}>
            {user?.subscriptionCount} подписок
          </Link>
          <br />
          <PostFeed posts={user?.posts ?? []} />
        </>
      )}
    </div>
  );
}
export default UserPage;
