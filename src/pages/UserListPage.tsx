import { useEffect, useState } from "react";
import { IUserList } from "../models/IUserList";
import { getUsers } from "../api/userApi";
import Header from "../components/Header";
import UserList from "../components/UserList";

function UserListPage() {
  const [users, setUsers] = useState<IUserList[]>([]);
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
      {loading ? (
        <>Идет Загрузка</>
      ) : (
        <UserList users={users} onChange={loadUsers} />
      )}
    </>
  );
}
export default UserListPage;
