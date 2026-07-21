import { useEffect, useState } from "react";
import { IUserList } from "../models/IUserList";
import { getUsers } from "../api/userApi";
import Header from "../components/Header";
import UserCard from "../components/UserCard";

function UserListPage() {
  const [users, setUsers] = useState<IUserList[] | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const response = await getUsers();
      setUsers(response);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      {users?.map(
        (
          user, //переделать под отдельный компонент
        ) => (
          <UserCard user={user} />
        ),
      )}
    </>
  );
}
export default UserListPage;
