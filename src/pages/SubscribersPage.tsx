import { useEffect, useState } from "react";
import { IUserList } from "../models/IUserList";
import Header from "../components/Header";
import UserList from "../components/UserList";
import { getSubscribers } from "../api/subscriptionApi";
import { useParams } from "react-router-dom";
import { IUser } from "../models/IUser";
import { getUser } from "../api/userApi";

function SubscribersPage() {
  const { id } = useParams();
  const [users, setUsers] = useState<IUserList[]>([]);
  const [author, setAuthror] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadUsers();
  }, [id]);

  const loadUsers = async () => {
    try {
      const responseUser = await getSubscribers(Number(id));
      setUsers(responseUser);
      const responseAuthor = await getUser(Number(id));
      setAuthror(responseAuthor);
    } finally {
      setLoading(false);
    }
  };
  console.log("SubscribersPage");
  return (
    <>
      <Header />
      {loading ? (
        <>Идет Загрузка</>
      ) : (
        <>
          Список подписчиков {author?.login} <UserList users={users} />
        </>
      )}
    </>
  );
}
export default SubscribersPage;
