import { useEffect, useState } from "react";
import { IUserList } from "../models/IUserList";
import Header from "../components/Header";
import UserList from "../components/UserList";
import { getSubscribers, getSubscriptions } from "../api/subscriptionApi";
import { useParams } from "react-router-dom";
import { IUser } from "../models/IUser";
import { getUser } from "../api/userApi";

function SubscriptionPage() {
  const { id } = useParams();
  const [users, setUsers] = useState<IUserList[]>([]);
  const [author, setAuthror] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadUsers();
  }, [id]);

  const loadUsers = async () => {
    try {
      const responseUser = await getSubscriptions(Number(id));
      setUsers(responseUser);
      const responseAuthor = await getUser(Number(id));
      setAuthror(responseAuthor);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      {loading ? (
        <>Идет Загрузка</>
      ) : (
        <>
          Список подписок {author?.login} <br />
          <UserList users={users} onChange={loadUsers} />
        </>
      )}
    </>
  );
}
export default SubscriptionPage;
