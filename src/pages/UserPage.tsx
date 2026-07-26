import { Link, useParams } from "react-router-dom";
import { getUserProfile } from "../api/userApi";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { IUserProfile } from "../models/IUserProfile";
import PostFeed from "../components/PostFeed";
import SubscribeButton from "../components/SubscribeButton";
import { useAppSelector } from "../hooks/redux";

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<IUserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const auhtUser = useAppSelector((state) => state.auth.user);

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
      ) : user ? (
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
          {auhtUser?.id === user.id ? (
            <Link to={"/create"}>Создать пост</Link>
          ) : (
            <SubscribeButton
              id={user?.id}
              isSubscribed={user?.isSubscribed}
              onChange={loadUser}
            />
          )}
          <PostFeed posts={user?.posts ?? []} onChange={loadUser} />
        </>
      ) : (
        <>Пользватель не найден</>
      )}
    </div>
  );
}
export default UserPage;
