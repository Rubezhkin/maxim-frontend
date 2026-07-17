import { useParams } from "react-router-dom";
import { getUser } from "../api/userApi";
import { useEffect, useState } from "react";
import { IUser } from "../models/IUser";

function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    if (!id) return;

    async function loadUser() {
      const data = await getUser(Number(id));
      setUser(data);
    }
    loadUser();
  }, [id]);

  return <div>страница пользователя {user?.login}</div>;
}
export default UserPage;
