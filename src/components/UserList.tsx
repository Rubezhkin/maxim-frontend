import { IUserList } from "../models/IUserList";
import UserCard from "./UserCard";

interface Props {
  users: IUserList[];
  onChange: () => Promise<void>;
}

function UserList({ users, onChange }: Props) {
  return (
    <>
      {(users.length ?? 0) > 0 ? (
        <>
          {users.map((user) => (
            <UserCard key={user.id} user={user} onChange={onChange} />
          ))}
        </>
      ) : (
        <>Пользователей нет!</>
      )}
    </>
  );
}
export default UserList;
